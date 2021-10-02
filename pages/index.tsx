import React, { useState } from 'react';
import PageHead from '@/common/components/PageHead';
import Layout from '@/layout/index';
import HomeSection from '@/pageComponents/home/HomeSection';
import constants from '@/pageComponents/home/constants';
import JobsContext from '@/pageComponents/home/context/InfinityContext';
import data from '@data';

const { PAGE_HEAD } = constants;

const Home: React.FC = () => {
    const [filter, setFilter] = useState('');

    return (
        <JobsContext.Provider value={{ data: data.JOBS_DATA, filter, setFilter }}>
            <div className="font-primary">
                <PageHead title={PAGE_HEAD.homeTitle} />
                <Layout>
                    <HomeSection />
                </Layout>
            </div>
        </JobsContext.Provider>
    );
};

export default Home;
