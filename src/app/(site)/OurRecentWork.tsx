'use client';

import 'swiper/css';

import Link from 'next/link';
import { ButtonArrowIcon } from '@public/icons';
import { PORTFOLIO } from '@/constants/portfolio.const';
import Image from 'next/image';

export default function OurRecentWork() {
  return (
    <div className="overflow-hidden bg-primary py-[90px] text-primary-foreground">
      <div className="relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="mb-10 flex items-center justify-between gap-5">
          <div className="work__top-title">
            <h2 className="font-40">Our Recent Work</h2>
            <p className="font-18 my-2">
              Explore our latest projects, testaments to our commitment to delivering transformative
              digital solutions.
            </p>
          </div>

          <Link href="#" className="btn-black btn-black--white-border mt-auto w-max">
            <span>VIEW CASE STUDY</span>
            <ButtonArrowIcon className="icon icon-arrow" />
          </Link>
        </div>

        <div className="mb-[30px] grid grid-cols-1 gap-[30px] xl:grid-cols-3">
          {PORTFOLIO.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_self"
              className="rounded-24 hover:scale-104 relative h-auto w-full overflow-hidden transition-transform duration-300"
            >
              <Image
                src={`/images/${item.img.src}`}
                alt={item.img.alt}
                className="img-fluid"
                width="906"
                height="1000"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
        {/*  */}
        <div className="mb-5 block text-center md:hidden">
          <Link href="#" className="btn-black btn-black--white-border mt-auto w-max">
            <span>View Portfolio</span>
            <ButtonArrowIcon className="icon icon-arrow" />
          </Link>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 gap-[30px] xl:grid-cols-3">
          <div className="rounded-24 relative flex min-h-[200px] flex-col items-center justify-center overflow-hidden border border-[#3b4040] bg-[#242b2b]">
            <span className="font-60 leading-[1]">2500+</span>
            <p className="mb-0 text-center leading-[2]">Projects fdasfasd</p>
          </div>
          <div className="rounded-24 relative flex min-h-[200px] flex-col items-center justify-center overflow-hidden border border-[#3b4040] bg-[#242b2b]">
            <span className="font-60 leading-[1]">1600+</span>
            <p className="mb-0 text-center leading-[2]">Happy Clients</p>
          </div>
          <div className="rounded-24 relative flex min-h-[200px] flex-col items-center justify-center overflow-hidden border border-[#3b4040] bg-[#d0bfff] text-center">
            <span className="font-24 mb-5 leading-[1] text-primary">Want to start a Project?</span>
            <Link href="#" className="btn-black w-max">
              <span>Get Estimation</span>
              <ButtonArrowIcon className="icon icon-arrow" />
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
