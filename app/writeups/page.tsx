import { Metadata } from 'next';
import WriteupsListingContent from '../../src/components/writeups/WriteupsListingContent';
import postsIndex from '../../src/data/writeups/index.json';
import { loadYaml } from '../../lib/loadYaml';

export const metadata: Metadata = {
    title: 'Challenge Solution WriteUps | InCTF 2026',
    description: 'Read the solution write-ups for InCTF Jr challenges, and solve them following the write-up and get yourself started!',
};

export default function WriteupsPage() {
    const writeups: any[] = [];

    Object.keys(postsIndex).forEach((key) => {
        const query = (postsIndex as any)[key]?.query;
        if (!query || !query.id) return;
        try {
            const writeup = loadYaml(`src/data/writeups/${query.id}.yaml`);
            writeups.push(writeup);
        } catch (e) {
            console.error(`Failed to load writeup: ${query.id}`, e);
        }
    });

    return <WriteupsListingContent writeups={writeups} />;
}
