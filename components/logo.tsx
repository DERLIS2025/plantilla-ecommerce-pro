import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-lg font-semibold tracking-tight">
      Atelier<span className="text-accent">&</span>Co
    </Link>
  );
}
