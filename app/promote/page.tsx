import { Metadata } from 'next';
import PromoteClientWrapper from '../../src/components/promote/PromoteClientWrapper';

export const metadata: Metadata = {
    title: 'Promote InCTF 2026',
    description: 'Promote InCTF and download posters.',
};

export default function PromotePage() {
    return <PromoteClientWrapper />;
}
