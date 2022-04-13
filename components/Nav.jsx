import React, { useState } from 'react';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { VscMenu } from 'react-icons/vsc';
import Image from 'next/image';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return (
        <div className='max-w-7xl mx-auto h-[100px] z-10 bg-transparent border-b border-gray-200 drop-shadow-lg'>
            <div className='flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link href="/" passHref>
                        <Image unoptimized
                            height="90px"
                            width="185px" className='object-contain cursor-pointer' src='https://lh3.googleusercontent.com/pw/AM-JKLVcGFNKKRuuUmzrlNcQRjxuAxezXkwmzM3WxMMKyQ4_Pr80cj3D86iBv2-MqyA-SNr42xjvei_FMJjPWdax8Y6XoMiw21iVd0I0HgxoUJ2DXk7MQiRug9z6U8OLXP6LCKA-pG0hia4zUmjLy8vnKDB3=w750-h207-no?authuser=0' alt="techness logo" />
                    </Link>

                </div>
                <div className='hidden md:flex pr-4'>
                    <ul className='hidden md:flex'>
                        <li className='px-2'>
                            <Link href="/" passHref>Home</Link>
                        </li>
                        <li className='px-2'>
                            <Link href="/about" passHref>About</Link>
                        </li>
                        <li className='px-2'>
                            <Link href="/blog" passHref>Blog</Link>
                        </li>
                        <li className='px-2'>
                            <Link href="/contact" passHref>Contact</Link>
                        </li>

                    </ul>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <VscMenu className='w-5' /> : <GrClose className='w-5' />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-white w-full px-8'}>

                <li className='border-b-2 border-zinc-300 w-full py-3'>
                    <Link onClick={handleClose} href="/" passHref>Home</Link>
                </li>

                <li className='border-b-2 border-zinc-300 w-full py-3'>
                    <Link onClick={handleClose} href="/about" passHref>About</Link>
                </li>

                <li className='border-b-2 border-zinc-300 w-full py-3'>
                    <Link onClick={handleClose} href="/blog" passHref>Blog</Link>
                </li>

                <li className='border-b-2 border-zinc-300 w-full py-3 mb-3'>
                    <Link onClick={handleClose} href="/contact" passHref>Contact</Link>
                </li>




            </ul>
        </div>
    );
};

export default Navbar;


// import Link from 'next/link';
// import { useState } from 'react';
// import React from 'react';
// import Image from 'next/image';






// export default function Nav() {
//     const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

//     return (
//         <div className="flex items-center justify-between top-0 py-5  border-b max-w-7xl mx-auto">
//             <Link href="/" passHref>
//                 <Image unoptimized
//                     height="50px"
//                     width="185px" className='object-contain cursor-pointer' src='https://lh3.googleusercontent.com/pw/AM-JKLVcGFNKKRuuUmzrlNcQRjxuAxezXkwmzM3WxMMKyQ4_Pr80cj3D86iBv2-MqyA-SNr42xjvei_FMJjPWdax8Y6XoMiw21iVd0I0HgxoUJ2DXk7MQiRug9z6U8OLXP6LCKA-pG0hia4zUmjLy8vnKDB3=w750-h207-no?authuser=0' alt="techness logo" />
//             </Link>


//             <nav className=''>
//                 <section className="MOBILE-MENU flex pr-3 lg:hidden">
//                     <div
//                         className="HAMBURGER-ICON space-y-2"
//                         onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
//                     >
//                         <span className="block h-0.5 w-8  bg-gray-800"></span>
//                         <span className="block h-0.5 w-8  bg-gray-700"></span>
//                         <span className="block h-0.5 w-8  bg-gray-700"></span>
//                     </div>

//                     <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>


//                         <ul className="container MENU-LINK-MOBILE-OPEN flex flex-col items-end pb-5">

//                             <li
//                                 className="CROSS-ICON"
//                                 onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
//                             >
//                                 <svg
//                                     className="h-10 w-10 text-grotto"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 >
//                                     <line x1="18" y1="6" x2="6" y2="18" />
//                                     <line x1="6" y1="6" x2="18" y2="18" />
//                                 </svg>
//                             </li>
//                         </ul>

//                         <ul className="container min-h-[30%] MENU-LINK-MOBILE-OPEN flex flex-col items-center  justify-between text-xl">

//                             <li className="hover:text-cyan-700">
//                                 <Link href="/">Home</Link>
//                             </li>
//                             <li className="hover:text-cyan-700">
//                                 <Link href="/about">About</Link>
//                             </li>
//                             <li className="hover:text-cyan-700">
//                                 <Link href="/blog">Blog</Link>
//                             </li>
//                             <li className="hover:text-cyan-700">
//                                 <Link href="/contact">Contact</Link>
//                             </li>

//                         </ul>
//                     </div>
//                 </section>
//                 <ul className="DESKTOP-MENU hidden space-x-2 lg:flex pr-3 font-small">
//                     <li className="px-4 py-1">
//                         <Link href="/">Home</Link>
//                     </li>
//                     <li className="px-4 py-1">
//                         <Link href="/about">About</Link>
//                     </li>
//                     <li className="px-4 py-1">
//                         <Link href="/blog">Blog</Link>
//                     </li>
//                     <li className="px-4 py-1">
//                         <Link href="/contact">Contact</Link>
//                     </li>

//                 </ul>
//             </nav>





//         </div>
//     );
// }

