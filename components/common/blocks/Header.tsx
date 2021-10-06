import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavContent from './NavContent';

const Header: React.FC = () => {
    return (
        <nav className="flex items-center justify-between py-1 px-8 w-screen h-20 sticky top-0 bg-white">
            <Link href="/" passHref>
                <Image
                    className="cursor-pointer"
                    src={'/assets/images/logo.png'}
                    width={63}
                    height={35}
                    alt="infinity logo"
                />
            </Link>

            <NavContent />
        </nav>
    );
};

export default Header;
