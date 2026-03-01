import { Metadata } from 'next';
import WriteupContent from '../../../src/components/writeups/WriteupContent';
import postsIndex from '../../../src/data/writeups/index.json';
import { loadYaml } from '../../../lib/loadYaml';

// Generate static params
export async function generateStaticParams() {
    return Object.keys(postsIndex)
        .filter((key) => (postsIndex as any)[key]?.query?.id)
        .map((key) => {
            const { query } = (postsIndex as any)[key];
            return {
                id: String(query.id),
            };
        });
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    try {
        const { id } = await params;
        const data: any = loadYaml(`src/data/writeups/${id}.yaml`);
        return {
            title: `${data.title} - ${data?.category} Challenge Solution`,
        };
    } catch (e) {
        return {
            title: 'WriteUp Not Found',
        };
    }
}

export default async function WriteupPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    let data = null;
    try {
        data = loadYaml(`src/data/writeups/${id}.yaml`);
    } catch (e) {
        console.error(`Failed to load writeup: ${id}`, e);
    }

    return <WriteupContent data={data} />;
}
