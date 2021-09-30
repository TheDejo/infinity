import React from 'react';
import Image from 'next/image';
import constants from './constants';

const { SCREEN_TEXTS } = constants;
const Hero: React.FC = () => {
    return (
        <section className="lg:px-8">
            <div className="p-8 bg-infinity-hero lg:rounded-[30px] flex justify-center items-center min-h-[30vh]">
                <div className="mr-6">
                    <h1 className="xl:w-[30rem] font-semibold text-2xl md:text-3xl lg:text-6xl mb-3">
                        {SCREEN_TEXTS.heroHeading}
                    </h1>
                    <p className="md:w-[30rem] font-normal text-sm md:text-base lg:text-xl">
                        {SCREEN_TEXTS.heroSubHead}
                    </p>
                    <form className="flex flex-col md:flex-row mt-6 justify-start w-full">
                        <input
                            type="text"
                            placeholder={SCREEN_TEXTS.searchPlaceHolder}
                            name="search"
                            className="rounded-lg  w-full md:w-72 xl:w-96 pl-6 py-2  placeholder-gray-600"
                        />
                        <button className="hidden md:flex justify-center items-center text-white text-lg rounded-lg bg-[#F3A494] px-5  shadow-infinity ml-2">
                            Find Jobs
                        </button>
                    </form>
                </div>
                <figure className="hidden md:flex">
                    <Image src={'/assets/images/hero.png'} width={478} height={438} alt="hero image" />
                </figure>
            </div>
        </section>
    );
};

export default Hero;
