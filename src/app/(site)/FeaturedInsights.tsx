'use client';

import { FEATURES } from '@/constants/features.const';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedInsigns() {
  return (
    <div className="bg-primary-foreground py-[90px]">
      <div className="relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto max-w-[1080px] font-primary font-medium">
            Featured Insights
          </h2>
          <p className="font-18 mx-auto my-4 max-w-[1000px] font-primary font-normal">
            Explore our featured technology insights on news boards that are popular among our
            readers.
          </p>
        </div>
        {/*  */}

        <div className="grid w-full grid-cols-1 gap-[30px] overflow-hidden xl:grid-cols-3">
          {FEATURES &&
            FEATURES.map((item, index) => (
              <div key={index} className="!h-auto">
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
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
