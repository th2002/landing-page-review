import React from 'react';
import Header from '../common/Header';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-dvh flex-col bg-background">
      <Header />
      <div className="mx-3">{children}</div>
    </main>
  );
}
