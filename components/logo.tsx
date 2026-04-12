import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center"
      aria-label="Ir al inicio de Portal Verde"
    >
      <Image
        src="/images/logo.png"
        alt="Portal Verde"
        width={180}
        height={60}
        priority
        className="h-9 w-auto object-contain sm:h-10 lg:h-11"
      />
    </Link>
  );
}