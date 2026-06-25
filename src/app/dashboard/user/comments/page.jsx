import { getUserComment } from '@/data/dataFetch';
import { getSession } from '@/lib/user';
import React from 'react';
import UserReviewsPage from './commentconet';

const page = async() => {
    const user = await getSession();
    const comments = await getUserComment(user?.id);
    //console.log(comments, 'sadsadsadsadsa');
    return (
        <div>
      
            <UserReviewsPage user={user} comments={comments} />
        </div>
    );
};

export default page;