'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin } from 'lucide-react';
import type { Category } from '@/types';

const NAV_ITEMS: { name: string; path: Category | 'about' }[] = [
  { name: 'NEWS', path: 'news' },
  { name: 'TOOLS', path: 'tools' },
  { name: 'FUNNIES', path: 'ai-funnies' },
  { name: 'THE TIP', path: 'just-the-tip' },
  { name: 'ABOUT', path: 'about' },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(`/${path}`);

  // X logo as SVG component
  const XLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        {/* Logo */}
        <div className="flex justify-center mb-4 relative">
          <Link href="/" className="group">
            <h1 className="text-3xl md:text-4xl tracking-tight text-white transition-colors">
              The Daily <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hire</span>
            </h1>
          </Link>

          {/* Social Icons - positioned to the right on desktop, below on mobile */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3">
            <a
              href="https://twitter.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
              aria-label="Follow us on X"
            >
              <XLogo className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/the-daily-hire"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  href={`/${item.path}`}
                  className={`text-sm transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Social Icons - show below nav on mobile */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-3">
          <a
            href="https://twitter.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 transition-colors"
            aria-label="Follow us on X"
          >
            <XLogo className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/the-daily-hire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
