'use client';

import 'swiper/css';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="py-[90px]">
      <div className="relative mx-auto w-full xl:max-w-screen-2xl">
        <div className="text-center">
          <h2 className="font-40 mx-auto max-w-[1080px] font-primary font-medium">About Us</h2>
          <p className="font-18 mx-auto my-4 max-w-[1000px] font-primary font-normal">
            Crafting cutting-edge digital solutions with creative minds
          </p>
        </div>
        {/*  */}
        <div className="container mx-auto px-4 py-8">
          <section className="mb-12 flex flex-wrap items-center gap-[40px] sm:mt-4 md:mt-auto">
            <div className="w-[370px] flex-shrink-0">
              <h2 className="font-24 mb-4">Who We Are</h2>
              <p className="mb-4">
                A Mindful team of tech innovators bringing world-class tech ideas to reality. We
                embrace the power of technology to provide cutting-edge digital solutions that
                propel our clients toward unprecedented success.
              </p>
            </div>
            <StatCard
              number="250+"
              text="Tech Experts On-board"
              imageUrl="/images/tech-experts-on-board.webp"
              bgColor="#ffc0d9"
            />
            <StatCard
              number="13+"
              text="Years Of Expertise"
              imageUrl="/images/years-of-expertise.webp"
              bgColor="#d0bfff"
            />
          </section>

          <section className="mb-12 flex flex-wrap items-center gap-[40px] sm:mt-4 md:mt-auto">
            <StatCard
              number="2500+"
              text="Projects Delivered"
              imageUrl="/images/projects-delivered.webp"
              bgColor="#b5f1cc"
            />
            <StatCard
              number="40+"
              text="Countries Served"
              imageUrl="/images/countries-served.webp"
              bgColor="#ffd8c0"
            />
            <div className="w-[370px] flex-shrink-0">
              <h2 className="font-24 mb-4">What Drives Us?</h2>
              <p className="mb-4">
                Creativity is our heartbeat. We constantly challenge ourselves to further our
                technical prowess and help our customers to deliver exceptional customer experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-26 leading-8">Our Achievements</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <AchievementCard
                logo="/images/company/clutch.webp"
                name="Clutch"
                rating={4.6}
                description="Top IT services company"
              />
              <AchievementCard
                logo="/images/company/goodfirm.webp"
                name="GoodFirms"
                rating={4.7}
                description="Top mobile app development company"
              />
              <AchievementCard
                logo="/images/company/designrush.webp"
                name="DESIGNRUSH"
                rating={4.8}
                description="Top mobile app development company"
              />
              <AchievementCard
                logo="/images/company/top-developers.webp"
                name="TopDevelopers"
                rating={5.0}
                description="Top mobile developers"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  number: string;
  text: string;
  imageUrl: string;
  bgColor: string;
}

function StatCard({ number, text, imageUrl, bgColor }: StatCardProps) {
  return (
    <div
      className={`bg-[${bgColor}] rounded-24 grid w-full max-w-[495px] grid-cols-2 items-end gap-5 p-[30px]`}
    >
      <div>
        <h3 className="font-60 m-0 block leading-[1]">{number}</h3>
        <p className="m-0">{text}</p>
      </div>
      <Image
        src={imageUrl}
        alt={text}
        width={190}
        height={190}
        className="rounded-24 inline-block max-w-full object-contain"
      />
    </div>
  );
}

interface AchievementCardProps {
  logo: string;
  name: string;
  rating: number;
  description: string;
}

function AchievementCard({ logo, name, rating, description }: AchievementCardProps) {
  return (
    <div className="rounded-24 min-h-full bg-[#f0f0f0] p-[30px] text-center">
      <div className="mb-5 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={100}
          height={50}
          className="inline-block max-w-full object-contain"
        />
      </div>
      <div className="mb-[14px] flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-[10px] inline-block leading-[1]">{rating}</span>
      </div>
      <p className="font-18 m-0 text-center font-light">{description}</p>
    </div>
  );
}
