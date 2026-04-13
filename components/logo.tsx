import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" aria-label="Portal Verde" className="inline-flex items-center">
      {/* Desktop */}
      <Image
        src="/images/logo-desktop.png"
        alt="Portal Verde"
        width={190}
        height={70}
        priority
        className="hidden h-auto w-auto sm:block"
      />

      {/* Mobile */}
      <Image
        src="/images/logo-mobile.png"
        alt="Portal Verde"
        width={120}
        height={40}
        priority
        className="block h-auto w-auto sm:hidden"
      />
    </Link>
  );
}
