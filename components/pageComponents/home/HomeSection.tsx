import React from 'react';
import JobCard from '@/common/blocks/JobCard';
import Select from '@/common/components/Select';
import Hero from './Hero';
import { useJobContext } from './context/InfinityContext';

const HomeSection: React.FC = () => {
    const { data, filter } = useJobContext();

    const matchWords = (subject: string, words: string[]) => {
        var regexMetachars = /[(){[*+?.\\^$|]/g;
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].replace(regexMetachars, '\\$&');
        }
        var regex = new RegExp('\\b(?:' + words.join('|') + ')\\b', 'gi');
        return subject.match(regex) || [];
    };

    const renderJobs = () => {
        if (!filter) {
            return data.map(({ company, id, location, skills, title, type, description }) => (
                <JobCard
                    key={id}
                    title={title}
                    company={company}
                    jobType={type}
                    skills={skills}
                    location={location}
                    description={description}
                />
            ));
        }
        const filterArray = data.filter(
            ({ company, location, skills, title, type }) =>
                matchWords(filter, [company, location, ...skills, title, ...type]).length >= 1,
        );
        if (filterArray.length === 0) {
            return <h1>Hello from zero</h1>;
        }
        return filterArray.map(({ company, id, location, skills, title, type, description }) => (
            <JobCard
                key={id}
                title={title}
                company={company}
                jobType={type}
                skills={skills}
                location={location}
                description={description}
            />
        ));
    };

    const BUTTONS = [
        {
            title: 'Company',
            key: 'company' as const,
            options: data.map(({ company }) => ({ value: company, name: company })),
        },
        {
            title: 'Title',
            key: 'title' as const,
            options: data.map(({ title }) => ({ value: title, name: title })),
        },
        {
            title: 'Skills',
            key: 'company' as const,
            options: data.map(({ skills }) => skills.map((_skills) => ({ value: _skills, name: _skills }))).flat(1),
        },
        {
            title: 'Job Type',
            key: 'jobType' as const,
            options: data.map(({ type }) => type.map((_type) => ({ value: _type, name: _type }))).flat(1),
        },
        {
            title: 'Location',
            key: 'location' as const,
            options: data.map(({ location }) => ({ value: location, name: location })),
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
            </section>
            {renderJobs()}
        </div>
    );
};

export default HomeSection;
