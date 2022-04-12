import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { IoLogoGithub } from 'react-icons/io';


export default function Footer() {
    return (
        <>

            <div className="max-w-7xl mx-auto bg-white">

                <footer className="px-3 py-8 border-t  text-2 text-gray-500transition-colors duration-200">
                    <div className="flex flex-col">
                        <div className="md:hidden sm:mt-2 md:mt-7 mx-auto w-11 h-px rounded-full">
                        </div>
                        <div className="sm:mt-0 md:mt-0 flex flex-col md:flex-row">
                            <nav className="flex-1 flex flex-col items-center justify-center md:items-start  md:pr-5">

                                <p className='hidden md:inline-flex font-pop items-center text-center space-x-5'> &copy;  Copyright  2022 Vanessa Sibley</p>
                            </nav>
                            <div className="md:hidden mx-auto w-11 h-px rounded-full">
                            </div>
                            <div className="sm:mt-0 md:mt-0 flex-1 flex items-center justify-center ">
                                <span className="sr-only">
                                    Github
                                </span>
                                <span className="text-2xl hover:text-grotto transition-colors duration-200">
                                    <Link className="ml-4 hover:text-primary-gray-20" href="https://github.com/vsibley">
                                        <IoLogoGithub /></Link>
                                </span>


                                <span className="sr-only">
                                    Instagram
                                </span>
                                <span className="text-2xl hover:text-grotto transition-colors duration-200">
                                    <Link href="https://www.instagram.com/vanessasibley_/">
                                        < FaInstagram className="ml-4 hover:text-primary-gray-20" />
                                    </Link>
                                </span>



                                <span className="sr-only">
                                    Instagram
                                </span>
                                <span className="text-2xl hover:text-grotto transition-colors duration-200">
                                    <Link href="https://www.linkedin.com/in/vanessa-sibley/">
                                        <AiOutlineLinkedin className="ml-4 hover:text-primary-gray-20" />
                                    </Link>
                                </span>

                            </div>
                            <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
                            </div>
                            <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-end md:pl-5">
                                <a href="/">
                                    <img className='w-40 object-contain cursor-pointer' src='https://lh3.googleusercontent.com/pw/AM-JKLVcGFNKKRuuUmzrlNcQRjxuAxezXkwmzM3WxMMKyQ4_Pr80cj3D86iBv2-MqyA-SNr42xjvei_FMJjPWdax8Y6XoMiw21iVd0I0HgxoUJ2DXk7MQiRug9z6U8OLXP6LCKA-pG0hia4zUmjLy8vnKDB3=w750-h207-no?authuser=0' alt="techness logo" />
                                </a>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>


        </>
    )
}