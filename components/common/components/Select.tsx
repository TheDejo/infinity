import React from 'react';

interface IProps {
    data:
        | {
              name: string;
              value: string | number;
          }[]
        | [];
    title: string;
}

const Select: React.FC<IProps> = (props: IProps) => {
    const { data, title } = props;
    return (
        <select className="bg-black text-white text-sm py-3 px-4 flex justify-center items-center rounded-lg shadow-infinity outline-none border-none">
            <option value="" disabled selected>
                {title}
            </option>
            {data?.map(({ name, value }, idx) => (
                <option onClick={() => {}} key={idx.toString()} value={value}>
                    {name}
                </option>
            ))}
        </select>
    );
};

export default Select;
