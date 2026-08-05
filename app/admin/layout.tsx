import type { ReactNode } from 'react';

export default function AdminLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#f4f7f4]">
      <div className="container-shell py-8">
        {children}
      </div>
    </main>
  );
}
