import { Metadata } from 'next';
import AdvisoryBoardContent from '../../src/components/advisory-board/AdvisoryBoardContent';

export const metadata: Metadata = {
    title: 'Advisory Board | InCTF 2026',
    description: 'The InCTF Advisory Board is a high-level expert panel from academia and industry.',
};

export default function AdvisoryBoardPage() {
    return <AdvisoryBoardContent />;
}
