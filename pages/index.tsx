import React from 'react';
import Layout from '../components/layout';
import HomeSection from '../components/pageComponents/home/HomeSection';

const Home: React.FC = () => {
    return (
        <div className="font-primary">
            <Layout>
                <HomeSection />
            </Layout>
        </div>
    );
};

export default Home;
