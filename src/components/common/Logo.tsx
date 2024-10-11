import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <Link
      href="/"
      className="title-font flex items-center justify-center font-medium text-gray-900"
    >
      <Image
        src="/logo/mind-inventory-logo.png"
        alt="Golden Lor Logo"
        aria-hidden
        width={width}
        height={height}
        priority
        className="h-12 w-32"
      />
    </Link>
  );
};

export default Logo;
