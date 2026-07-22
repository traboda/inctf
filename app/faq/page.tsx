import { Metadata } from 'next';
import FAQContent from '../../src/components/faq/FAQContent';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions (FAQ) | InCTF 2026',
    description: 'Find answers about the InCTF finals schedule, venues, rules, and event information.',
};

export default function FAQPage() {
    return <FAQContent />;
}
