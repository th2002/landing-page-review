'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import {
  ArrowLeft,
  ArrowRight,
  ButtonArrowIcon,
  Medal,
  PaintBucket,
  ScanEye,
  SmartPhone,
  TrendingDown,
} from '@public/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs } from '@/components/common/Tabs';

const cardsData = [
  {
    label: 'Fitness Tracking App for a Health and Wellness Start-up',
    content:
      'Designing innovative mobile solutions to help users monitor their fitness goals and progress in real time',
    icon: SmartPhone,
    background: '#b5f1cc',
    color: '#b5f1cc',
    ongoing: ['UI/UX Design', 'Mobile App Development'],
  },
  {
    label: 'Fitness Tracking App for a Health and Wellness Start-up',
    content:
      'Designing innovative mobile solutions to help users monitor their fitness goals and progress in real time',
    icon: SmartPhone,
    background: '#b5f1cc',
    color: '#b5f1cc',
    ongoing: ['UI/UX Design', 'Mobile App Development'],
  },
  {
    label: 'Fitness Tracking App for a Health and Wellness Start-up',
    content:
      'Designing innovative mobile solutions to help users monitor their fitness goals and progress in real time',
    icon: SmartPhone,
    background: '#b5f1cc',
    color: '#b5f1cc',
    ongoing: ['UI/UX Design', 'Mobile App Development'],
  },
];

export default function AmazingProjects() {
  return (
    <div className="bg-primary py-[90px] text-primary-foreground">
      <div className="our-work-main relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto font-primary font-medium">
            Amazing Projects We Are Working On
          </h2>
          <p className="font-18 mx-auto my-4 font-primary font-normal">
            Explore a range of ongoing software development projects, from fundamental to
            groundbreaking, that are poised to transform the way businesses engage with their
            customers, streamline operations, and unlock new revenue streams.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <Swiper
            className="mx-auto h-full overflow-hidden"
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Navigation]}
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="flex h-full flex-col rounded-[24px] bg-[#252b2b] p-5 shadow-xl">
                  <div className="grid grid-cols-3">
                    <div
                      className={`ongoing-left-icon mb-[25px] flex size-[56px] items-center justify-center rounded-full bg-[${card.background}]`}
                    >
                      <card.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="col-span-2">
                      <div
                        className={`ongoing-right-bg float-right rounded-lg bg-[#192020] px-[13px] py-[9px] text-center text-[${card.color}]`}
                      >
                        Ongoing
                      </div>
                    </div>
                  </div>

                  <div className="font-26 mb-4 inline-flex items-center gap-2">
                    <div className="font-26 m-0 font-medium">{card.label}</div>
                  </div>
                  <p className="font-18 pb-2 font-light">{card.content}</p>

                  <div className="ongoing-bottom mt-auto w-full">
                    <ul>
                      {card.ongoing.map((item, i) => (
                        <li key={i} className="ongoing-badge text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative z-10 mr-3 mt-12 flex items-center justify-between gap-[10px]">
            <Link href="#" className="btn-black mt-auto w-max">
              <span>VIEW CASE STUDY</span>
              <ButtonArrowIcon className="icon icon-arrow" />
            </Link>
            <div className="swipe-btn-outer !right-[80px]">
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
    </div>
  );
}
