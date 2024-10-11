import React from 'react';
import { Metadata } from 'next';
import DefaultLayout from '@/components/layouts/DefaultLayout';

export const metadata: Metadata = {
  title: {
    template: 'Bytez clone | %s',
    default: 'Bytez clone',
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
