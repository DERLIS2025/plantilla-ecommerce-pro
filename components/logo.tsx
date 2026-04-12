import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="flex w-full justify-center lg:w-auto lg:justify-start"
      aria-label="Portal Verde"
    >
      {/* Mobile y tablet */}
      <div className="w-[190px] sm:w-[195px] lg:hidden">
        <Image
          src="/images/logo.png"
          alt="Portal Verde"
          width={320}
          height={100}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Desktop intacto */}
      <div className="hidden lg:block">
        <Image
          src="/images/logo.png"
          alt="Portal Verde"
          width={320}
          height={100}
          priority
          className="h-[135px] w-auto object-contain"
        />
      </div>
    </Link>
  );
}