import { Metadata } from 'next';
import MissionControlPageContent from '../../src/components/mission-control/MissionControlPageContent';

export const metadata: Metadata = {
    title: 'Mission Control | InCTF 2026',
    description: 'Command and Control for Operation Vajra.',
};

export default function MissionControlPage() {
    return <MissionControlPageContent />;
}
