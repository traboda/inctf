import { Metadata } from 'next';
import AmbassadorContent from '../../src/components/ambassador/AmbassadorContent';

export const metadata: Metadata = {
    title: 'Ambassador Program | InCTF 2026',
    description: 'Join us in empowering the next generation of cybersecurity leaders across India.',
};

export default function AmbassadorPage() {
    return <AmbassadorContent />;
}
