import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import config from '@config/constants';

const { COMPANY_DETAILS, SOCIAL_ADDRESS, SCREEN_TEXTS } = config;

const Footer: React.FC = () => {
    const SOCIAL_ICONS = [
        {
            name: 'twitter',
            icon: (
                <svg
                    className="mr-5"
                    width="42"
                    height="45"
                    viewBox="0 0 42 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d)">
                        <path
                            d="M21 33.3334C24.5362 33.3334 27.9276 31.9286 30.4281 29.4281C32.9286 26.9276 34.3333 23.5363 34.3333 20C34.3333 16.4638 32.9286 13.0724 30.4281 10.572C27.9276 8.07147 24.5362 6.66671 21 6.66671C17.4638 6.66671 14.0724 8.07147 11.5719 10.572C9.0714 13.0724 7.66665 16.4638 7.66665 20C7.66665 23.5363 9.0714 26.9276 11.5719 29.4281C14.0724 31.9286 17.4638 33.3334 21 33.3334ZM21 36.6667C11.795 36.6667 4.33331 29.205 4.33331 20C4.33331 10.795 11.795 3.33337 21 3.33337C30.205 3.33337 37.6666 10.795 37.6666 20C37.6666 29.205 30.205 36.6667 21 36.6667Z"
                            fill="black"
                        />
                        <path
                            d="M29.3334 14.9117C28.72 15.1784 28.0617 15.3617 27.37 15.4417C28.0767 15.0251 28.6167 14.3651 28.8734 13.5801C28.2 13.9725 27.4652 14.2486 26.7 14.3967C26.3781 14.0593 25.9909 13.7911 25.562 13.6083C25.133 13.4254 24.6713 13.3319 24.205 13.3334C22.3167 13.3334 20.7867 14.8417 20.7867 16.7001C20.7867 16.9634 20.8167 17.2201 20.875 17.4667C19.5206 17.4024 18.1944 17.0565 16.9811 16.451C15.7678 15.8455 14.6941 14.9937 13.8284 13.9501C13.5243 14.4619 13.3642 15.0464 13.365 15.6417C13.365 16.8084 13.97 17.8417 14.8867 18.4434C14.3441 18.4264 13.8131 18.2819 13.3367 18.0217V18.0634C13.3418 18.8458 13.618 19.6023 14.1182 20.204C14.6184 20.8057 15.3117 21.2154 16.08 21.3634C15.5756 21.4968 15.0478 21.5161 14.535 21.4201C14.7586 22.0932 15.1861 22.68 15.7584 23.099C16.3306 23.518 17.0192 23.7485 17.7284 23.7584C16.5116 24.696 15.0178 25.2025 13.4817 25.1984C13.2067 25.1984 12.935 25.1817 12.6667 25.1517C14.2341 26.1439 16.0516 26.6693 17.9067 26.6667C24.1967 26.6667 27.635 21.5367 27.635 17.0867L27.6234 16.6501C28.2938 16.1789 28.8732 15.5899 29.3334 14.9117Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d"
                            x="-3"
                            y="0"
                            width="48"
                            height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                    </defs>
                </svg>
            ),
            link: SOCIAL_ADDRESS.twitter,
        },
        {
            name: 'instagram',
            icon: (
                <svg
                    className="mr-5"
                    width="40"
                    height="44"
                    viewBox="0 0 40 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_d)">
                        <path
                            d="M20 12.5C18.5166 12.5 17.0666 12.9399 15.8332 13.764C14.5999 14.5881 13.6386 15.7594 13.0709 17.1299C12.5032 18.5003 12.3547 20.0083 12.6441 21.4632C12.9335 22.918 13.6478 24.2544 14.6967 25.3033C15.7456 26.3522 17.082 27.0665 18.5368 27.3559C19.9917 27.6453 21.4997 27.4968 22.8701 26.9291C24.2406 26.3614 25.4119 25.4001 26.236 24.1668C27.0601 22.9334 27.5 21.4834 27.5 20C27.4978 18.0116 26.7069 16.1052 25.3008 14.6992C23.8948 13.2931 21.9884 12.5022 20 12.5ZM20 25C19.0111 25 18.0444 24.7068 17.2221 24.1573C16.3999 23.6079 15.759 22.827 15.3806 21.9134C15.0022 20.9998 14.9031 19.9945 15.0961 19.0245C15.289 18.0546 15.7652 17.1637 16.4645 16.4645C17.1637 15.7652 18.0546 15.289 19.0245 15.0961C19.9945 14.9031 20.9998 15.0022 21.9134 15.3806C22.827 15.759 23.6079 16.3999 24.1573 17.2221C24.7068 18.0444 25 19.0111 25 20C24.9985 21.3256 24.4712 22.5965 23.5339 23.5339C22.5965 24.4712 21.3256 24.9985 20 25ZM26.875 4.375H13.125C10.8052 4.37765 8.58111 5.30037 6.94074 6.94074C5.30037 8.58111 4.37765 10.8052 4.375 13.125V26.875C4.37765 29.1948 5.30037 31.4189 6.94074 33.0593C8.58111 34.6996 10.8052 35.6224 13.125 35.625H26.875C29.1948 35.6224 31.4189 34.6996 33.0593 33.0593C34.6996 31.4189 35.6224 29.1948 35.625 26.875V13.125C35.6224 10.8052 34.6996 8.58111 33.0593 6.94074C31.4189 5.30037 29.1948 4.37765 26.875 4.375ZM33.125 26.875C33.1231 28.532 32.4641 30.1207 31.2924 31.2924C30.1207 32.4641 28.532 33.1231 26.875 33.125H13.125C11.468 33.1231 9.87934 32.4641 8.70764 31.2924C7.53594 30.1207 6.87686 28.532 6.875 26.875V13.125C6.87686 11.468 7.53594 9.87934 8.70764 8.70764C9.87934 7.53594 11.468 6.87686 13.125 6.875H26.875C28.532 6.87686 30.1207 7.53594 31.2924 8.70764C32.4641 9.87934 33.1231 11.468 33.125 13.125V26.875ZM30 11.875C30 12.2458 29.89 12.6084 29.684 12.9167C29.478 13.225 29.1851 13.4654 28.8425 13.6073C28.4999 13.7492 28.1229 13.7863 27.7592 13.714C27.3955 13.6416 27.0614 13.463 26.7992 13.2008C26.537 12.9386 26.3584 12.6045 26.286 12.2408C26.2137 11.8771 26.2508 11.5001 26.3927 11.1575C26.5346 10.8149 26.775 10.522 27.0833 10.316C27.3916 10.11 27.7542 10 28.125 10C28.6223 10 29.0992 10.1975 29.4508 10.5492C29.8025 10.9008 30 11.3777 30 11.875Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d"
                            x="-4"
                            y="0"
                            width="48"
                            height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                    </defs>
                </svg>
            ),
            link: SOCIAL_ADDRESS.instagram,
        },
        {
            name: 'facebook',
            icon: (
                <svg width="42" height="45" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <path
                            d="M18.825 14.895V17.19H17.145V19.995H18.825V28.3333H22.2784V19.995H24.595C24.595 19.995 24.8134 18.65 24.9184 17.1783H22.2917V15.2616C22.2917 14.9733 22.6684 14.5883 23.0417 14.5883H24.9217V11.6666H22.3634C18.74 11.6666 18.825 14.475 18.825 14.895Z"
                            fill="black"
                        />
                        <path
                            d="M21 33.3334C24.5362 33.3334 27.9276 31.9286 30.4281 29.4281C32.9286 26.9276 34.3333 23.5363 34.3333 20C34.3333 16.4638 32.9286 13.0724 30.4281 10.572C27.9276 8.07147 24.5362 6.66671 21 6.66671C17.4638 6.66671 14.0724 8.07147 11.5719 10.572C9.0714 13.0724 7.66665 16.4638 7.66665 20C7.66665 23.5363 9.0714 26.9276 11.5719 29.4281C14.0724 31.9286 17.4638 33.3334 21 33.3334ZM21 36.6667C11.795 36.6667 4.33331 29.205 4.33331 20C4.33331 10.795 11.795 3.33337 21 3.33337C30.205 3.33337 37.6666 10.795 37.6666 20C37.6666 29.205 30.205 36.6667 21 36.6667Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d"
                            x="-3"
                            y="0"
                            width="48"
                            height="48"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                    </defs>
                </svg>
            ),
            link: SOCIAL_ADDRESS.facebook,
        },
    ];
    return (
        <section id="contact" className="flex w-screen justify-center items-center px-8 min-h-[30vh] bg-infinity-hero">
            <div className="flex flex-col md:flex-row justify-around w-full items-start py-9">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">{SCREEN_TEXTS.infinityTitle}</h2>
                </div>
                <div className="flex flex-col justify-center items-center w-72 mb-4">
                    <h2 className="text-xl font-semibold w-full md:text-center pb-3">{SCREEN_TEXTS.aboutTitle}</h2>
                    <p>{COMPANY_DETAILS.about}</p>
                </div>
                <div className="flex flex-col justify-center items-center w-72 mb-4">
                    <h2 className="text-xl font-semibold text-left w-full md:text-center pb-3">
                        {SCREEN_TEXTS.contactTitle}
                    </h2>
                    <p>{COMPANY_DETAILS.address} </p>
                    <p className="text-left w-full mt-2 text-xl">{COMPANY_DETAILS.phone}</p>
                    <div className="flex justify-start w-full mt-2">
                        {SOCIAL_ICONS.map(({ icon, link, name }) => (
                            <Link href={link} passHref key={name}>
                                <a target="_blank" rel="noopener noreferrer">
                                    {icon}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
