/**
 * FAQ Schema Component
 *
 * Generates JSON-LD FAQ structured data for articles
 * Automatically extracts Q&A patterns from article content
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  title: string;
  content: string;
  url: string;
}

/**
 * Extract FAQ items from article HTML content
 * Looks for common patterns like:
 * - H2/H3 headings phrased as questions
 * - Paragraphs following question headings
 */
function extractFAQs(htmlContent: string, articleTitle: string): FAQItem[] {
  const faqs: FAQItem[] = [];

  // Simple regex-based extraction
  // Look for headings that end with "?" or contain question words
  const questionPattern = /<h[23][^>]*>(.*?\?.*?)<\/h[23]>/gi;
  const matches = Array.from(htmlContent.matchAll(questionPattern));

  matches.forEach((match) => {
    const question = match[1].replace(/<[^>]+>/g, '').trim();

    // Find content after this heading until the next heading
    const afterHeading = htmlContent.substring(match.index! + match[0].length);
    const nextHeading = afterHeading.search(/<h[23]/i);
    const answerHtml = nextHeading > 0 ? afterHeading.substring(0, nextHeading) : afterHeading.substring(0, 500);

    // Extract text from answer HTML
    const answer = answerHtml
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .substring(0, 300); // Keep answers concise for schema

    if (question && answer && answer.length > 20) {
      faqs.push({ question, answer });
    }
  });

  // If no explicit questions found, create implicit FAQ from article structure
  if (faqs.length === 0 && articleTitle) {
    // Convert article title to a question if it's not already
    const titleAsQuestion = articleTitle.includes('?')
      ? articleTitle
      : `How ${articleTitle.toLowerCase()}?`;

    // Extract first paragraph as answer
    const firstPara = htmlContent.match(/<p[^>]*>(.*?)<\/p>/i);
    if (firstPara) {
      const answer = firstPara[1]
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      if (answer.length > 20) {
        faqs.push({
          question: titleAsQuestion,
          answer: answer.substring(0, 300),
        });
      }
    }
  }

  return faqs.slice(0, 10); // Limit to 10 FAQs per page
}

export function FAQSchema({ title, content }: FAQSchemaProps) {
  const faqs = extractFAQs(content, title);

  // Only render if we have at least one FAQ
  if (faqs.length === 0) {
    return null;
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
