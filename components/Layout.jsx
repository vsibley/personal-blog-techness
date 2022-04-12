import React, { Children } from 'react'
import { Header, Nav, Footer } from './';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {/* <Header /> */}
            {children}
            <Footer />
        </>
    )
}

export default Layout