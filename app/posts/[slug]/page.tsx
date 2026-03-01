import { Metadata } from 'next';
import BlogPostContent from '../../../src/components/blog/BlogPostContent';
import postsIndex from '../../../src/data/posts/index.json';
import { loadYaml } from '../../../lib/loadYaml';

// Generate static params
export async function generateStaticParams() {
    return Object.keys(postsIndex)
        .filter((key) => (postsIndex as any)[key]?.query?.slug)
        .map((key) => {
            const { query } = (postsIndex as any)[key];
            return {
                slug: query.slug,
            };
        });
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    try {
        const { slug } = await params;
        const data: any = loadYaml(`src/data/posts/${slug}.yaml`);
        return {
            title: `${data.title} - Blog`,
            description: data.description,
        };
    } catch (e) {
        return {
            title: 'Blog Post Not Found',
        };
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let data = null;
    try {
        data = loadYaml(`src/data/posts/${slug}.yaml`);
    } catch (e) {
        console.error(`Failed to load post: ${slug}`, e);
    }

    return <BlogPostContent data={data} />;
}
