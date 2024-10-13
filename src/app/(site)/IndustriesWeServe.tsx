'use client';

import 'swiper/css';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, ButtonArrowIcon, CircleCheck } from '@public/icons';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { INDUSTRY } from '@/constants/industry.const';

export default function IndustriesWeServe() {
  return (
    <div className="overflow-hidden py-[90px]">
      <div className="relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto max-w-[1080px] font-primary font-medium">
            Industries We Serve
          </h2>
          <p className="font-18 mx-auto my-4 max-w-[1000px] font-primary font-normal">
            MindInventory as a leading app development company with a focus on AI/ML advancements,
            serves businesses across various industries with cutting-edge digital solutions,
            improving their business operations.
          </p>
        </div>
        <div className="our-work-main explore-specialise-teams w-full overflow-hidden">
          <Swiper
            className="h-full overflow-hidden"
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Navigation]}
          >
            {INDUSTRY &&
              INDUSTRY.map((item, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#f7f7f7] p-5 pb-[30px] text-left shadow-xl">
                    <div className="mb-[25px] flex size-[56px] items-center justify-center rounded-full border border-[#192020] bg-background">
                      {/* <item.icon className="icon" /> */}
                    </div>
                    <div className="overflow-hidden">
                      <h3>
                        <Link
                          href="/ai-development-services.php"
                          className="font-26 group mb-2 inline-flex items-center gap-2 font-primary font-medium md:mb-4"
                        >
                          {item.category}
                          <ButtonArrowIcon className="icon icon-arrow opacity-50 group-hover:rotate-45 group-hover:opacity-100" />
                        </Link>
                      </h3>

                      <div className="my-5 block">
                        <ul className="list-unstyled m-0">
                          {item.solutions.map((role, idx) => (
                            <li key={idx} className="font-18 flex font-primary font-light">
                              <CircleCheck className="icon mr-2" />
                              <span className="small-text">{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="swipe-btn-outer !relative !right-[76px] !mt-[30px] flex !h-[60px] items-center justify-end !gap-[10px] !leading-[60px]">
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
    </div>
  );
}
