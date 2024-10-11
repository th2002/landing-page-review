'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { ButtonArrowIcon } from '@public/icons';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-[30px] text-base">
      <Link
        href="/"
        className={`transition-colors duration-200 ${
          pathname === '/' ? 'font-semibold text-primary' : 'hover:text-primary'
        }`}
      >
        Services
      </Link>
      <Link
        href="/store-list"
        className={`transition-colors duration-200 ${
          pathname === '/store-list' ? 'font-semibold text-primary' : 'hover:text-primary'
        }`}
      >
        Solutions
      </Link>
      <Link
        href="/contact-us"
        className={`transition-colors duration-200 ${
          pathname === '/contact-us' ? 'font-semibold text-primary' : 'hover:text-primary'
        }`}
      >
        Technologies
      </Link>
      <Link
        href="/contact-us"
        className={`transition-colors duration-200 ${
          pathname === '/contact-us' ? 'font-semibold text-primary' : 'hover:text-primary'
        }`}
      >
        Company
      </Link>
      <Link
        href="/contact-us"
        className={`transition-colors duration-200 ${
          pathname === '/contact-us' ? 'font-semibold text-primary' : 'hover:text-primary'
        }`}
      >
        Work
      </Link>
      <Link href="#" className="btn-black group">
        <span>Contact us</span>
        <ButtonArrowIcon className="icon icon-arrow group-hover:text-[#192020]" />
      </Link>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="mx-auto flex items-center justify-between px-[60px] py-4">
        <Logo width={134} height={48} />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
