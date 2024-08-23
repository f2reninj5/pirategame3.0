import React from 'react';
import './Banner.css'

function Footer({children}: { children: React.ReactNode }) {
    return (
        <footer>{children}</footer>
    );
}

export default Footer;
