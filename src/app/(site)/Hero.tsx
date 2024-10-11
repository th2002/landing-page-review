'use client';

import { ArrowLeft, ArrowRight, ButtonArrowIcon } from '@public/icons';
import Link from 'next/link';
import TrustedBy from '@/components/common/TrustedBy';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Hero() {
  return (
    <section
      className="h-hero-section relative z-[-1] flex size-full flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat object-cover md:z-0"
      style={{
        background: "url('/images/hero-background.png') no-repeat center",
        backgroundSize: 'cover',
        backgroundPosition: 'top -9.5vw left 0vw',
      }}
    >
      <div className="flex h-full text-center">
        <div className="relative flex h-full">
          <Swiper
            className="mx-auto h-full max-w-[1100px] overflow-hidden md:max-w-[1440px]"
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Autoplay]}
          >
            <SwiperSlide style={{ width: '1440px', marginRight: '20px' }}>
              <div className="flex h-full flex-col items-center justify-center">
                <h1 className="heading font-80 mx-0 mb-2 mt-[20px] text-center">
                  Your New Age <span className="block">Digital Transformation Partner</span>
                </h1>
                <p className="font-24 mx-auto mb-[20px] mt-[15px] max-w-screen-lg px-[15px] text-center font-light">
                  We empower businesses to seize their present and future with cutting-edge digital
                  transformation solutions, conquering challenges and leading to success.
                </p>
                <Link href="#" className="btn-black mt-2 xl:mt-4">
                  <span>CONSULT OUR EXPERTS</span>
                  <ButtonArrowIcon className="icon icon-arrow" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ width: '1440px', marginRight: '20px' }}>
              <div className="flex h-full flex-col items-center justify-center">
                <h1 className="heading font-80 mx-0 mb-2 mt-[20px] text-center">
                  Your New Age <span className="block">Digital Transformation Partner</span>
                </h1>
                <p className="font-24 mx-auto mb-[20px] mt-[15px] max-w-screen-lg px-[15px] text-center font-light">
                  We empower businesses to seize their present and future with cutting-edge digital
                  transformation solutions, conquering challenges and leading to success.
                </p>
                <Link href="#" className="btn-black mt-2 xl:mt-4">
                  <span>CONSULT OUR EXPERTS</span>
                  <ButtonArrowIcon className="icon icon-arrow" />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swipe-btn-outer">
            <button
              tabIndex={0}
              aria-label="previous slide"
              className="swiper-button-prev com-btn group"
            >
              <ArrowLeft className="icon relative block text-gray-500 transition-colors duration-300 group-hover:text-[#ffffff]" />
            </button>
            <button
              tabIndex={0}
              aria-label="next slide"
              className="swiper-button-next com-btn group"
            >
              <ArrowRight className="icon relative block text-gray-500 transition-colors duration-300 group-hover:text-[#ffffff]" />
            </button>
          </div>
        </div>
      </div>
      <TrustedBy />
    </section>
  );
}

1;
