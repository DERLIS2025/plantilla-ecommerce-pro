import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg text-white">
        🌿
      </span>
      <span className="text-xl font-bold tracking-tight text-text-strong">Portal Verde</span>
    </Link>
  );
}
