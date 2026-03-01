import { Metadata } from 'next';
import TalentIncubationContent from '../../src/components/talent-incubation/TalentIncubationContent';

export const metadata: Metadata = {
    title: 'CyberSecurity Talent Incubation | InCTF 2026',
    description: 'CyberSecurity Talent Incubation initiatives by Amrita.',
};

export default function TalentIncubationPage() {
    return <TalentIncubationContent />;
}
