import React, { useState } from 'react';
import Button from '../components/Button';
import Notification from '../components/notification';

const JobCard: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const handleNotification = () => setVisible(true);

    const JOB_DETAILS = [
        {
            title: 'Company',
            value: 'hello',
        },
        {
            title: 'Description',
            value: 'hello',
        },
        {
            title: 'Jobtype',
            value: 'hello',
        },
        {
            title: 'Skill',
            value: 'hello',
        },
        {
            title: 'Location',
            value: 'hello',
        },
    ];

    const BUTTON = [
        {
            title: 'Apply Now',
            onClick: () => {},
            style: 'px-6 py-2 mb-3 md:mb-0 text-white bg-[#444444] mr-2 rounded-3xl',
        },
        {
            title: 'View Job',
            onClick: () => {},
            style: 'px-6 py-2  text-black bg-[#fcf0ec] rounded-3xl',
        },
    ];

    return (
        <>
            <div className="p-8 w-full min-h-[330px] border border-black rounded-3xl flex flex-col">
                <div className="flex text-left w-full">
                    <h2 className="font-medium text-2xl">Job Title</h2>
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
                    {BUTTON.map(({ title, onClick, style }, idx) => (
                        <button key={idx.toString()} onClick={onClick} className={style}>
                            {title}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};

export default JobCard;
