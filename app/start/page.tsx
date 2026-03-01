import { Metadata } from 'next';
import StartContent from '../../src/components/start/StartContent';

export const metadata: Metadata = {
    title: 'Get Started | InCTF 2026',
    description: 'Get started with InCTF!',
};

export default function StartPage() {
    return <StartContent />;
}
