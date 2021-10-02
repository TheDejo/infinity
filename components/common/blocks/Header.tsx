import React, { useState } from 'react';
import Image from 'next/image';
import NavContent from './NavContent';

const Header: React.FC = () => {
    return (
        <nav className="flex items-center justify-between py-1 px-8 w-screen h-20 sticky top-0 bg-white">
            <Image src={'/assets/images/logo.png'} width={63} height={35} alt="infinity logo" />
            <NavContent />
        </nav>
    );
};

export default Header;
