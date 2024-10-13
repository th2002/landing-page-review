'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import {
  ButtonArrowIcon,
  Medal,
  PaintBucket,
  ScanEye,
  SmartPhone,
  TrendingDown,
} from '@public/icons';
import Image from 'next/image';
import Link from 'next/link';

export default function OurWork() {
  return (
    <div className="bg-primary-foreground py-[90px]">
      <div className="our-work-main relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h2 className="font-40 font-primary font-medium md:pr-6">
              Empowering Businesses with the Right Engineering to Achieve Digital Excellence
            </h2>
          </div>
          <div>
            <div className="mt-2 sm:mt-4 md:mt-0">
              <p className="font-18 font-primary font-normal lg:pl-2">
                MindInventory is a team of digital transformation experts with diverse skill sets
                delivering custom and world-class digital solutions to businesses of all scales.
                From digital product design to development, we deliver remarkable digital
                experiences.
              </p>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="relative w-full overflow-hidden">
          <Swiper
            className="relative mt-[80px]"
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Navigation]}
          >
            <SwiperSlide style={{ width: '1440px', marginRight: '20px' }}>
              <div className="flex h-auto w-full items-center justify-center gap-5 rounded-[30px] bg-white p-5">
                <div className="our-work-left w-[55%]">
                  <div className="h-full">
                    <Image
                      src="/images/passio.webp"
                      alt="passio"
                      className="h-full rounded-[24px] object-cover"
                      width={760}
                      height={570}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="our-work-right mt-2 flex w-[45%] flex-col justify-start sm:mt-0">
                  <div className="font-34 mb-2 py-0 font-primary font-medium md:py-1">
                    Edge-AI Platform
                  </div>
                  <ul className="design-development list-none pl-0">
                    <li className="font-14 badge bg-[#ffc0d9] font-primary font-normal">
                      UI/UX Design
                    </li>
                    <li className="font-14 badge bg-[#d0bfff] font-primary font-normal">
                      Mobile App Development
                    </li>
                    <li className="font-14 badge bg-[#b5f1cc] font-primary font-normal">
                      Data &amp; AI/ML
                    </li>
                  </ul>

                  <p className="font-18 mt-1 font-primary font-light md:mt-2">
                    Passio.AI is an edge-AI platform that empowers businesses to add
                    vertical-specific computer vision into their apps and deliver AI-driven
                    lifestyle experiences.
                    <ul className="design-development list-none pl-0">
                      <li className="font-14 badge bg-[#ffc0d9] font-primary font-normal">
                        UI/UX Design
                      </li>
                      <li className="font-14 badge bg-[#d0bfff] font-primary font-normal">
                        Mobile App Development
                      </li>
                      <li className="font-14 badge bg-[#b5f1cc] font-primary font-normal">
                        Data &amp; AI/ML
                      </li>
                    </ul>
                  </p>

                  <hr />

                  <div className="app-features mb-4 hidden rounded-[24px] bg-[#f7f7f7] p-5 md:block">
                    <ul className="list-none pl-0">
                      <li className="font-14 badge-dash font-primary font-normal">
                        <ScanEye className="icon" />
                        99% Object Recognition Accuracy
                      </li>
                      <li className="font-14 badge-dash font-primary font-normal">
                        <Medal className="icon" />
                        World&apos;s #1 Visual Database
                      </li>
                      <li className="font-14 badge-dash font-primary font-normal">
                        <TrendingDown className="icon" />
                        75% Reduction in Dietary Mistakes
                      </li>
                      <li className="font-14 badge-dash font-primary font-normal">
                        <PaintBucket className="icon" />
                        95% Accuracy for Paint.AI
                      </li>
                      <li className="font-14 badge-dash font-primary font-normal">
                        <SmartPhone className="icon" />
                        97% Accuracy for Mobile AI
                      </li>
                    </ul>
                  </div>

                  <Link href="#" className="btn-black mt-auto w-max">
                    <span>VIEW CASE STUDY</span>
                    <ButtonArrowIcon className="icon icon-arrow" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ width: '1440px', marginRight: '20px' }}>
              <div className="flex h-auto w-full items-center justify-center gap-5 rounded-[30px] bg-white p-5">
                <div className="our-work-left w-[55%]">
                  <div className="h-full">
                    <Image
                      src="/images/passio.webp"
                      alt="passio"
                      className="h-full rounded-[24px] object-cover"
                      width={760}
                      height={570}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="our-work-right mt-2 flex w-[45%] flex-col justify-start sm:mt-0">
                  <div className="font-34 mb-2 py-0 font-primary font-medium md:py-1">
                    Edge-AI Platform
                  </div>
                  <ul className="design-development list-none pl-0">
                    <li className="font-14 badge bg-[#ffc0d9] font-primary font-normal">
                      UI/UX Design
                    </li>
                    <li className="font-14 badge bg-[#d0bfff] font-primary font-normal">
                      Mobile App Development
                    </li>
                    <li className="font-14 badge bg-[#b5f1cc] font-primary font-normal">
                      Data &amp; AI/ML
                    </li>
                  </ul>

                  <p className="font-18 mt-1 font-primary font-light md:mt-2">
                    Passio.AI is an edge-AI platform that empowers businesses to add
                    vertical-specific computer vision into their apps and deliver AI-driven
                    lifestyle experiences.
                    <ul className="design-development list-none pl-0">
                      <li className="font-14 badge bg-[#ffc0d9] font-primary font-normal">
                        UI/UX Design
                      </li>
                      <li className="font-14 badge bg-[#d0bfff] font-primary font-normal">
                        Mobile App Development
                      </li>
                      <li className="font-14 badge bg-[#b5f1cc] font-primary font-normal">
                        Data &amp; AI/ML
                      </li>
                    </ul>
                  </p>

                  <hr />

                  <div className="app-features mb-4 hidden rounded-[24px] bg-[#f7f7f7] p-5 md:block">
                    <ul className="list-none pl-0">
                      <li className="font-14 badge-dash font-primary font-normal">
                        <ScanEye className="icon" />
                        99% Object Recognition Accuracy
                      </li>
                      <li className="font-14 badge-dash font-primary font-normal">
                        <Medal className="icon" />
                        World&apos;s #1 Visual Database
                      </li>
                      <li className="font-14 badge-dash font-primary font-normal">
                        <TrendingDown className="icon" />
                        75% Reduction in Dietary Mistakes
                      </li>
                      <li className="font-14 badge-dash font-primary font-normal">
                        <PaintBucket className="icon" />
                        95% Accuracy for Paint.AI
                      </li>
                      <li className="font-14 badge-dash font-primary font-normal">
                        <SmartPhone className="icon" />
                        97% Accuracy for Mobile AI
                      </li>
                    </ul>
                  </div>

                  <Link href="#" className="btn-black mt-auto w-max">
                    <span>VIEW CASE STUDY</span>
                    <ButtonArrowIcon className="icon icon-arrow" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
