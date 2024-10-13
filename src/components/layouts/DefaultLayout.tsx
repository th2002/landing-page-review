import React from 'react';
import Header from '../common/Header';
import { Footer } from '../common/Footer';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-dvh flex-col bg-background">
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
