import React from 'react'
import Image from 'next/image';
import { Footer, Nav } from '../components';
import { VscCircleFilled } from 'react-icons/vsc'


export default function About() {

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Nav />
                <div className="overflow-hidden lg:flex lg:items-center pt-12 md:pt-[4rem] pb-10">
                    <div className="max-w-xl lg:max-w-sm  xl:max-w-2xl lg:pt-0 px-4 md:px-6 ">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            <span className="block">
                                Hey, I&apos; m Vanessa.</span>
                        </h2>
                        <p className="text-sm mt-4 text-gray-900">
                            I&apos;usually over-caffeinated and have a smile on my face.<span className='font-bold'>Tech-Ness</span> is where I&apos;ll be documenting my journey into Web Development. I&apos;m a 29 year old stay-at-home Mom that decided to make a career change.</p>

                        <p className="text-sm mt-4 text-gray-900">Before starting this journey I had never written a line of code in my entire life.Not unless you count making my Myspace font <span className='font-bold'>bold</span> in middle school.I started this space to share the things I&apos;ve learned, this mistakes I&apos;ve made and the things I wished I knew from the jump.
                        </p>

                        <p className="text-sm mt-4 text-gray-900">I enrolled in an online coding Bootcamp so I should be job-ready when I graduate right?<span className='italic'>Wrong my friend.</span> Based on my personal experience and the feedback I&apos; ve received from others there&apos; s a huge gap in guidance/knowledge going from a coding Bootcamp to the professional field.My hope with <span className='text-logoblue font-bold'>Tech-Ness</span> is to bridge a portion of that gap. </p>


                        <ul className="pt-7">
                            <p className="text-lg  font-semibold leading-6 text-gray-900">
                                Still not sure this is the  right place for you? Fair enough. Here&apos;s a few of the things I&apos;ll be sharing about 👇🏽
                            </p>

                            <li className="pt-3">
                                <p className="mt-2 text-base leading-5 text-gray-600">
                                    <VscCircleFilled className='inline text-xs' />
                                    My favorite free and inexpensive online coding resources and tutorials.
                                </p>
                            </li>
                            <li className="pt-3">
                                <p className="mt-2 text-base leading-5 text-gray-600">
                                    <VscCircleFilled className='inline text-xs' />
                                    Interview with Senior Developers and other bootcamp graduates.
                                </p>
                            </li>
                            <li className="pt-3">
                                <p className="mt-2 text-base leading-5 text-gray-600">
                                    <VscCircleFilled className='inline text-xs' />
                                    The interview process and the process of actually getting a job as a Developer.
                                </p>
                            </li>
                            <li className="pt-3">
                                <p className="mt-2 text-base leading-5 text-gray-600">
                                    <VscCircleFilled className='inline text-xs' />
                                    Tips and tricks I have learned for getting the most out of your learning and interviewing  experience.
                                </p>
                            </li>

                        </ul>



                    </div>

                    <div className="flex items-center gap-8 px-5 md:pr-5 pt-5">
                        <img src="https://images.unsplash.com/photo-1649181318275-2637843d26ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" className="shadow-2xl rounded-lg w-1/2 object-cover" alt="Tree" />
                        <div>
                            <img src="https://images.unsplash.com/photo-1649181318229-013abf95f392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80" className="shadow-2xl rounded-lg mb-8 object-cover" alt="Tree" />
                            <img src="https://images.unsplash.com/photo-1649184979465-f47bf308c25a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1269&q=80" className="shadow-2xl object-cover rounded-lg" alt="Tree" />
                        </div>
                    </div>

                </div>
                <div className='xl:fixed bottom-0 right-0 left-0'>
                    <Footer />
                </div>
            </div >
        </>
    )
}