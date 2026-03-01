import { Metadata } from 'next';
import AboutContent from '../../src/components/about/AboutContent';

export const metadata: Metadata = {
    title: 'About | InCTF 2026',
    description: 'Learn about India\'s First Ethical Hacking Contest and the mission behind InCTF.',
};

export default function AboutPage() {
    return <AboutContent />;
}
