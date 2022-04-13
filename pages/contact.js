import React from 'react'
import { Footer, Nav } from '../components'
import Contact from '../components/Contact'


export default function contact() {
    return (
        <div className="max-w-7xl mx-auto">
            <Nav />
            <Contact />
            <div className='md:fixed bottom-0 right-0 left-0'>
                <Footer />
            </div>
        </div>
    )
}