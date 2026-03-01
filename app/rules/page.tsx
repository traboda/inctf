import { Metadata } from 'next';
import RulesContent from '../../src/components/rules/RulesContent';

export const metadata: Metadata = {
    title: 'Rules | InCTF 2026',
    description: 'Championship rules for InCTF 2026.',
};

export default function RulesPage() {
    return <RulesContent />;
}
