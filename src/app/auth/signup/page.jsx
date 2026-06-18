import React from 'react';
import SingupForm from './SingupForm';

const page = () => {
    return (
       
        <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">

    <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-warning/10 blur-3xl" />

    <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-warning/10 blur-3xl" />

    <SingupForm />
    {/* or SigninForm */}

</div>
    );
};

export default page;