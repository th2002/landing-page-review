'use client';

import { ButtonArrowIcon } from '@public/icons';
import Link from 'next/link';
import { useState } from 'react';

const tabsData = [
  {
    label: 'Trending',
    content:
      'Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.',
    data: [
      {
        title: 'Data Engineering',
        content:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      {
        title: 'Data Science',
        content:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      {
        title: 'Data Analytics',
        content:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      {
        title: 'Business Intelligence',
        content:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      {
        title: 'Machine Learning',
      },
    ],
  },
  {
    label: 'Data & AI',
    data: [
      {
        title: 'Data Engineering',
        content:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      {
        title: 'Data Science',
        content:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      {
        title: 'Data Analytics',
        content:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      {
        title: 'Business Intelligence',
        content:
          'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
      },
      {
        title: 'Machine Learning',
      },
    ],
  },
  {
    label: 'Digital',
    content:
      'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
  },
  {
    label: 'Solutions',
    content:
      'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
  },
  {
    label: 'App Development',
    content:
      'Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
  },
];

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex space-x-3 border-b">
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`w-full border-b-4 px-3 py-[0.8rem] text-base text-[#0f1010] opacity-70 transition-colors duration-300 ${
                idx === activeTabIndex
                  ? 'border-primary bg-transparent text-primary opacity-100'
                  : 'border-transparent'
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

      <div>
        <div className="mt-[25px] rounded-[24px] bg-[#ffc0d9] p-[30px]">
          <h3 className="font-26 relative mb-2 inline-flex items-center gap-2 overflow-hidden font-primary font-medium md:mb-4">
            Most In-Demand
          </h3>
          <p className="font-18 services-description font-primary font-light">
            Many of our top global clients choose us to empower their businesses to build
            cutting-edge solutions that help them deal with modern challenges and stay relevant in
            market competition.
          </p>
        </div>
        <div className="more-services grid w-full grid-cols-2 gap-5">
          {tabsData[activeTabIndex].data &&
            tabsData[activeTabIndex].data.map((data, idx) => {
              return (
                <div key={idx} className="border-b border-[#19202033] p-[30px]">
                  <h3>
                    <Link
                      href="/ai-development-services.php"
                      className="font-26 group mb-2 inline-flex items-center gap-2 font-primary font-medium md:mb-4"
                    >
                      {data.title}
                      <ButtonArrowIcon className="icon icon-arrow opacity-50 group-hover:rotate-45 group-hover:opacity-100" />
                    </Link>
                  </h3>
                  <p className="font-18 services-description font-primary font-light">
                    {data.content}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      {/* <div className="py-4">
      

        <p>{tabsData[activeTabIndex].content}</p>
      </div> */}
    </div>
  );
}
