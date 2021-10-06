import React, { useState } from 'react';
import JobCard from '@/common/blocks/JobCard';
import Select from '@/common/components/Select';
import Hero from './Hero';
import { useJobContext } from './context/InfinityContext';
import Button from '@/common/components/Button';
import Pagination from '@/common/components/Pagination';

const HomeSection: React.FC = () => {
    const { data, filter } = useJobContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
            return currentPosts.map((job) => <JobCard key={job.id} {...job} />);
        }
        const filterArray = data.filter(
            ({ company, location, skills, title, type }) =>
                matchWords(filter, [company, location, ...skills, title, ...type]).length >= 1,
        );
        if (filterArray.length === 0) {
            return (
                <div className="h-[50vh] w-full px-8 flex flex-col justify-center items-center">
                    <h1 className="mb-10">Oops, no job for that search</h1>
                    <Button
                        title="Return"
                        onClick={() => location.reload()}
                        icon={
                            <svg
                                className="mr-3"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.875 6.87502H4.4625L6.73125 4.15002C6.83734 4.02238 6.88838 3.85783 6.87314 3.69257C6.8579 3.5273 6.77764 3.37486 6.65 3.26877C6.52237 3.16268 6.35781 3.11164 6.19255 3.12688C6.02728 3.14212 5.87484 3.22238 5.76875 3.35002L2.64375 7.10002C2.62273 7.12985 2.60392 7.16118 2.5875 7.19377C2.5875 7.22502 2.5875 7.24377 2.54375 7.27502C2.51542 7.34668 2.50059 7.42296 2.5 7.50002C2.50059 7.57708 2.51542 7.65336 2.54375 7.72502C2.54375 7.75627 2.54375 7.77502 2.5875 7.80627C2.60392 7.83886 2.62273 7.87019 2.64375 7.90002L5.76875 11.65C5.82751 11.7206 5.9011 11.7773 5.98428 11.8162C6.06746 11.8551 6.15818 11.8752 6.25 11.875C6.39603 11.8753 6.53756 11.8244 6.65 11.7313C6.71329 11.6788 6.7656 11.6144 6.80395 11.5416C6.84229 11.4689 6.86591 11.3894 6.87346 11.3075C6.88101 11.2256 6.87233 11.1431 6.84793 11.0646C6.82353 10.9861 6.78388 10.9132 6.73125 10.85L4.4625 8.12502H11.875C12.0408 8.12502 12.1997 8.05917 12.3169 7.94196C12.4342 7.82475 12.5 7.66578 12.5 7.50002C12.5 7.33426 12.4342 7.17529 12.3169 7.05808C12.1997 6.94087 12.0408 6.87502 11.875 6.87502Z"
                                    fill="white"
                                />
                            </svg>
                        }
                    />
                </div>
            );
        }
        return filterArray.map((job) => <JobCard key={job.id} {...job} />);
    };
    const unique = (value: string, index: number, self: string[]) => {
        const getIndex = (element: string) => element === value;
        return self.findIndex(getIndex) === index;
    };

    // (value: string, index: number, obj: string[]) => unknown

    const SELECT_FILTER = [
        {
            title: 'Company',
            options: data
                .map(({ company }) => company)
                .filter(unique)
                .map((_company) => ({ value: _company, name: _company })),
        },
        {
            title: 'Title',
            options: data
                .map(({ title }) => title)
                .filter(unique)
                .map((_title) => ({ value: _title, name: _title })),
        },
        {
            title: 'Skills',
            options: data
                .map(({ skills }) => skills)
                .flat(1)
                .filter(unique)
                .map((_skills) => ({ value: _skills, name: _skills })),
        },
        {
            title: 'Job Type',
            options: data
                .map(({ type }) => type)
                .flat(1)
                .filter(unique)
                .map((_type) => ({ value: _type, name: _type })),
        },
        {
            title: 'Location',
            options: data
                .map(({ location }) => location)
                .filter(unique)
                .map((_location) => ({ value: _location, name: _location })),
        },
    ];

    return (
        <section data-testid="home-section">
            <Hero />
            <div className="py-8">
                <div className="px-8">
                    <h1 className="font-medium">Filter</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-6">
                        {SELECT_FILTER.map(({ title, options }, idx) => (
                            <Select key={idx.toString()} title={title} data={options} />
                        ))}
                    </div>
                </div>
                <div className="border border-gray-200 my-4" />
                {renderJobs()}
                {!filter && <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />}
            </div>
        </section>
    );
};

export default HomeSection;
