import { Metadata } from 'next';
import BrandingContent from '../../src/components/branding/BrandingContent';

export const metadata: Metadata = {
    title: 'Brand Kit | InCTF 2026',
    description: 'Brand Assets & Guidelines for InCTF Junior.',
};

export default function BrandingPage() {
    return <BrandingContent />;
}
