'use client';

import { ArrowDown } from 'lucide-react';
import { SCROLL_OFFSETS } from '@/lib/constants';
import { Button } from '@/components/ui';

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({ top: SCROLL_OFFSETS.hero, behavior: 'smooth' });
  };

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-3 text-white">
            Your Daily Dose of{' '}
            <span className="text-blue-400">Recruiting</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Spicy takes, no-BS tips, and all the laughs to get you through your day
          </p>
          <Button
            variant="link"
            onClick={scrollToContent}
          >
            <span>Scroll for the good stuff</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
}
