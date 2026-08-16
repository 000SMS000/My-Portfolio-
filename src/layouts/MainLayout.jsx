export default function MainLayout({ children }) {
  return (
    <main className="min-h-screen text-white bg-background">
      <div className="px-6 py-6 mx-auto max-w-7xl">
        {children}
      </div>
    </main>
  );
}