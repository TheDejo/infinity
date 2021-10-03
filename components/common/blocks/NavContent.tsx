import React, { useState } from 'react';
import Link from 'next/link';

const NavContent: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const toggle = () => setVisible((prev) => !prev);

    const NAV_ITEMS = [
        {
            title: 'About Us',
            onClick: () => {},
        },
        {
            title: 'Contact',
            onClick: () => {},
        },
    ];

    console.log(visible);

    return (
        <>
            <button onClick={toggle} className="hover:scale-110 md:hidden">
                {visible ? (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.5667 20L30.7778 10.7889C30.9598 10.5763 31.055 10.3029 31.0441 10.0233C31.0333 9.74363 30.9174 9.47836 30.7195 9.28048C30.5217 9.0826 30.2564 8.96667 29.9768 8.95587C29.6971 8.94507 29.4237 9.04019 29.2111 9.22222L20 18.4333L10.7889 9.21111C10.5797 9.00188 10.2959 8.88434 10 8.88434C9.70413 8.88434 9.42036 9.00188 9.21114 9.21111C9.00191 9.42033 8.88437 9.70411 8.88437 10C8.88437 10.2959 9.00191 10.5797 9.21114 10.7889L18.4334 20L9.21114 29.2111C9.09482 29.3107 9.00036 29.4333 8.93366 29.5711C8.86697 29.709 8.82949 29.8591 8.82358 30.0122C8.81767 30.1652 8.84346 30.3178 8.89932 30.4604C8.95518 30.6029 9.03991 30.7324 9.14819 30.8407C9.25647 30.949 9.38597 31.0337 9.52855 31.0896C9.67114 31.1455 9.82373 31.1712 9.97675 31.1653C10.1298 31.1594 10.2799 31.1219 10.4178 31.0552C10.5556 30.9886 10.6782 30.8941 10.7778 30.7778L20 21.5667L29.2111 30.7778C29.4237 30.9598 29.6971 31.0549 29.9768 31.0441C30.2564 31.0333 30.5217 30.9174 30.7195 30.7195C30.9174 30.5216 31.0333 30.2564 31.0441 29.9767C31.055 29.6971 30.9598 29.4237 30.7778 29.2111L21.5667 20Z"
                            fill="black"
                        />
                    </svg>
                ) : (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 13.75V16.25H36.25V13.75H3.75ZM3.75 23.75V26.25H36.25V23.75H3.75Z" fill="black" />
                    </svg>
                )}
            </button>
            <div
                className={`${
                    visible ? 'translate-x-0' : 'translate-x-full'
                } flex md:flex-row flex-col md:relative fixed md:h-auto h-full md:w-auto w-full justify-center items-center md:bg-white bg-infinity-hero md:top-auto top-20 md:right-auto right-0 md:transition-none md:translate-x-0  transition ease-in-out `}
            >
                {NAV_ITEMS.map(({ title }, idx) => (
                    <Link href="#contact" key={idx.toString()} passHref>
                        <a className="md:mr-5 my-6 md:my-0">{title}</a>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default NavContent;
