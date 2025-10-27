import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | The Daily Hire',
  description: 'Privacy Policy for The Daily Hire - How we handle your data and privacy.',
};

export default function PrivacyPage() {
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

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2>The Short Version</h2>
          <p>
            The Daily Hire is a simple content blog. We don't collect your personal information, don't have user accounts,
            and don't ask for your email. You just read articles and that's it.
          </p>

          <h2>What We Don't Collect</h2>
          <p>
            Unlike most websites, The Daily Hire is refreshingly simple:
          </p>
          <ul>
            <li><strong>No user accounts</strong> - You don't need to sign up or log in</li>
            <li><strong>No email collection</strong> - We don't have newsletters or forms</li>
            <li><strong>No personal data</strong> - We don't ask for your name, address, or any identifying information</li>
            <li><strong>No tracking pixels</strong> - We don't track you across the web</li>
          </ul>

          <h2>What Happens When You Visit</h2>
          <p>
            When you visit The Daily Hire, here's what happens:
          </p>
          <ul>
            <li>Your browser loads the website (standard stuff)</li>
            <li>You read articles - that's it!</li>
            <li>We use Vercel for hosting, which may log basic server data (IP addresses, browser types) for security and performance</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We may use minimal cookies for:
          </p>
          <ul>
            <li>Remembering your dark mode preference (if we add that feature)</li>
            <li>Basic analytics to see which articles are popular</li>
          </ul>
          <p>
            No cookies are used to track you personally or follow you around the internet.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use or may use these third-party services:
          </p>
          <ul>
            <li><strong>Vercel:</strong> Hosts our website (they have their own <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>)</li>
            <li><strong>Google AdSense:</strong> May display ads on our site (Google has their own <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>)</li>
          </ul>
          <p>
            If we enable ads, Google may use cookies to show you relevant advertisements. You can control ad personalization
            in your <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.
          </p>

          <h2>AI-Generated Content</h2>
          <p>
            All articles on The Daily Hire are AI-generated and provided for entertainment and educational purposes only.
            This content has nothing to do with your privacy - we just want you to know it's not written by humans.
          </p>

          <h2>Your Rights</h2>
          <p>
            Since we don't collect your personal data, there's nothing for you to access, delete, or modify.
            But if you have concerns, feel free to reach out.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our website doesn't target children and doesn't knowingly collect any information from anyone under 13.
            Since we don't collect personal data at all, this shouldn't be an issue.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            If we ever change how we handle privacy (like if we add a newsletter), we'll update this page
            and change the "Last updated" date at the top.
          </p>

          <h2>California Privacy Rights (CCPA)</h2>
          <p>
            If you're in California: We don't sell your personal information because we don't collect it in the first place.
          </p>

          <h2>European Privacy Rights (GDPR)</h2>
          <p>
            If you're in the EU: We don't process your personal data. We're just a simple blog. The only data processing
            happens through our hosting provider (Vercel) and potentially Google AdSense if ads are enabled.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about privacy? While we don't collect your data, we're happy to discuss our practices.
            You can reach out through any contact method provided on the website.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </Container>
  );
}
