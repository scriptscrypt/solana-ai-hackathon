import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const relishGargler = localFont({
  src: '../fonts/relish-gargler-regular.otf',
  variable: '--font-relish',
});

const ppSans = localFont({
  src: '../fonts/PPSupplySans-Regular.otf',
  variable: '--font-ppsans',
});

export const metadata: Metadata = {
  title: 'Solana AI Hackathon',
  description: '10th - 23rd Dec. global hackathon. $250k+ in prizes',
  keywords: ['solana', 'hackathon', 'ai', 'solana ai hackathon'],
  authors: [{ name: 'SendAI', url: 'https://www.sendai.fun' }],
  openGraph: {
    title: 'Solana AI Hackathon',
    description: '10th - 23rd Dec. global hackathon. $250k+ in prizes',
    url: 'https://hackathon.sendai.fun',
    siteName: 'Solana AI Hackathon',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Solana AI Hackathon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solana AI Hackathon',
    description: '10th - 23rd Dec. global hackathon. $250k+ in prizes',
    images: ['/og.png'],
  },
  metadataBase: new URL('https://hackathon.sendai.fun'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${relishGargler.variable} ${ppSans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
