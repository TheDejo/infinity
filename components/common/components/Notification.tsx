import React from 'react';

const Notification: React.FC = () => {
    return (
        <div className="absolute flex justify-center items-center p-4 shadow-infinity border rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z"
                    fill="#4BD37B"
                />
                <path
                    d="M17.25 5.25L9.375 13.35L6.75 10.65L4.125 13.35L9.375 18.75L19.875 7.95L17.25 5.25Z"
                    fill="white"
                />
            </svg>
            <h3>Application Submited</h3>
        </div>
    );
};

export default Notification;
