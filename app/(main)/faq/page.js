import Pagebanner from '@/components/Common/Pagebanner';
import FaqAccordion from '@/components/Main/Faq/FaqAccordion';
import Faqs from '@/components/Main/Faq/Faqs';

export const metadata = {
    title: 'FAQs | thynkWISE',
    description: 'Frequently asked questions about thynkWISE services and processes.'
};

export default function FaqPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: Faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <Pagebanner title="Frequently Asked Questions" />
            <div className="container py-5">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <FaqAccordion />
            </div>
        </>
    );
}