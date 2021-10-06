import React from 'react';
import Footer from '@/common/blocks/Footer';
import Header from '@/common/blocks/Header';

interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: IProps) => {
    return (
        <>
            <Header />
            <div className="my-6">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
