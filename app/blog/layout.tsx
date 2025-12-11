export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8 pb-4 border-b border-border">
          <a
            href="/"
            className="text-accent hover:text-accent/80 transition-colors font-medium"
          >
            ← Back to Home
          </a>
        </nav>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
}
