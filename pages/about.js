import React from 'react'
import Image from 'next/image';


export default function About() {

    return (
        <>
            <div className="max-w-7xl mx-auto">

                <div className="overflow-hidden lg:flex lg:items-center pl-2">
                    <div className="max-w-lg py-12 px-4 sm:px-6 lg:py-7">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            <span className="block">
                                Hey, I&apos; m Vanessa.</span>
                        </h2>
                        <p className="text-sm mt-4 text-gray-900">
                            I&apos; m usually over caffinated and have a smile on face. <span className='font-bold'>Tech-Ness</span> is where I&apos; ll be documenting my journey into Software Developer. I&apos;m a 29 year old stay at home  Mom that decided to make a career change. </p>

                        <p className="text-sm mt-4 text-gray-900">Before starting this journey I never wrote a line of code. Well, not unless you count making my Myspace font <span className='font-bold'>bold</span> in middle school. This space is meant to share the things I&apos;ve learned, this mistakes I&apos;ve made and the things I wished I knew from the jump.
                        </p>

                        <p className="text-sm mt-4 text-gray-900">I enrolled in an online coding bootcamp so I should be job ready when I graduate right? <span className='italic'>Wrong my friend.</span> Based on my own personal experince and the feedback I&apos;ve heard received from others there&apos;s a huge gap of guidence/knowledge going from a coding bootcamp to the professional field. My hopes with <span className='text-logoblue font-bold'>Tech-Ness</span> is to bridge a portion of that gap. </p>


                        <ul className="pt-7 list-disc pl-3">
                            <p className="text-lg  font-semibold leading-6 text-gray-900">
                                Still not sure this is the  right place for you? Fair enough. Here&apos;s a few of the things I&apos;ll be sharing about 👇🏽
                            </p>

                            <li className="pt-3 ">
                                <p className="mt-2 text-base leading-5 text-gray-600">
                                    My favorite free and inexpensive online coding resources and tutorials.
                                </p>
                            </li>
                            <li className="pt-3">
                                <p className="mt-2 text-base leading-5 text-gray-600">
                                    Interview with Senior Developers and other bootcamp graduates.
                                </p>
                            </li>
                            <li className="pt-3">
                                <p className="mt-2 text-base leading-5 text-gray-600">
                                    Tips and tricks I have learned for getting the most out of your coding experience.
                                </p>
                            </li>
                            <li className="pt-3">
                                <p className="mt-2 text-base leading-5 text-gray-600">
                                    The interview process and the process of actually getting a job as a Developer.
                                </p>
                            </li>

                        </ul>



                    </div>

                    <div className="flex items-center gap-8 p-8 lg:p-24 ">
                        <Image unoptimized
                            height="1000px"
                            width="830px" src="https://images.unsplash.com/photo-1649181318275-2637843d26ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" className="shadow-2xl rounded-lg w-1/2 object-cover" alt="Tree" />
                        <div>
                            <Image unoptimized
                                height="630px"
                                width="490px" src="https://images.unsplash.com/photo-1649181318229-013abf95f392?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80" className="shadow-2xl rounded-lg mb-8 object-cover" alt="Tree" />
                            <Image unoptimized
                                height="630px"
                                width="430px" src="https://images.unsplash.com/photo-1649184979465-f47bf308c25a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1269&q=80" className="shadow-2xl object-cover rounded-lg" alt="Tree" />
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}