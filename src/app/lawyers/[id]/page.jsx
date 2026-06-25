
import { getCommentLawyer, getListingLawyers, getUserProfileLaywer } from '@/data/dataFetch';
import React from 'react';
import LawyerDetailsPage from './details';
import { canUserCommentasdsad, getSession, getUserCurrent } from '@/lib/user';

const page = async ({params}) => {
    const sssparams = await params;
    //console.log(sssparams, "params from page");
    const laywer = await getListingLawyers(sssparams.id);
    //console.log(laywer, "lawyer from page");
    const user = await getUserCurrent();
    //console.log(laywer._id, user.id, '----------------------------------');
    const canUserComment = await canUserCommentasdsad(laywer?._id, user?.id);
    //console.log( canUserComment, 'user from id page__________________');
    const getComments = await getCommentLawyer(laywer._id);
    return (
         <div className="relative max-w-7xl mx-auto px-6 py-28">
            <LawyerDetailsPage comments={getComments} lawyer={laywer} canUserComment={canUserComment} />
        </div>
    );
};

export default page;