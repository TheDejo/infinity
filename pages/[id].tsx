import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Modal from '@/common/components/Modal';
import { useRouter } from 'next/router';
import Button from '@/common/components/Button';
import data from '@data';

type Job = {
    title: string;
    company: string;
    type: string[];
    location: string;
    description: string;
    skills: string[];
    id: string;
};

const Slug = () => {
    const [visible, setVisible] = useState(false);
    const [singleJob, setSingleJob] = useState<Job | undefined>(undefined);
    const handleModalClose = () => setVisible(false);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const job = data.JOBS_DATA.find((job) => job.id === id);
        setSingleJob(job);
    }, [id]);

    const JOB_DETAILS = [
        {
            title: 'Company',
            value: singleJob?.company,
        },
        {
            title: 'Description',
            value: singleJob?.description,
        },
        {
            title: 'Job Type',
            value: singleJob?.type,
        },
        {
            title: 'Skills',
            value: singleJob?.skills,
        },
        {
            title: 'Location',
            value: singleJob?.location,
        },
    ];

    return (
        <Layout>
            <div className="p-8 w-full min-h-[70vh] flex flex-col justify-center mb-8">
                <div className="flex text-left w-full">
                    <h2 className="font-medium text-2xl">{singleJob?.title}</h2>
                </div>
                <div className="grid grid-cols-1 gap-5 my-12">
                    {JOB_DETAILS.map(({ title, value }, idx) => (
                        <div className="flex md:flex-row flex-col" key={idx.toString()}>
                            <p className="md:mr-3 mb-3 md:mb-0 w-32 text-darkBlue font-semibold">{title}:</p>
                            <p>{value}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full flex md:flex-row flex-col justify-start">
                    <Button onClick={() => setVisible(true)} title="Apply Now" />
                    <Button
                        onClick={() => router.back()}
                        title="Back"
                        color="text-black"
                        background="bg-[#FCF0EC]"
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
                                    fill="black"
                                />
                            </svg>
                        }
                    />
                </div>
            </div>
            {visible && <Modal handleClose={handleModalClose} />}
        </Layout>
    );
};

export default Slug;
