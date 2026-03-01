import { Metadata } from 'next';
import SSIContent from '../../src/components/ssi/SSIContent';

export const metadata: Metadata = {
    title: 'School Security Initiative | InCTF 2026',
    description: 'Empowering schools with cyber security awareness and opportunities.',
};

export default function SSIPage() {
    return <SSIContent />;
}
