'use client';

import { INDUSTRY_FOCUS_INSIGNS } from '@/constants/industry.const';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function IndustryTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex space-x-3 border-b">
        {INDUSTRY_FOCUS_INSIGNS.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`w-full border-b-4 px-3 py-[0.8rem] text-base text-[#0f1010] transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-primary bg-transparent text-primary opacity-100'
                  : 'border-transparent opacity-70'
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      <div className="explore-specialise-teams mt-[50px] w-full overflow-hidden">
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
          {INDUSTRY_FOCUS_INSIGNS[activeTabIndex].content &&
            INDUSTRY_FOCUS_INSIGNS[activeTabIndex].content.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="card-main">
                  <div className="rounded-24 relative h-auto w-full max-w-[1146px] overflow-hidden">
                    <Image
                      width={700}
                      height={1146}
                      src={`/images/${item.image}`}
                      alt="Card Preview"
                      className="auto-1146/700 h-auto w-full"
                      loading="lazy"
                    />
                  </div>

                  <span className="font-14 font-regular text-uppercase my-2 block pt-1 font-primary">
                    {item.category}
                  </span>

                  <Link href="/" className="font-26 block font-primary font-medium" target="_blank">
                    {item.title}
                  </Link>

                  <div className="my-5 block">
                    <p className="font-18 my-2 block pb-1 font-primary font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
