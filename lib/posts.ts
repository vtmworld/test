import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compile } from "@mdx-js/mdx";
import { z } from "zod";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "posts");
const MDX_EXTENSION = ".mdx";

const trimmedString = z
  .string()
  .transform((value) => value.trim())
  .refine((value) => value.length > 0, { message: "Value is required" });

const frontmatterSchema = z.object({
  title: trimmedString,
  description: trimmedString,
  date: trimmedString.transform((value, ctx) => {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: `Invalid date: ${value}` });
      return value;
    }
    return parsed.toISOString();
  }),
  category: trimmedString,
  tags: z
    .array(trimmedString)
    .nonempty()
    .transform((tags) => Array.from(new Set(tags))),
});

export type PostFrontmatter = z.infer<typeof frontmatterSchema>;

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  categorySlug: string;
  tags: string[];
  tagSlugs: string[];
}

export interface Post extends PostMeta {
  compiledContent: string;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await safeReadDir(POSTS_DIRECTORY);
  const mdxFiles = files.filter((file) => file.endsWith(MDX_EXTENSION));

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(new RegExp(`${MDX_EXTENSION}$`), "");
      const source = await readFileContents(slug);
      const { data } = matter(source);
      const parsed = frontmatterSchema.parse(data);
      return toMeta(parsed, slug);
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const source = await readFileContents(slug);
    const { data, content } = matter(source);
    const parsed = frontmatterSchema.parse(data);
    const compiled = await compile(content, {
      outputFormat: "function-body",
      development: false,
      providerImportSource: "@mdx-js/react",
    });

    return {
      ...toMeta(parsed, slug),
      compiledContent: String(compiled),
    };
  } catch (error) {
    if (isMissingFileError(error)) {
      return null;
    }

    throw error;
  }
}

function toMeta(frontmatter: PostFrontmatter, slug: string): PostMeta {
  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    category: frontmatter.category,
    categorySlug: slugify(frontmatter.category),
    tags: frontmatter.tags,
    tagSlugs: frontmatter.tags.map(slugify),
  };
}

async function readFileContents(slug: string): Promise<string> {
  const filePath = path.join(POSTS_DIRECTORY, `${slug}${MDX_EXTENSION}`);
  return fs.readFile(filePath, "utf-8");
}

async function safeReadDir(dirPath: string): Promise<string[]> {
  try {
    return await fs.readdir(dirPath);
  } catch (error) {
    if (isMissingFileError(error)) {
      return [];
    }

    throw error;
  }
}

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function isMissingFileError(error: unknown): error is NodeJS.ErrnoException {
  return Boolean(error) && typeof error === "object" && "code" in error && (error as NodeJS.ErrnoException).code === "ENOENT";
}
