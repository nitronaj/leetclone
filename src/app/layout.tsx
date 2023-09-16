import './globals.css';
import type { Metadata } from 'next';

import Head from 'next/head';
import { Inter } from 'next/font/google';

import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LeetClone',
  description: 'Clone version of leetcode',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="icon.png" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
