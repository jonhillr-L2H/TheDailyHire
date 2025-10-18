'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Category } from '@/types';

const NAV_ITEMS: { name: string; path: Category }[] = [
  { name: 'NEWS', path: 'news' },
  { name: 'TOOLS', path: 'tools' },
  { name: 'FUNNIES', path: 'ai-funnies' },
  { name: 'JUST THE TIP', path: 'just-the-tip' },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(`/${path}`);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link href="/" className="group">
            <h1 className="text-3xl md:text-4xl tracking-tight text-white transition-colors">
              The Daily <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hire</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
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
      </div>
    </header>
  );
}
