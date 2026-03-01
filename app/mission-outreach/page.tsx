import { Metadata } from 'next';
import MissionOutreachPageContent from '../../src/components/mission-outreach/MissionOutreachPageContent';

export const metadata: Metadata = {
    title: 'Mission Outreach | InCTF 2026',
    description: 'Operation Vajra Outreach protocols.',
};

export default function MissionOutreachPage() {
    return <MissionOutreachPageContent />;
}
