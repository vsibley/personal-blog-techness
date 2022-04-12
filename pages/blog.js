import Head from 'next/head'
import { PostCard, PostWidget, Categories, Intro, Subscribe } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';
import Link from 'next/link';



export default function blog({ posts }) {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="header mt-5 md:mt-[4rem] px-5 flex items-end justify-between mb-5 md:mb-10 ">
                <div className="title">
                    <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Lastest articles
                    </p>
                    <p className="text-xl md:text-2xl font-light text-gray-600">
                        Looking for a specific topic? Send me a  <span className='text-logoblue hover:italic hover:text-gray-800 hover:underline '><Link href="/contact">message!</Link></span>
                    </p>

                </div>
            </div>
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
                                <Subscribe />
                                <PostWidget />
                                <Categories />
                            </div>
                        </div>
                        <div className="">
                            <div className='sm:sticky relative top-8 md:hidden'>
                                <Subscribe />
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