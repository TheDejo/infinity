import React, { ComponentFactory, useState } from 'react';
import Notification from '@/common/components/Notification';
import Button from '@/common/components/Button';

interface IProps {
    title: string;
    company: string;
    jobType: string[];
    location: string;
    description: string;
    skills: string[];
}

const JobCard: React.FC<IProps> = ({ title, company, jobType, location, description, skills }: IProps) => {
    const [visible, setVisible] = useState(false);

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
            title: 'Jobtype',
            value: jobType.join(', '),
        },
        {
            title: 'Skills',
            value: skills.join(', '),
        },
        {
            title: 'Location',
            value: location,
        },
    ];

    const BUTTONS = [
        {
            title: 'Apply Now',
            onClick: () => setVisible(true),
        },
        {
            title: 'View Job',
            onClick: () => {},
        },
    ];

    return (
        <>
            <div className="p-8 w-full min-h-[330px] border border-black rounded-3xl flex flex-col mb-8">
                <div className="flex text-left w-full">
                    <h2 className="font-medium text-2xl">{title}</h2>
                </div>
                <div className="border border-gray-200 my-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {JOB_DETAILS.map(({ title, value }, idx) => (
                        <div className="flex md:flex-row flex-col" key={idx.toString()}>
                            <p className="md:mr-3 mb-3 md:mb-0 w-32">{title}:</p>
                            <p>{value}</p>
                        </div>
                    ))}
                </div>
                <div className="border border-gray-200 my-4" />
                <div className="w-full flex md:flex-row flex-col justify-end">
                    <Button onClick={() => setVisible(true)} title="Apply Now" />
                    <Button onClick={() => {}} title="View Job" color="text-black" background="bg-[#FCF0EC]" />
                </div>
            </div>
            {visible && <Notification handleClose={handleModalClose} />}
        </>
    );
};

export default JobCard;
