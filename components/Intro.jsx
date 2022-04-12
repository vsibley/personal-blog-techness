import React from 'react';
import Image from 'next/image';

export default function Intro() {
    return (
        <div className='grid grid-cols-1 pb-5 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 py-9 lg:p-6 items-center '>
            <div className='pb-2 space-y-5'>
                <div className=''>
                    <h2 className='text-3xl max-w-xl font-pop font-light pb-1'> <span className='font-semibold tracking-wide'> Welcome Friends, </span><br /> thanks for joining me. </h2>

                    <h2><span className='font-bold text-logoblue '>Tech-Ness</span> is my personal corner of the internet where I&apos;ll be documenting my journey into Software Development. </h2>
                </div>

            </div>

            <Image
                unoptimized
                height="880px"
                width="680px"
                className='px-1 md:px-0 mb-10 object-contain md:max-w-md lg:max-w-auto rounded' src="https://images.unsplash.com/photo-1649181318220-e8cfae2a33c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80" alt="" />

        </div >
    )
}