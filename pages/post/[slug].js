import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import { useRouter } from 'next/router'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader, Subscribe, Nav } from '../../components'

const PostDetails = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />
    }

    return (

        <div className="container mx-auto px-3 md:px-10 py-5 mb-8">
            <Nav />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-5">

                <div className="col-span-1 lg:col-span-12 pt-[4rem] md:pt-0">
                    <PostDetail post={post} />
                    {/* <Author author={post.author} /> */}
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />

                </div>

                {/* <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Subscribe />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);
    return {
        props: { post: data },
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true
    }
}