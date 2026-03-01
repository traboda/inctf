import { Metadata } from 'next';
import OrganizersContent from '../../src/components/organizers/OrganizersContent';

export const metadata: Metadata = {
    title: 'Organizers | InCTF 2026',
    description: 'View the elite team behind InCTF Junior.',
};

export default function OrganizersPage() {
    return <OrganizersContent />;
}
