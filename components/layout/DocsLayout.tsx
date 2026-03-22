import Sidebar from "./Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar — mobile only */}
      <header className="md:hidden sticky top-0 z-10 flex items-center justify-between h-12 px-4 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-sm">
        <div>
          <span className="text-sm font-semibold text-[var(--text)]">Operator</span>
          <span className="ml-2 text-xs text-[var(--muted)]">setup</span>
        </div>
      </header>

      <div className="flex-1 flex max-w-[1200px] mx-auto w-full">
        {/* Left sidebar */}
        <div className="w-56 shrink-0 border-r border-[var(--border)] px-4">
          <Sidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-8 py-12 max-w-3xl">
          {children}
        </main>
      </div>
    </div>
  );
}
