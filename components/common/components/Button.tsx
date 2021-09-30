import React from 'react';

interface IProps {
    title: string;
    icon?: JSX.Element;
}

const Button: React.FC<IProps> = ({ title, icon }: IProps) => {
    return (
        <button className="bg-black text-sm text-white px-4 py-3 flex justify-center items-center rounded-lg shadow-infinity outline-none border-none mr-3">
            <p className="mr-3">{title}</p>
            {icon}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.84581 3.71668L2.21625 4.34624L7.685 9.81499L7.99956 10.1156L8.31412 9.81499L13.7829 4.34624L13.1537 3.71712L8 8.87087L2.84581 3.71668Z"
                        fill="white"
                    />
                </svg>
            </svg>
        </button>
    );
};

Button.defaultProps = {
    icon: undefined,
};

export default Button;
