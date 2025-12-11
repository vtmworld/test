# AI Resume Builder Blog

A modern blog built with Next.js App Router, TypeScript, Tailwind CSS, and MDX support.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **MDX** - Write content in Markdown with embedded React components
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

### Lint

Run ESLint:

```bash
pnpm lint
```

## Project Structure

```
.
├── app/
│   ├── blog/
│   │   └── example/
│   │       └── page.mdx          # Example MDX blog post
│   ├── favicon.ico
│   ├── globals.css               # Global styles with Tailwind
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── public/                       # Static assets
├── mdx-components.tsx            # MDX component customization
├── next.config.ts                # Next.js configuration with MDX
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── eslint.config.mjs             # ESLint configuration
```

## Writing MDX Content

MDX files can be placed in the `app` directory and will be automatically rendered as pages.

Example: `app/blog/my-post/page.mdx`

```mdx
export const metadata = {
  title: "My Blog Post",
  description: "A great article",
};

# My Blog Post

This is **bold** text with [a link](https://example.com).

## Code Example

\`\`\`typescript
const hello = "world";
\`\`\`
```

## Styling

The project uses Tailwind CSS v4 with custom design tokens defined in `app/globals.css`:

- Blog-optimized typography
- Dark mode support
- Custom color palette for content-focused design
- Responsive layouts

## Features

✅ App Router architecture
✅ TypeScript with strict mode
✅ Tailwind CSS with custom blog styling
✅ MDX support for content
✅ ESLint configuration
✅ Dark mode support
✅ Responsive design
✅ SEO-friendly metadata

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
