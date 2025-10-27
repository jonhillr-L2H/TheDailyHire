import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WebVitals } from '@/components/WebVitals';
import Script from 'next/script';

// ⚡ PERFORMANCE: Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'The Daily Hire | Recruiting News That Actually Slaps',
  description: 'No corporate cringe. No fluff. Just the hottest takes, tools, and tips in recruiting.',
  keywords: ['recruiting', 'hiring', 'HR', 'talent acquisition', 'recruitment news', 'recruiting tools'],
  authors: [{ name: 'The Daily Hire' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'The Daily Hire | Recruiting News That Actually Slaps',
    description: 'No corporate cringe. No fluff. Just the hottest takes, tools, and tips in recruiting.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Daily Hire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Daily Hire | Recruiting News That Actually Slaps',
    description: 'No corporate cringe. No fluff. Just the hottest takes, tools, and tips in recruiting.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z46L6L9ZEJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z46L6L9ZEJ');
          `}
        </Script>

        {/* Google AdSense - Replace with your publisher ID */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <WebVitals />
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-gray-950 text-white">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
