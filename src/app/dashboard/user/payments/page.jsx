import { getHistingRequest } from '@/data/dataFetch';
import { getSession } from '@/lib/user';
import React from 'react';
import UserPaymentsContent from './pageCompoment';

const page = async() => {
      const user = await getSession();
        const hiringRequest = await getHistingRequest(user.id);
    return (
        <div>
            <UserPaymentsContent payments={hiringRequest} />
        </div>
    );
};

export default page;