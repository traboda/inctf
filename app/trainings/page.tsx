import { Metadata } from 'next';
import TrainingsContent from '../../src/components/trainings/TrainingsContent';

export const metadata: Metadata = {
    title: 'Training Schedule | InCTF 2026',
    description: 'Training Workshops and Schedule.',
};

export default function TrainingsPage() {
    return <TrainingsContent />;
}
