import LawyerOverviewContent from '@/componenet/laywer/OverViewDash';
import { gertHistingHirtoryLawyer, getPaymentHistoryLawyer, getUserProfileLaywer } from '@/data/dataFetch';
import { getSession } from '@/lib/user';
import React from 'react';

const page = async() => {
          const user = await getSession();
            const lawyerProfile = await getUserProfileLaywer(user.id);
            //console.log('laywer oriuke', lawyerProfile);
            const get_payments = await getPaymentHistoryLawyer(lawyerProfile._id)
            const hiringHistory = await gertHistingHirtoryLawyer(user.id);
    return (
        <div>
          
            <LawyerOverviewContent  lawyerProfile = {lawyerProfile} hiringHistory={hiringHistory} payments={get_payments} />
        </div>
    );
};

export default page;