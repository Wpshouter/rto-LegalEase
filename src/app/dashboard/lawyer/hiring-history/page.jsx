import { gertHistingHirtoryLawyer } from '@/data/dataFetch';
import { getSession } from '@/lib/user';
import React from 'react';
import LawyerRequestsPage from './pageContent';

const page = async () => {
    const user = await getSession();
   // console.log(user, "user from hiring history page");
    const hiringHistory = await gertHistingHirtoryLawyer(user.id);
   // console.log(hiringHistory, "hiring history from page");
    
    return (
        <div>
            <LawyerRequestsPage user={user} requests={hiringHistory} />
        </div>
    );
};

export default page;