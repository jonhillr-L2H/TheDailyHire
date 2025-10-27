import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

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

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
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
