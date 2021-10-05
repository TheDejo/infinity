import React from 'react';

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

    return (
        <div className="w-full flex justify-center items-center">
            {pageNumbers.map((number) => (
                <button
                    className="w-[40px] h-[40px] border border-[#c4c4c4] font-semibold rounded-md mr-2 hover:scale-110"
                    key={number}
                    onClick={() => paginate(number)}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
