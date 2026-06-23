import { getPaymentHistoryLawyer, getUserProfileLaywer } from '@/data/dataFetch';
import { getSession } from '@/lib/user';
import React from 'react';
import LawyerPaymentsPage from './paymentContent';
import PaymentContent from './paymentContent';

const page = async() => {
    const user = await getSession();
    const lawyerProfile = await getUserProfileLaywer(user.id);
    //console.log('laywer oriuke', lawyerProfile);
    const get_payments = await getPaymentHistoryLawyer(lawyerProfile._id);

    //console.log(get_payments);
    return (
        <div>
   
            <PaymentContent payments={get_payments} />
        </div>
    );
};

export default page;