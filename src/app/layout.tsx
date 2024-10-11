import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
const ReactQueryProvider = dynamic(() => import('./ReactQueryProvider'), { ssr: false });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--primary-font',
});

export const metadata: Metadata = {
  title: 'Bytez Digital Transformer',
  description: 'Your New Age Digital Transformation Partner',

  keywords: ['Digital Transformer', 'Partner'],
  authors: [{ name: 'Bytez Team' }],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Bytez Digital Transformer',
    description: 'Your New Age Digital Transformation Partner',
    url: 'https://bytez-digital.com',
    siteName: 'Bytez Digital Transformer',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ReactQueryProvider>
          <main className="min-h-dvh">{children}</main>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
