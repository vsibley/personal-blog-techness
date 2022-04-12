import Head from 'next/head'
import { PostCard, PostWidget, Categories, Intro, Subscribe } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';



export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Tech-Ness Personal Blog</title>
      </Head>
      <Intro />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className='lg:col-span-12 col-span-1'>
          {/* {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))} */}
          <Subscribe />
          {/* <FeaturedPosts /> */}

        </div>

        {/* <div className="lg:col-span-4 col-span-1">
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>

        </div> */}
      </div>
    </div> //closing div

  );
}
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}