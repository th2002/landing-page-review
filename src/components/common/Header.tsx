'use client';

import Link from 'next/link';
import Logo from './Logo';
import { ButtonArrowIcon } from '@public/icons';

const Navigation = () => {
  return (
    <nav className="flex items-center gap-[30px] text-base">
      <Link href="/" className={`opacity-50 transition-colors duration-300 hover:opacity-100`}>
        Services
      </Link>
      <Link
        href="/store-list"
        className={`opacity-50 transition-colors duration-300 hover:opacity-100`}
      >
        Solutions
      </Link>
      <Link
        href="/contact-us"
        className={`opacity-50 transition-colors duration-300 hover:opacity-100`}
      >
        Technologies
      </Link>
      <Link
        href="/contact-us"
        className={`opacity-50 transition-colors duration-300 hover:opacity-100`}
      >
        Company
      </Link>
      <Link
        href="/contact-us"
        className={`opacity-50 transition-colors duration-300 hover:opacity-100`}
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
      <div className="mx-auto flex items-center justify-between bg-[#fff] px-[60px] py-4">
        <Logo width={134} height={48} />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
