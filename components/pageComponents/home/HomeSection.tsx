import React from 'react';
import JobCard from '@/common/blocks/JobCard';
import Select from '@/common/components/Select';
import Hero from './Hero';

const HomeSection: React.FC = () => {
    const BUTTONS = [
        {
            title: 'Company',
            key: 'company' as const,
            options: [],
        },
        {
            title: 'Title',
            key: 'title' as const,
            options: [],
        },
        {
            title: 'Skills',
            key: 'company' as const,
            options: [],
        },
        {
            title: 'Job Type',
            key: 'jobType' as const,
            options: [],
        },
        {
            title: 'Location',
            key: 'location' as const,
            options: [
                {
                    name: 'Yes',
                    value: 'Yes',
                },
                {
                    name: 'No',
                    value: 'No',
                },
            ],
        },
    ];

    return (
        <div>
            <Hero />
            <section className="p-8">
                <h1 className="font-medium">Filter</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-6">
                    {BUTTONS.map(({ title, key, options }) => (
                        <Select key={key} title={title} data={options} />
                    ))}
                </div>
                <div className="border border-gray-200 my-4" />
                <JobCard />
            </section>
        </div>
    );
};

export default HomeSection;
