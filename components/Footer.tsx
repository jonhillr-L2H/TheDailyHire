import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // X logo as SVG component
  const XLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="text-white">The Daily </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hire</span>
            </h3>
            <p className="text-gray-400 text-sm">
              The hottest takes, tools, and laughs in recruiting. No fluff, just the tea.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/ai-funnies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Funnies
                </Link>
              </li>
              <li>
                <Link href="/just-the-tip" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Just the Tip
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/YOUR_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  aria-label="Follow us on X"
                >
                  <XLogo className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-daily-hire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} The Daily Hire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
