import React from 'react'
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';


const PostCard = ({ post }) => {
    console.log(post);

    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 group'>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6 group-hover:scale-105 transition-transform  duration-200 ease-in-out'>
                < div className='cursor-pointer'>
                    <Link href={`/post/${post.slug}`} passHref>

                        <Image
                            unoptimized
                            layout='fill'
                            src={post.featuredImage.url}
                            alt={post.title}
                            className='object-top absolute h-80 w-full shadow-lg rounded-t-lg object-cover lg:rounded-lg'
                        />
                    </Link>
                </div>
            </div>

            <h1 className='duration-400 text-center mb-8 cursor-pointer hover:text-logoblue text-3xl font-semibold hover:scale-105 transition-transform  duration-200 ease-in-out'>
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                    <Image
                        unoptimized
                        src={post.author.photo.url}
                        alt={post.author.name}
                        height='40px'
                        width='40px'
                        className='align-middle rounded-full'
                    />
                    <p className='inline align-middle text-gray-800 ml-2 text-md'>
                        {post.author.name}
                    </p>
                </div>
                <div className='font-medium text-gray-800'>
                    <h3>Published: <span className='font-semibold'>{moment(post.createdAt).format('MMM DD, YYYY')}
                    </span> </h3>
                </div>
            </div>
            <p className='text-center text-md text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
            <div className="text-center">
                <Link href={`/post/${post.slug}`} passHref>
                    <span className='transition 400 transform hover:-translate-y-1 inline-block bg-logoblue font-medium text-sm py-2 px-3 rounded-md cursor-pointer text-white'>
                        Read More...
                    </span>
                </Link>
            </div>





        </div>
    )
}

export default PostCard