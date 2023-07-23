import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const MasterLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
};

export default MasterLayout;