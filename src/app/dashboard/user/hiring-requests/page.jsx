import React from 'react';
import HiringRequestsPage from './pageContnet';
import { getSession } from '@/lib/user';
import { getHistingRequest } from '@/data/dataFetch';

const page = async () => {
    const user = await getSession();
    const hiringRequest = await getHistingRequest(user.id);
    console.log(hiringRequest, "hiring request from page");
    return (
        <div>
           <HiringRequestsPage user={user} hiringRequests={hiringRequest} />
        </div>
    );
}               

export default page;