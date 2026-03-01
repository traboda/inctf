import { Metadata } from 'next';
import MissionBriefPageContent from '../../src/components/mission-brief/MissionBriefPageContent';

export const metadata: Metadata = {
    title: 'Mission Brief | InCTF 2026',
    description: 'Mission Briefing for Operation Vajra.',
};

export default function MissionBriefPage() {
    return <MissionBriefPageContent />;
}
