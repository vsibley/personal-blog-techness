import React, { useState } from 'react'
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <h3 className='pt-3 font-bold sm:px-0 text-lg text-center text-logoblue drop-shadow-xl '>Your message has been sent! <br />Thanks for reaching out, I&apos;ll get back to you in 2-4 bussines days.</h3>
    )
}


function Contact(props) {
    const [result, showResult] = useState(false);


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_qamlp2h',
            'template_jldzpwk',
            e.target, 'rkArMhE9ZKapPd4ND'
        ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };
    return (
        <div className='bg-'>







            <div className="max-w-screen-xl mx-auto sm:pt-3 md:pt-2 lg:px-8 ">
                <div className=" max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className=" px-6 md:py-4 lg:flex-shrink-1 ">

                        <form className="min-w-md p-10 m-auto " onSubmit={sendEmail}>

                            <h3 className="text-2xl md:text-3xl leading-8 font-extrabold text-gray-900 sm:leading-9 sm: pb-2 text-center">
                                Reach out, I&apos;d love to hear from you!
                            </h3>


                            <div className="mb-2">
                                <div className="  ">
                                    <label>Name</label>
                                    <input type="text" name='name' className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-grotto focus:border-transparent" placeholder="Name" />
                                </div>
                            </div>

                            <div className="mb-2">
                                <div className=" ">
                                    <label>Email</label>
                                    <input type="email" name='user_email'
                                        id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-grotto focus:border-transparent" placeholder="Email" />
                                </div>
                            </div>


                            <div className="mb-2">
                                <div className="  ">
                                    <label>Message</label>
                                    <textarea className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-grotto focus:border-transparent"

                                        placeholder='Message'

                                        name="message" rows={8} cols={38} />

                                    <input type="submit" value='Send' id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 hover:bg-prim hover:text-white focus:ring-grotto focus:border-transparent" />
                                </div>
                                <div className="mb-2">
                                    {result ? <Result /> : null}
                                </div>
                            </div>

                        </form>
                    </div>



                    <div className="pb-10 md:pb-0 py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg lg:text-2xl font-bold text-gray-900 ">
                            Let's connect on Linkedin
                        </p>
                        <div className=" flex items-center justify-center text-md leading-5 text-gray-900 ">
                            <span className='max-w-xs'>
                                If you want to follow along with more of my daily activies give me a follow on Instagram!
                            </span>
                        </div>

                        <p className="mt-4 text-sm  ">
                            <span className="pb-10 md:pb-0 font-medium text-gray-900 sm:mt-0 md:mt-0 flex-1 flex items-center justify-center ">

                                <a className="ml-4 hover:text-primary-gray-20" href="https://www.instagram.com/vanessasibley_/">
                                    <span className="sr-only">
                                        Instagram
                                    </span>
                                    <span className="text-4xl hover:text-prim transition-colors duration-200">
                                        < FaInstagram />
                                    </span>
                                </a>

                                <a className="ml-4 hover:text-primary-gray-20" href="https://www.linkedin.com/in/vanessa-sibley/">
                                    <span className="sr-only">
                                        Instagram
                                    </span>
                                    <span className="text-4xl hover:text-prim transition-colors duration-200">
                                        <AiOutlineLinkedin />
                                    </span>
                                </a>




                            </span>
                        </p>

                    </div>
                </div>
            </div>








        </div>
    )
}

export default Contact