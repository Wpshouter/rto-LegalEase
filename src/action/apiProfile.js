'use server'
export const createProfile = async(data) => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/legal_profiles`, {
    //     method: 'POST',
    //     headers:{
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // });
    const res = await serverPost(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/legal_profiles`, data);
    return res;
}




export const serverPost = async (url, data) => {
    console.log('Posting data to server:', url, data);
    const res = await fetch(url, {
        method: 'POST',         
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return res.json();
}

export const saveHiringHistory = async (data) => {
    const res = await serverPost(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/hiring-history`, data);
    return res;
}
export const saveHiringRerequest = async (data) => {
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/hiring-request`, data, 'asdasdas');
    
    const res = await serverPost(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/hiring-request`, data);
    return res;
}