import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import Link from 'next/link';
import { ArrowLeft, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About The Daily Hire | Recruiting News & Industry Insights',
  description:
    'The Daily Hire delivers authentic recruiting news, HR technology reviews, and talent acquisition insights. No corporate speak, just real talk for recruiting professionals.',
  keywords: [
    'recruiting blog',
    'talent acquisition news',
    'HR technology reviews',
    'recruiting industry insights',
    'ATS reviews',
    'recruiting tools',
    'hiring trends',
    'recruiting best practices',
  ],
  openGraph: {
    title: 'About The Daily Hire | Recruiting News & Industry Insights',
    description:
      'The Daily Hire delivers authentic recruiting news, HR technology reviews, and talent acquisition insights. No corporate speak, just real talk for recruiting professionals.',
    type: 'website',
  },
};

export default function AboutPage() {
  // X logo as SVG component
  const XLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <article className="prose prose-lg prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About The Daily Hire
          </h1>

          <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
            <p className="text-xl text-gray-200">
              Your daily dose of recruiting news, talent acquisition insights, and HR technology
              reviews—delivered without the corporate cringe.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Our Mission</h2>
            <p>
              The recruiting industry is drowning in buzzwords, vague best practices, and tools
              that overpromise and underdeliver. We&apos;re here to cut through the noise and give
              recruiting professionals what they actually need: honest insights, practical advice,
              and real talk about what&apos;s working (and what&apos;s not) in talent acquisition.
            </p>

            <p>
              Whether you&apos;re a seasoned recruiter, a hiring manager, or an HR professional
              trying to navigate the ever-changing landscape of recruiting technology, The Daily
              Hire is your trusted source for industry news you can actually use.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What We Cover</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Recruiting News</h3>
                <p className="text-gray-300 text-base">
                  Breaking trends, industry shifts, and what&apos;s actually happening in the
                  talent acquisition world—minus the corporate speak.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Tool Reviews</h3>
                <p className="text-gray-300 text-base">
                  Honest reviews of ATS platforms, sourcing tools, interview software, and
                  everything in between. We tell you what works and what&apos;s trash.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-green-400 mb-3">Quick Tips</h3>
                <p className="text-gray-300 text-base">
                  Actionable recruiting advice you can implement today. No fluff, just practical
                  strategies that actually move the needle.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">AI & Tech Humor</h3>
                <p className="text-gray-300 text-base">
                  Because sometimes you need to laugh at the absurdity of AI screening tools and
                  recruiting tech fails. We keep it real and keep it funny.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Our Voice</h2>
            <p>
              We write like we talk—conversational, direct, and completely free of corporate
              jargon. If you&apos;re tired of reading recruiting content that sounds like it was
              written by a committee of HR lawyers, you&apos;re in the right place.
            </p>

            <p>
              Our content is informed by real recruiting experience, backed by industry research,
              and delivered with the kind of authenticity that&apos;s rare in the HR tech space.
              We&apos;re not here to sell you software or push vendor agendas—we&apos;re here to
              help recruiting professionals make better decisions.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Meet Our Contributors</h2>

            <div className="space-y-6 my-8">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Judah &quot;News Boy&quot; Jacobs
                </h3>
                <p className="text-gray-400 text-sm mb-3">News & Industry Trends</p>
                <p className="text-gray-300 text-base">
                  Covering breaking recruiting news, AI developments, and talent acquisition
                  trends shaping the industry.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Terry &quot;The Tool&quot; Shepard
                </h3>
                <p className="text-gray-400 text-sm mb-3">Technology & Software Reviews</p>
                <p className="text-gray-300 text-base">
                  Delivering no-BS reviews of ATS platforms, recruiting tools, and HR technology
                  that actually matter.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Judy &quot;Just The Tip&quot; Terry
                </h3>
                <p className="text-gray-400 text-sm mb-3">Practical Recruiting Advice</p>
                <p className="text-gray-300 text-base">
                  Providing quick, actionable recruiting tips and strategies you can implement
                  immediately.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  Stan &quot;The Funny Man&quot; Fisher
                </h3>
                <p className="text-gray-400 text-sm mb-3">AI & Recruiting Humor</p>
                <p className="text-gray-300 text-base">
                  Bringing humor to the sometimes absurd world of AI recruiting tools and
                  technology fails.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Trust Us?</h2>
            <p>
              We&apos;re recruiting professionals writing for recruiting professionals. Every
              article is based on hands-on experience, industry research, and real-world testing.
              We don&apos;t take vendor money to influence reviews, and we call out bad tools just
              as loudly as we praise good ones.
            </p>

            <p>
              Our commitment is simple: deliver recruiting content that&apos;s accurate, useful,
              and refreshingly honest. No clickbait, no vendor bias, no BS.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Join the Conversation</h2>
            <p>
              Follow us on{' '}
              <a
                href="https://x.com/TheDailyHire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                X (Twitter)
              </a>{' '}
              and{' '}
              <a
                href="https://www.linkedin.com/company/the-daily-hire/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LinkedIn
              </a>{' '}
              for daily recruiting insights, industry news, and the occasional hot take. We&apos;re
              building a community of recruiting professionals who value authenticity over
              corporate speak.
            </p>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6 mt-12">
              <p className="text-lg text-gray-200 mb-4">
                <strong>Have a story idea or want to contribute?</strong>
              </p>
              <p className="text-gray-300 mb-6">
                We&apos;re always looking for fresh perspectives and industry insights. Reach out
                to us on social media—we&apos;d love to hear from you.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://x.com/TheDailyHire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  aria-label="Follow us on X"
                >
                  <XLogo className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-daily-hire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
}
