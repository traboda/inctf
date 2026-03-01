import { Metadata } from 'next';
import FAQContent from '../../src/components/faq/FAQContent';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions (FAQ) | InCTF 2026',
    description: 'Find answers to frequently asked questions about the InCTF competition, registration, and more.',
};

export default function FAQPage() {
    return <FAQContent />;
}
