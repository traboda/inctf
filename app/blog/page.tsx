import { Metadata } from 'next';
import BlogListingPageContent from '../../src/components/blog/BlogListingPageContent';
import postsIndex from '../../src/data/posts/index.json';
import { loadYaml } from '../../lib/loadYaml';

export const metadata: Metadata = {
    title: 'Blog | InCTF 2026',
    description: 'Participant experiences, cyberSec news, case studies, and updates.',
};

export default function BlogPage() {
    const posts: any[] = [];

    Object.keys(postsIndex).forEach((key) => {
        const query = (postsIndex as any)[key]?.query;
        if (!query || !query.slug) return;
        try {
            const post = loadYaml(`src/data/posts/${query.slug}.yaml`);
            posts.push(post);
        } catch (e) {
            console.error(`Failed to load post: ${query.slug}`, e);
        }
    });

    return <BlogListingPageContent posts={posts} />;
}
