import { Metadata } from 'next';
import PromoteClientWrapper from '../../src/components/promote/PromoteClientWrapper';

export const metadata: Metadata = {
    title: 'Publicize InCTF 2026',
    description: 'Publicize InCTF and download posters.',
};

export default function PublicizePage() {
    return <PromoteClientWrapper />;
}
