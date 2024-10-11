'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const tabsData = [
  {
    label: 'Popular',
    data: [
      {
        title: 'eCommerce Platform',
        tech: ['React', 'Node.js', 'MongoDB', 'Flutter', 'Swift', 'Swift UI', 'Kotlin'],
        image: 'ecommerce-platform.webp',
        team: [
          'UI/UX Design',
          'Mobile App Development',
          'Web Development',
          'QA Testing',
          'business Analysis',
          'MERN Full Stack Programmer',
        ],
      },
      {
        title: 'Digital Transfomation Team',
        tech: ['React', 'Node.js', 'MongoDB', 'Flutter', 'Swift', 'Swift UI', 'Kotlin'],
        image: 'digital-transformation-team.webp',
        team: [
          'UI/UX Design',
          'Mobile App Development',
          'Web Development',
          'QA Testing',
          'business Analysis',
          'MERN Full Stack Programmer',
        ],
      },
      {
        title: 'Metaverse Team',
        tech: ['React', 'Node.js', 'MongoDB', 'Flutter', 'Swift', 'Swift UI', 'Kotlin'],
        image: 'metaverse-team.webp',
        team: [
          'UI/UX Design',
          'Mobile App Development',
          'Web Development',
          'QA Testing',
          'business Analysis',
          'MERN Full Stack Programmer',
        ],
      },
      {
        title: 'eCommerce Platform',
        tech: ['React', 'Node.js', 'MongoDB', 'Flutter', 'Swift', 'Swift UI', 'Kotlin'],
        image: 'ecommerce-platform.webp',
        team: [
          'UI/UX Design',
          'Mobile App Development',
          'Web Development',
          'QA Testing',
          'business Analysis',
          'MERN Full Stack Programmer',
        ],
      },
    ],
  },

  {
    label: 'Product Engineering',
  },
  {
    label: 'Saas',
  },
  {
    label: 'AI & ML',
  },
  {
    label: 'Data Engineering',
  },
  {
    label: 'Design',
  },
];

export function TeamTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="mt-6 flex flex-nowrap justify-center overflow-auto whitespace-nowrap rounded-[30px] border-0 bg-[#f0f0f0] p-[5px]">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`px-8 py-2 text-base text-primary opacity-70 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'bg-transparent text-primary opacity-100'
                  : 'border-transparent hover:opacity-100'
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

      <div className="mt-[50px] w-full overflow-hidden">
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
          {tabsData[activeTabIndex].data &&
            tabsData[activeTabIndex].data.map((card, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="card-main flex h-full flex-col overflow-hidden rounded-2xl bg-[#e8e8e8] p-5 pb-[30px] text-left shadow-xl">
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
                      <span className="font-26 font-mediumblock mb-4 font-primary">
                        eCommerce Platform
                      </span>

                      <ul className="serviceteam-list scroll-w m-0 flex list-none flex-nowrap gap-2 overflow-hidden overflow-x-auto whitespace-nowrap">
                        <li className="font-14 font-primary">Kotlin</li>
                        <li className="font-14 font-primary">SWIFT</li>
                        <li className="font-14 font-primary">SWIFT UI</li>
                        <li className="font-14 font-primary">Flutter</li>
                        <li className="font-14 font-primary">React Native</li>
                      </ul>

                      <div className="team-infoblock my-5 block">
                        <span className="font-18block mb-2 font-primary font-medium">
                          Team Composition
                        </span>
                        <ul className="teamcompo-list list-unstyled m-0">
                          <li className="font-18 font-primary font-light">
                            <span className="plus">+</span>
                            <span className="small-text">UI/UX Designer</span>
                          </li>
                          <li className="font-18 font-primary font-light">
                            <span className="plus">+</span>
                            <span className="small-text">Business Analyst</span>
                          </li>
                          <li className="font-18 font-primary font-light">
                            <span className="plus">+</span>
                            <span className="small-text">Mobile App Developer</span>
                          </li>
                          <li className="font-18 font-primary font-light">
                            <span className="plus">+</span>
                            <span className="small-text">MERN Full Stack Programmer</span>
                          </li>
                          <li className="font-18 font-primary font-light">
                            <span className="plus">+</span>
                            <span className="small-text">Project Manager</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-col p-8">
                    <div className="pb-6 text-2xl font-bold text-[#374151]">{card.title}</div>
                    <div className="text-lg text-[#374151]">
                      Leverage a graphical editor to create beautiful web components.
                    </div>
                    <div className="flex justify-end pt-6">
                      <button className="transform rounded-lg bg-[#7e22ce] p-3 text-base font-bold text-[#ffffff] transition-transform hover:bg-purple-800 active:scale-95">
                        Try it out!
                      </button>
                    </div>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
