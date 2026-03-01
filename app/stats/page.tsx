import { Metadata } from 'next';
import StatsContent from '../../src/components/stats/StatsContent';

export const metadata: Metadata = {
    title: 'Results & Statistics | InCTF 2026',
    description: 'The results and statistics of the InCTF Junior editions.',
};

export default function StatsPage() {
    return <StatsContent />;
}
