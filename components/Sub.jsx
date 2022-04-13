import React, { useState } from 'react'
import emailjs from '@emailjs/browser';


const Result = () => {
    return (
        <h3 className='sm:text-center '>Your subscription was successfull!</h3>
    )
}

const Subscribe = (props) => {


    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_auvzot8', 'template_4vgiuy1', e.target, 'rkArMhE9ZKapPd4ND')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
            );
        e.target.reset();
        showResult(true);
    };


    return (
        <div className='max-w-7xl'>



            <div className="rounded-lg p-2 pt-8 mb-5 px-5">
                <h2 className="text-xl md:text-2xl leading-8 font-extrabold tracking-tight sm:leading-9">
                    Want to know when I publish a new article?
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-500">
                    Drop your email below and I&apos;ll let you know when I share new content.
                </p>

                <div className="sm:w-full sm:max-w-md xl:mt-0">

                    <form className="flex w-full space-x-3 " onSubmit={sendEmail}>

                        <div className=" w-full max-w-2xl mt-5">

                            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                                <div className="col-span-2 lg:col-span-1">
                                    <input type="text" name='name' className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-grotto focus:border-transparent" placeholder="Name" />

                                </div>
                                <div className="col-span-2 lg:col-span-1">
                                    <input type="email" name='user_email' className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-grotto focus:border-transparent" placeholder="Email" />

                                </div>

                                <div className="col-span-2 text-right">
                                    <input type="submit" value='Subscribe' className="py-2 px-4 bg-logoblue hover:bg-transparent hover:text-black hover:border hover:border-gray-800  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-grotto focus:border-transparent" />
                                </div>
                                <div className="text-center col-span-2 text-xl font-semibold">
                                    {result ? <Result /> : null}
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>


    )
}

export default Subscribe