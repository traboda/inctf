import { Metadata } from 'next';
import SponsorsContent from '../../src/components/sponsors/SponsorsContent';

export const metadata: Metadata = {
    title: 'Sponsors | InCTF 2026',
    description: 'Our proud sponsors supporting India\'s First Ethical Hacking Contest.',
};

export default function SponsorsPage() {
    return <SponsorsContent />;
}
