'use client';

import 'swiper/css';

import { TeamTabs } from '@/components/common/TeamTabs';

export default function DedicatedTeams() {
  return (
    <div className="py-[90px]">
      <div className="our-work-main relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto max-w-[1080px] font-primary font-medium">
            Dedicated Teams for Your Specific Requirements
          </h2>
        </div>
        {/*  */}

        <div className="relative w-full overflow-hidden">
          <TeamTabs />
        </div>
      </div>
    </div>
  );
}
