import UpdateFormNew from '@/componenet/user/newUpdateUser';
import UpdateForm from '@/componenet/user/updateUser';
import UserStats from '@/componenet/user/UserStats';
import { getHistingRequest } from '@/data/dataFetch';
import { auth } from '@/lib/auth';
import { getSession } from '@/lib/user';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const page = async() => {
      const session = await auth.api.getSession ({
            headers: await headers()
        })
           const hiringRequest = await getHistingRequest(session?.user?.id);
        if(session) {
               return (
          <div className=''>
            <div className=''>
        
               <UserStats hiringRequests={hiringRequest} />
                <UpdateFormNew user={session?.user} />
            </div>
          </div>
    );
    
        }
   
};

export default page;