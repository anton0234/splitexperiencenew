import type { Metadata, Viewport } from 'next';
import { Oswald, Lora, Inter } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Split Experience — Eleven things worth doing in Split',
  description:
    'Eleven hand-picked experiences in Split, Croatia. Curated by locals, booked via WhatsApp in sixty seconds.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Split Experience',
    description: 'Eleven hand-picked experiences in Split, Croatia.',
    url: 'https://splitexperience.com',
    siteName: 'Split Experience',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${lora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
