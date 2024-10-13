'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { ArrowLeft, ArrowRight, PlayArrow } from '@public/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Testimonial() {
  return (
    <div className="bg-primary-foreground py-[90px]">
      <div className="our-work-main relative mx-auto w-full xl:max-w-screen-2xl">
        <p className="font-18 mb-2 font-primary font-normal">Client’s Testimonial</p>
        <div className="relative w-full overflow-hidden">
          <Swiper
            className="relative"
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div className="grid grid-cols-2 items-center gap-[30px]">
                <div className="h-full">
                  <h2 className="font-40 mb-5 font-primary font-medium capitalize">
                    How object Recognition Transformed Healthy Living
                  </h2>
                  <div className="mt-2 sm:mt-4 md:mt-0">
                    <p className="font-18 font-primary font-light lg:pl-2">
                      Data scientists and AI/ML engineers at MindInventory, hired by the Passio
                      team, played a pivotal role in building the AI-powered SDKs that enable users
                      to keep on their daily nutrition consumption and ensure a healthy lifestyle.
                    </p>
                  </div>
                </div>
                <div className="relative h-0 overflow-hidden pb-[65%]">
                  <Image
                    src={'/images/testimonial/dmitiry.webp'}
                    alt={'Dmitiry Richard Starson'}
                    width={1260}
                    height={808}
                    loading="lazy"
                    className="rounded-24 absolute left-0 top-0 inline h-full w-full max-w-full object-cover"
                  />
                  <div className="testimonial__auth-wrapper">
                    <div className="testimonial__auth">
                      <span className="font-24 mb-1 block font-normal">
                        Dmitiry Richard Starson
                      </span>
                      <div className="flex items-center justify-start gap-2">
                        United States
                        <Image
                          src="https://www.mindinventory.com/img/client-testimonial/usa-flag-round.svg"
                          alt="Australia"
                          height={24}
                          width={24}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <Link href="/" target="_blank" className="btn-black group">
                      <PlayArrow className="icon icon-arrow !rotate-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 items-center gap-[30px]">
                <div className="h-full">
                  <h2 className="font-40 mb-5 font-primary font-medium capitalize">
                    How object Recognition Transformed Healthy Living
                  </h2>
                  <div className="mt-2 sm:mt-4 md:mt-0">
                    <p className="font-18 font-primary font-light lg:pl-2">
                      Data scientists and AI/ML engineers at MindInventory, hired by the Passio
                      team, played a pivotal role in building the AI-powered SDKs that enable users
                      to keep on their daily nutrition consumption and ensure a healthy lifestyle.
                    </p>
                  </div>
                </div>
                <div className="relative h-0 overflow-hidden pb-[65%]">
                  <Image
                    src={'/images/testimonial/dmitiry.webp'}
                    alt={'Dmitiry Richard Starson'}
                    width={1260}
                    height={808}
                    loading="lazy"
                    className="rounded-24 absolute left-0 top-0 inline h-full w-full max-w-full object-cover"
                  />
                  <div className="testimonial__auth-wrapper">
                    <div className="testimonial__auth">
                      <span className="font-24 mb-1 block font-normal">
                        Dmitiry Richard Starson
                      </span>
                      <div className="flex items-center justify-start gap-2">
                        United States
                        <Image
                          src="https://www.mindinventory.com/img/client-testimonial/usa-flag-round.svg"
                          alt="Australia"
                          height={24}
                          width={24}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <Link href="/" target="_blank" className="btn-black group">
                      <PlayArrow className="icon icon-arrow !rotate-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swipe-btn-outer !relative !bottom-[98px] !left-[76px] !mt-[30px] flex !h-[60px] items-center !justify-start !gap-[10px] !leading-[60px]">
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
          </Swiper>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
