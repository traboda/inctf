import { Metadata } from 'next';
import ChampionshipContent from '../../src/components/championship/ChampionshipContent';

export const metadata: Metadata = {
    title: 'CTF CyberSecurity Championship | InCTF 2026',
    description: 'Learn about the premier CTF CyberSecurity Championship.',
};

export default function ChampionshipPage() {
    return <ChampionshipContent />;
}
