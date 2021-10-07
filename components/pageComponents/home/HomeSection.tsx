import React, { useState } from 'react';
import JobCard from '@/common/blocks/JobCard';
import Select from '@/common/components/Select';
import Hero from './Hero';
import { useJobContext } from './context/InfinityContext';
import Button from '@/common/components/Button';
import Pagination from '@/common/components/Pagination';
import constants from './constants';

const { SCREEN_TEXTS } = constants;

const HomeSection: React.FC = () => {
    const { data, filter } = useJobContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const matchWords = (subject: string, words: string[]) => {
        let regexMetachars = /[(){[*+?.\\^$|]/g;
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].replace(regexMetachars, '\\$&');
        }
        let regex = new RegExp('\\b(?:' + words.join('|') + ')\\b', 'gi');
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
                    <h1 className="mb-7 font-medium text-xl">{SCREEN_TEXTS.noSearchResult}</h1>
                </div>
            );
        }
        return filterArray.map((job) => <JobCard key={job.id} {...job} />);
    };
    const unique = (value: string, index: number, self: string[]) => {
        const getIndex = (element: string) => element === value;
        return self.findIndex(getIndex) === index;
    };

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
                    {filter && (
                        <div className="w-full flex justify-center">
                            <Button
                                title="Clear Filter"
                                onClick={() => location.reload()}
                                background="bg-[#EE6A6A]"
                                icon={
                                    <svg
                                        className="mr-3"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 1.25C5.16797 1.25 1.25 5.16797 1.25 10C1.25 14.832 5.16797 18.75 10 18.75C14.832 18.75 18.75 14.832 18.75 10C18.75 5.16797 14.832 1.25 10 1.25ZM13.2305 13.3242L11.9414 13.3184L10 11.0039L8.06055 13.3164L6.76953 13.3223C6.68359 13.3223 6.61328 13.2539 6.61328 13.166C6.61328 13.1289 6.62695 13.0938 6.65039 13.0645L9.19141 10.0371L6.65039 7.01172C6.62679 6.98309 6.61369 6.94725 6.61328 6.91016C6.61328 6.82422 6.68359 6.75391 6.76953 6.75391L8.06055 6.75977L10 9.07422L11.9395 6.76172L13.2285 6.75586C13.3145 6.75586 13.3848 6.82422 13.3848 6.91211C13.3848 6.94922 13.3711 6.98438 13.3477 7.01367L10.8105 10.0391L13.3496 13.0664C13.373 13.0957 13.3867 13.1309 13.3867 13.168C13.3867 13.2539 13.3164 13.3242 13.2305 13.3242Z"
                                            fill="white"
                                        />
                                    </svg>
                                }
                            />
                        </div>
                    )}
                </div>
                <div className="border border-gray-200 my-4" />
                {renderJobs()}
                {!filter && <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />}
            </div>
        </section>
    );
};

export default HomeSection;
