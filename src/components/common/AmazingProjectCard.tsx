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

export default function AmazingProjectCard() {
  return (
    <div className="flex h-full flex-col rounded-[24px] bg-[#252b2b] p-5">
      <div className="mx-auto">
        <div className="font-26 mb-4 inline-flex items-center gap-8">
          <div className="font-26 m-0 font-medium">HIPAA-compliant Healthcare Solution</div>
        </div>
      </div>
    </div>
  );
}
