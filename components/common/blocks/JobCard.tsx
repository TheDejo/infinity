import React, { useState } from 'react';
import Modal from '@/common/components/Modal';
import Button from '@/common/components/Button';
import { useRouter } from 'next/router';

interface IProps {
    title: string;
    company: string;
    type: string[];
    location: string;
    description: string;
    skills: string[];
    id: string;
}

const JobCard: React.FC<IProps> = (job: IProps) => {
    const { id, title, company, type, location, description, skills } = job;
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const handleModalClose = () => setVisible(false);

    const JOB_DETAILS = [
        {
            title: 'Company',
            value: company,
        },
        {
            title: 'Description',
            value: description,
        },
        {
            title: 'Job Type',
            value: type,
        },
        {
            title: 'Skills',
            value: skills,
        },
        {
            title: 'Location',
            value: location,
        },
    ];

    return (
        <>
            <section className="mx-8">
                <div className="p-8 w-full min-h-[330px] border border-black rounded-3xl flex flex-col mb-8">
                    <div className="flex text-left w-full">
                        <h2 className="font-medium text-2xl" data-testid={title}>
                            {title}
                        </h2>
                    </div>
                    <div className="border border-gray-200 my-4" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {JOB_DETAILS.map(({ title, value }, idx) => (
                            <div className="flex md:flex-row flex-col" key={idx.toString()}>
                                <p className="md:mr-3 mb-3 md:mb-0 w-32 text-darkBlue font-semibold">{title}:</p>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border border-gray-200 my-4" />
                    <div className="w-full flex md:flex-row flex-col justify-end">
                        <Button onClick={() => setVisible(true)} title="Apply Now" />
                        <Button
                            onClick={() => router.push(id)}
                            title="View Job"
                            color="text-black"
                            background="bg-[#FCF0EC]"
                        />
                    </div>
                </div>
            </section>

            {visible && <Modal handleClose={handleModalClose} />}
        </>
    );
};

export default JobCard;
