import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | The Daily Hire',
  description: 'Terms of Service for The Daily Hire - Rules and guidelines for using our website.',
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <h2>The Short Version</h2>
          <p>
            By using The Daily Hire, you agree: Our content is AI-generated entertainment, not professional advice.
            Don&apos;t be a jerk. Don&apos;t steal our stuff. We&apos;re not liable if you make business decisions based on robot-written articles.
          </p>

          <h2>AI-Generated Content Disclaimer</h2>
          <p>
            <strong>🤖 IMPORTANT:</strong> Everything on The Daily Hire is generated using artificial intelligence.
            This means:
          </p>
          <ul>
            <li><strong>It&apos;s for entertainment and laughs</strong> - Not professional recruiting advice</li>
            <li><strong>Don&apos;t bet your career on it</strong> - Always verify important information with real experts</li>
            <li><strong>We can&apos;t guarantee accuracy</strong> - AI is smart but not perfect</li>
            <li><strong>Take it with a grain of salt</strong> - We&apos;re here for hot takes and good vibes, not legal counsel</li>
            <li><strong>No professional relationship</strong> - Reading our articles doesn&apos;t create any advisory relationship</li>
          </ul>

          <h2>What You Can Do</h2>
          <p>
            You&apos;re welcome to:
          </p>
          <ul>
            <li>Read articles for free</li>
            <li>Share links to articles on social media</li>
            <li>Discuss the content with others</li>
            <li>Enjoy the content for personal use</li>
          </ul>

          <h2>What You Can&apos;t Do</h2>
          <p>
            Please don&apos;t:
          </p>
          <ul>
            <li>Copy and republish our articles elsewhere (that&apos;s plagiarism, even if AI wrote it)</li>
            <li>Scrape or download all our content</li>
            <li>Remove our branding or attribution</li>
            <li>Use our content for commercial purposes without permission</li>
            <li>Hack, attack, or try to break the website</li>
            <li>Do anything illegal using our platform</li>
          </ul>

          <h2>No Warranties (Legal Speak: We&apos;re Not Perfect)</h2>
          <p>
            The Daily Hire is provided &quot;as is&quot; without any warranties. We don&apos;t guarantee:
          </p>
          <ul>
            <li>That articles are 100% accurate</li>
            <li>That the website will always be available</li>
            <li>That links will always work</li>
            <li>That AI-generated advice will solve your recruiting problems</li>
          </ul>
          <p>
            Use common sense and verify anything important.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            We&apos;re not responsible for:
          </p>
          <ul>
            <li>Decisions you make based on AI-generated content</li>
            <li>Any damages from using (or not being able to use) the website</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Technical issues or downtime</li>
          </ul>
          <p>
            Again: Don&apos;t make major career or business decisions based solely on AI-generated blog posts.
          </p>

          <h2>Copyright & Intellectual Property</h2>
          <p>
            Even though our content is AI-generated, it&apos;s still protected by copyright. The Daily Hire owns the rights
            to the compiled content, design, and branding. Don&apos;t copy our whole site or republish our articles.
          </p>

          <h2>Third-Party Links & Ads</h2>
          <p>
            We may link to other websites or display ads (like Google AdSense). We&apos;re not responsible for:
          </p>
          <ul>
            <li>What&apos;s on those other websites</li>
            <li>The content of third-party advertisements</li>
            <li>What happens if you click those ads</li>
          </ul>
          <p>
            Click at your own risk - those sites have their own terms and privacy policies.
          </p>

          <h2>User Conduct</h2>
          <p>
            Basic rules of the internet apply:
          </p>
          <ul>
            <li>Don&apos;t try to hack or break the website</li>
            <li>Don&apos;t upload viruses or malware</li>
            <li>Don&apos;t violate any laws</li>
            <li>Don&apos;t be a jerk to other users (if we add comments later)</li>
          </ul>

          <h2>DMCA & Copyright Claims</h2>
          <p>
            If you believe our AI accidentally generated content that infringes your copyright, let us know.
            We take copyright seriously and will investigate legitimate claims.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We can update these terms anytime. We&apos;ll update the &quot;Last updated&quot; date at the top.
            Continued use of the site means you accept the new terms.
          </p>

          <h2>No Formal Business Entity (For Now)</h2>
          <p>
            The Daily Hire is currently operated as a personal project. We&apos;re not an LLC, corporation, or formal business entity.
            If that changes, we&apos;ll update these terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms are governed by United States law. Any disputes will be resolved in applicable U.S. courts.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Reach out through any contact method on the website.
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
