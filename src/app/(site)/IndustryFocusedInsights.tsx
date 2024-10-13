'use client';

import 'swiper/css';
import { IndustryTabs } from '@/components/common/IndustryTabs';

export default function IndustryFocusedInsights() {
  return (
    <div className="bg-primary-foreground py-[90px]">
      <div className="relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto max-w-[1080px] font-primary font-medium">
            Industry-focused Insights
          </h2>
          <p className="font-18 mx-auto my-4 max-w-[1000px] font-primary font-normal">
            Explore our featured content on different industries that you may find helpful.
          </p>
        </div>
        {/*  */}

        <div className="relative w-full overflow-hidden">
          <IndustryTabs />
        </div>
      </div>
    </div>
  );
}
