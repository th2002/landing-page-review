'use client';

import 'swiper/css';
import { Tabs } from '@/components/common/Tabs';

export default function ModernItServices() {
  return (
    <div className="py-[90px]">
      <div className="relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto max-w-[1080px] font-primary font-medium">
            Modern IT Services Delivering Better Tech Experiences
          </h2>
          <p className="font-18 mx-auto my-4 max-w-[1000px] font-primary font-normal">
            Our cutting-edge digital solutions and services have been helping businesses across the
            world to mitigate modern business challenges with a modern digital-first approach
          </p>
        </div>
        {/*  */}

        <div className="relative w-full overflow-hidden">
          <Tabs />
        </div>
      </div>
    </div>
  );
}
