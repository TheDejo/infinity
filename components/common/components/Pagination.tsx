import React, { useState } from 'react';

interface IProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<IProps> = ({ postsPerPage, totalPosts, paginate }: IProps) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [active, setActive] = useState({
        activePage: 1,
        pages: pageNumbers.map((items) => items),
    });

    const toggleActive = (index: number) => {
        setActive({ ...active, activePage: active.pages[index] });
    };

    const toggleActiveStyles = (index: number) => {
        if (active.pages[index] === active.activePage) {
            return 'w-[40px] h-[40px] border border-[#c4c4c4] font-semibold rounded-md mr-2 hover:scale-110 text-white bg-black';
        } else {
            return 'w-[40px] h-[40px] border border-[#c4c4c4] font-semibold rounded-md mr-2 hover:scale-110';
        }
    };

    return (
        <div className="w-full flex justify-center items-center">
            {active.pages.map((number, index) => (
                <button
                    className={toggleActiveStyles(index)}
                    key={index}
                    onClick={() => {
                        toggleActive(index);
                        paginate(number);
                    }}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
