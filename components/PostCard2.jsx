import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard2 = ({ post }) => (

    <div className='flex min-h-full pb-5'>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 p-2 lg:p-6'>

                <Link href={`/post/${post.slug}`}>
                    <div className='border rounded-lg group cursor-pointer overflow-hidden'>
                        <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform  duration-200 ease-in-out'
                            src={post.author.photo.url} />
                        <div className='flex justify-between p-5 bg-white'>
                            <div>
                                <p className='text-lg font-bold '> {post.title} </p>
                            </div>

                            <img className='h-12 rounded-full'

                                loader={grpahCMSImageLoader}
                                alt={post.author.name}
                                src={post.author.photo.url} />
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    </div>
);

export default PostCard2;
