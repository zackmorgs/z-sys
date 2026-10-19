import React from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div id="layout" className="relative">
            <NavMenu />
            <main id="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}