
import { getListingLawyers, getUserProfileLaywer } from '@/data/dataFetch';
import React from 'react';
import LawyerDetailsPage from './details';

const page = async ({params}) => {
    const sssparams = await params;
    console.log(sssparams, "params from page");
    const laywer = await getListingLawyers(sssparams.id);
    console.log(laywer, "lawyer from page");
    return (
         <div className="relative max-w-7xl mx-auto px-6 py-28">
            <LawyerDetailsPage lawyer={laywer} />
        </div>
    );
};

export default page;