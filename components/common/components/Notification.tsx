import React from 'react';

interface IProps {
    handleClose: () => void;
}

const Notification: React.FC<IProps> = ({ handleClose }: IProps) => {
    return (
        <div className="fixed top-0 h-screen w-screen bg-white shadow-infinity flex justify-center items-center p-4 border rounded-md">
            <div className="flex flex-col justify-center items-center">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30 58.125C45.533 58.125 58.125 45.533 58.125 30C58.125 14.467 45.533 1.875 30 1.875C14.467 1.875 1.875 14.467 1.875 30C1.875 45.533 14.467 58.125 30 58.125Z"
                        fill="#4BD37B"
                    />
                    <path
                        d="M43.125 13.125L23.4375 33.375L16.875 26.625L10.3125 33.375L23.4375 46.875L49.6875 19.875L43.125 13.125Z"
                        fill="white"
                    />
                </svg>

                <h3>Application Submited</h3>
                <button
                    onClick={handleClose}
                    className="flex justify-between items-center bg-black text-white px-5 py-1 mt-4 rounded-lg"
                >
                    <svg
                        className="mr-3"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.55 1.79999C10.4774 1.72723 10.3912 1.66951 10.2963 1.63012C10.2014 1.59074 10.0996 1.57047 9.99688 1.57047C9.89412 1.57047 9.79237 1.59074 9.69745 1.63012C9.60254 1.66951 9.51633 1.72723 9.44376 1.79999L4.18751 7.05624C4.12957 7.11406 4.0836 7.18274 4.05224 7.25835C4.02087 7.33395 4.00473 7.41501 4.00473 7.49686C4.00473 7.57872 4.02087 7.65977 4.05224 7.73538C4.0836 7.81098 4.12957 7.87966 4.18751 7.93749L9.44376 13.1937C9.75001 13.5 10.2438 13.5 10.55 13.1937C10.8563 12.8875 10.8563 12.3937 10.55 12.0875L5.96251 7.49999L10.5563 2.90624C10.8563 2.59999 10.8563 2.10624 10.55 1.79999V1.79999Z"
                            fill="white"
                        />
                    </svg>
                    Back
                </button>
            </div>
        </div>
    );
};

export default Notification;
