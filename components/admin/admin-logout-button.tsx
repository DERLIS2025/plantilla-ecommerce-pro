'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { createClient } from '@/lib/supabase/client';

export function AdminLogoutButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    setIsLoading(true);

    const supabase = createClient();
    await supabase.auth.signOut();

    router.replace('/admin/login');
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isLoading}
      className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium text-white/65 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
    >
      <LogOut className="h-4 w-4" />
      {isLoading ? 'Saliendo...' : 'Cerrar sesión'}
    </button>
  );
}
