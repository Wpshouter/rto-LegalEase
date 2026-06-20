'use server'
export const createProfile = async(data) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/legal_profiles`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return res.json();
}