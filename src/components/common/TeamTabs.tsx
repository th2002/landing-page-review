'use client';

import { ArrowLeft, ArrowRight, ButtonArrowIcon } from '@public/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatedTooltip } from '../ui/animated-tooltip';
import { TEAM } from '@/constants/team.const';

export function TeamTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="mx-auto mt-6 flex w-fit flex-nowrap justify-center overflow-auto whitespace-nowrap rounded-[30px] border-0 bg-[#f0f0f0] p-[5px]">
        {/* Loop through tab data and render button for each. */}
        {TEAM.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`rounded-[24px] bg-transparent px-8 py-2 text-base text-primary transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'bg-[#ffffff] text-primary opacity-100'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}

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
          {TEAM[activeTabIndex].data &&
            TEAM[activeTabIndex].data.map((card, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="card-main flex h-full flex-col overflow-hidden rounded-2xl bg-[#f7f7f7] p-5 pb-[30px] text-left shadow-xl">
                  <div className="relative size-full overflow-hidden rounded-[10px]">
                    <Image
                      width={830}
                      height={480}
                      src={`/images/${card.image}`}
                      alt="Card Preview"
                      className="rounded-[10px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-content">
                    <div className="top-one overflow-hidden">
                      <span className="font-26 mb-4 block font-primary font-medium">
                        {card.title}
                      </span>

                      <ul className="serviceteam-list scroll-w m-0 flex list-none flex-nowrap gap-2 overflow-hidden overflow-x-auto whitespace-nowrap">
                        {card.tech.map((tech, idx) => (
                          <li key={idx} className="font-14 font-primary">
                            {tech}
                          </li>
                        ))}
                      </ul>

                      <div className="team-infoblock my-5 block">
                        <span className="font-18 mb-2 block font-primary font-medium">
                          Team Composition
                        </span>
                        <ul className="teamcompo-list list-unstyled m-0">
                          {card.team.map((role, idx) => (
                            <li key={idx} className="font-18 font-primary font-light">
                              <span className="plus">+</span>
                              <span className="small-text">{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-row items-center justify-start">
                      <AnimatedTooltip items={card?.member} />
                    </div>
                    <Link href="#" className="btn-black mt-auto w-max">
                      <span>Get details</span>
                      <ButtonArrowIcon className="icon icon-arrow" />
                    </Link>
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
          <button tabIndex={0} aria-label="next slide" className="swiper-button-next com-btn group">
            <ArrowRight className="icon relative block text-gray-500 transition-colors duration-300 group-hover:text-[#ffffff]" />
          </button>
        </div>
      </div>
    </div>
  );
}
