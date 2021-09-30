import React from 'react';
import Layout from '../components/layout';
import JobCard from '../components/common/blocks/JobCard';
import Notification from '../components/common/components/notification';

const Slug = () => {
    return (
        <section className="p-8">
            <Layout>
                <JobCard />
                <Notification />
            </Layout>
        </section>
    );
};

export default Slug;
