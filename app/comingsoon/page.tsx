import { Metadata } from 'next';
import ComingSoonContent from '../../src/components/comingsoon/ComingSoonContent';

export const metadata: Metadata = {
    title: 'Coming Soon | InCTF 2026',
    description: 'Mission Pending - Sector Under Development.',
};

export default function ComingSoonPage() {
    return <ComingSoonContent />;
}
