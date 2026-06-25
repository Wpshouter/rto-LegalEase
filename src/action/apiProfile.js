'use server'
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import { showToast } from './simpleFunctions';
import { authHeader } from '@/lib/user';
import { redirect } from 'next/navigation';
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
    //console.log('Posting data to server:', url, data);
    const res = await fetch(url, {
        method: 'POST',         
        headers:{
            'Content-Type': 'application/json',
            ... await authHeader()
        },
        body: JSON.stringify(data)
    });
    return handeStatusCode(res);
}
export const serverPatch = async (url, data ) => {
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type':
        'application/json',
        ... await authHeader()
    },
    body: JSON.stringify(data),
  });
  return handeStatusCode(res);
};

export const serverDelete = async (url, data = {}) => {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type':
          'application/json',
           ... await authHeader()
      },
      body: JSON.stringify(data),
    });
    return handeStatusCode(res);
};
export const saveHiringHistory = async (data) => {
    const res = await serverPost(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/hiring-history`, data);
    return res;
}
export const saveHiringRerequest = async (data) => {
    //console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/hiring-request`, data, 'asdasdas');
    
    const res = await serverPost(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/hiring-request`, data);
    return res;
}

export const updateHiringRequestStatus = async (data) => {
    const res = await serverPost(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/lawyer/approve-request`, data);
    return res;
}

export const saveComment = async(data) => {
    const res = await serverPost(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/comment`, data);
    return res;
}
export const editComment = async ( commentId, data ) => {
    return serverPatch(
      `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/comment/${commentId}`,
      data
    );
  };

export const deleteComment = async ( commentId, userId ) => {
    return serverDelete(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/comment/${commentId}`,
      {
        userId,
      }
    );
  };

export async function updateData() {
  // 1. Get the full incoming request headers
  const headersList = await headers()
  
  // 2. Extract the referring URL (the page the user is currently on)
  const referer = headersList.get('referer') 
  
  if (referer) {
    const { pathname } = new URL(referer)
    
    // 3. Revalidate the current dynamic path automatically
    revalidatePath(pathname) 
  }
}

export async function changeUserRole(
  userId,
  role
) {

 const data = await auth.api.setRole({
    body: {
        userId: userId,
        role: role, // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
});

updateData();

  return data;
}
export async function deleteUser(
  userId
) {
  //console.log(userId, 'fromserver');
  const result = await auth.api.removeUser({
    body: {
        userId: userId, // required
    },
    // This endpoint requires session cookies.
    headers: await headers(),
});



 updateData();

  return result;
}

export const handeStatusCode = async(res) => {
  if(res.status === 401){
    redirect('auth/signin');
  }
  else if (res.status == 403){
    redirect('/unauthorized');
  }

  return res.json();
}

export const completeRegistration = async (data) => {
    const res = await serverPost(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/complete-registration`,
        data
    );

    return res;
};