import React, { useState } from 'react';
import { useJobContext } from '@/pageComponents/home/context/InfinityContext';

interface IProps {
    data: {
        name: string;
        value: string | number;
    }[];
    title: string;
}

const Select: React.FC<IProps> = (props: IProps) => {
    const { setFilter } = useJobContext();
    const { data: selectOptions, title } = props;

    return (
        <div className="bg-black text-sm py-3 px-4 flex justify-center items-center rounded-lg shadow-infinity outline-none border-none">
            <select
                onChange={(e) => setFilter(e.target.value)}
                className="bg-black text-white w-full after:border-none"
            >
                <option value="" disabled selected>
                    {title}
                </option>
                {selectOptions?.map(({ name, value }, idx) => (
                    <option key={idx.toString()} value={value}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
