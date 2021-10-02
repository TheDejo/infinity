import React, { createContext, useContext } from 'react';
import data from '@data';

interface IJobContext {
    data: typeof data.JOBS_DATA;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const initialState = {
    data: data.JOBS_DATA,
    filter: '',
    setFilter: () => {},
};

const JobsContext = createContext<IJobContext>(initialState);
export const useJobContext: () => IJobContext = () => useContext(JobsContext);

export default JobsContext;
