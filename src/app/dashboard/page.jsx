import ChooseRole from '@/componenet/dashboard/ChooseRole';
import { getSession } from '@/lib/user';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async() => {
    const user = await getSession();
    //console.log(user);
    if(!user){
        redirect('/auth/signin');
    }
    if(user.role === 'user'){
     
           return <ChooseRole user={user} />;
    }
    else{
    if(user){
        if(user.role == 'client'){
            redirect('/dashboard/user');
        }
        else if(user.role == 'lawyer'){
            redirect('/dashboard/lawyer');
        }
        else if(user.role == 'admin'){
            redirect('/dashboard/admin');
        }
    }
    else{
        redirect('/auth/signin');
    }
    }
    return (
        <div>
            You are not suppposed to be here
        </div>
    );
};

export default page;