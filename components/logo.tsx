import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" aria-label="Portal Verde" className="flex items-center">
      
      {/* Desktop */}
      <Image
        src="/images/logo-desktop.png"
        alt="Portal Verde"
        width={500}
        height={150}
        priority
        className="hidden lg:block h-14 w-auto object-contain"
      />

      {/* Tablet */}
      <Image
        src="/images/logo-desktop.png"
        alt="Portal Verde"
        width={400}
        height={120}
        priority
        className="hidden sm:block lg:hidden h-12 w-auto object-contain"
      />

      {/* Mobile */}
      <Image
        src="/images/logo-mobile.png"
        alt="Portal Verde"
        width={300}
        height={100}
        priority
        className="block sm:hidden h-10 w-auto object-contain"
      />

    </Link>
  );
}
