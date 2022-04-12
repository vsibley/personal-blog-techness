import React, { Children } from 'react'
import { Header, Nav } from './';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {/* <Header /> */}
            {children}
        </>
    )
}

export default Layout