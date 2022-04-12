import Head from 'next/head'
import { PostCard, PostWidget, Categories, Intro } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';



export default function blog({ posts }) {
    return (
        <div class="max-w-7xl mx-auto">
            <div className='flex min-h-full pb-5'>
                <div>

                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 p-2 lg:p-6'>

                        <div className='lg:col-span-8 col-span-1 px-3'>
                            {posts.map((post) => (
                                <PostCard post={post.node} key={post.title} />
                            ))}
                        </div>

                        <div className="hidden lg:inline col-span-4 ">
                            <div className='lg:sticky relative top-8'>
                                <PostWidget />
                                <Categories />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div > //closing div








    );
}
export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts },
    };
}