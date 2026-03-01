import { Metadata } from 'next';
import ResourcesContent from '../../src/components/resources/ResourcesContent';

export const metadata: Metadata = {
    title: 'Resources | InCTF 2026',
    description: 'Helpful resources for the InCTF competition.',
};

export default function ResourcesPage() {
    return <ResourcesContent />;
}
