import React from 'react';
import PageHead from '@/common/components/PageHead';
import Layout from '@/layout/index';
import HomeSection from '@/pageComponents/home/HomeSection';
import constants from '@/pageComponents/home/constants';

const { PAGE_HEAD } = constants;

const Home: React.FC = () => {
    return (
        <div className="font-primary">
            <PageHead title={PAGE_HEAD.homeTitle} />
            <Layout>
                <HomeSection />
            </Layout>
        </div>
    );
};

export default Home;
