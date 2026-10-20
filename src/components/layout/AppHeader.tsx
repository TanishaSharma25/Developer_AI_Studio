export default function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div>
        <h1 className="text-xl font-bold">Developer AI Studio</h1>
        <p className="text-sm text-muted-foreground">
          Your AI-powered developer toolkit
        </p>
      </div>

      <div>Theme Toggle</div>
    </header>
  );
}
