'use client';

import 'swiper/css';
import { LastestInsightTabs } from '@/components/common/LastestInsightTabs';

export default function LatestInsight() {
  return (
    <div className="py-[90px]">
      <div className="relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto max-w-[1080px] font-primary font-medium">
            Latest Insights
          </h2>
          <p className="font-18 mx-auto my-4 max-w-[1000px] font-primary font-normal">
            Explore our latest research on cutting-edge tech trends and discoveries to stay ahead in
            this digital-first landscape!
          </p>
        </div>
        {/*  */}

        <div className="relative w-full overflow-hidden">
          <LastestInsightTabs />
        </div>
      </div>
    </div>
  );
}
