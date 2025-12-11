export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-foreground">
            AI Resume Builder Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Marketing insights, SEO strategies, and content planning for
            AI-powered resume builders
          </p>
        </header>

        <section className="space-y-8">
          <div className="border border-border rounded-lg p-6 bg-muted/30">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              ✅ Next.js App Router
            </h2>
            <p className="text-foreground/80">
              Modern React framework with App Router architecture for optimal
              performance and developer experience.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 bg-muted/30">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              ✅ TypeScript
            </h2>
            <p className="text-foreground/80">
              Type-safe development with full TypeScript support for better code
              quality and maintainability.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 bg-muted/30">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              ✅ Tailwind CSS
            </h2>
            <p className="text-foreground/80">
              Utility-first CSS framework with custom design tokens optimized
              for a minimal blog aesthetic.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 bg-muted/30">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              ✅ MDX Support
            </h2>
            <p className="text-foreground/80">
              Write content in Markdown with embedded React components. MDX
              files can be imported and rendered with custom styling.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 bg-muted/30">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              ✅ ESLint Configuration
            </h2>
            <p className="text-foreground/80">
              Code quality tools configured for Next.js best practices with
              TypeScript support.
            </p>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            Ready to start building! Run{" "}
            <code className="bg-muted px-2 py-1 rounded font-mono text-sm">
              pnpm dev
            </code>{" "}
            to start the development server.
          </p>
        </footer>
      </main>
    </div>
  );
}
