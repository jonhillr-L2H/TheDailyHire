import { AlertCircle } from 'lucide-react';

export function AIDisclaimer() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-8">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-400">
          <p className="font-semibold text-gray-300 mb-1">AI-Generated Content</p>
          <p>
            This article was generated using AI and should be considered entertainment and educational content only.
            While we strive for accuracy, always verify important information with official sources.
            Don&apos;t take it too seriously—we&apos;re here for the vibes and the laughs.
          </p>
        </div>
      </div>
    </div>
  );
}
