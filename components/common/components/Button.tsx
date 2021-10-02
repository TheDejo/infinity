import React from 'react';

interface IProps {
    title: string;
    color?: string;
    background?: string;
    icon?: JSX.Element;
    onClick: () => void;
}

const Button: React.FC<IProps> = ({ color, background, icon, title, onClick }: IProps) => {
    return (
        <button
            className={`px-6 py-2 mb-3 md:mb-0 mr-2 rounded-3xl hover:scale-110	flex justify-center items-center ${color} ${background}`}
            onClick={onClick}
        >
            {icon}
            {title}
        </button>
    );
};

Button.defaultProps = {
    icon: undefined,
    background: 'bg-black',
    color: 'text-white',
};

export default Button;
