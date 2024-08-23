import React from 'react';
import './Banner.css'

function Header({children}: { children: React.ReactNode }) {
    return (
        <header>{children}</header>
    );
}

export default Header;
