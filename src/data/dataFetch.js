import { handeStatusCode } from "@/action/apiProfile";
import { authHeader } from "@/lib/user";

export const fetchReQuest = async (path) => {
   
    //return;

  console.log(`Fetching data from: ${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}`,    {
      cache: "no-store",
    } );
  //return;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}`);
  const data = await res.json();
  return data || [];
};
export const securefetchReQuest = async (path) => {
   
    //return;

  console.log(`secure Fetching data from: ${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}` );
  //return;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}`, 
                {
                       cache: "no-store",
                    headers: await authHeader()
                }
              );
  const data = await handeStatusCode(res);
  return data;
};
export const getUserProfileLaywer = async(laywer_id) => {
   console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/get-legal-profile/${laywer_id}`);

    const existingProfile = await fetchReQuest(`api/get-legal-profile/${laywer_id}`);
    return existingProfile || [];
}
export const getUserProfile = async(user_id) => {
    //http://localhost:5000/api/user/6a3515888f3aa33fd7a99fb5
    const userObject = await securefetchReQuest(`api/user/${user_id}`);
    return userObject;
}
export async function getUserProfileclient(user_id) {
  try {
    const response = await fetch(
      `/api/user/${user_id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch user"
      );
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Error fetching user:",
      error
    );

    return null;
  }
}

export const getLawyers = async(query='') => {
    const lawyers = await fetchReQuest(`api/lawyer?${query}`);
    console.log(  'lawyers from fetch', lawyers);
    return lawyers || [];
}
export const getListingLawyers = async(laywer_id) => {
    const lawyer = await fetchReQuest(`api/lawyer/${laywer_id}`);
    console.log(lawyer, "lawyer from fetch new fetch");
    return lawyer  || [];
}
export const getHistingRequest = async(user_id) => {
    //http://localhost:5000/api/hiring-request/user/6a3968d7f2853813c1b63117
    const hiringRequest = await securefetchReQuest(`api/hiring-request/user/${user_id}`);
    console.log(hiringRequest, "hiring request from fetch new fetch");
    return hiringRequest  || [];
}
export const gertHistingHirtoryLawyer = async(lawyer_id) => {
    //http://localhost:5000/api/hiring-request/lawyer/6a369816dfe529732b664825
    const hiringHistory = await securefetchReQuest(`api/hiring-request/lawyer/${lawyer_id}`);
    console.log(hiringHistory, "hiring history from fetch new fetch");
    return hiringHistory || [];
}
export const getPaymentHistoryLawyer = async(lawyer_id) => {
    ///api/payments/lawyer/:lawyerId
      const hiringHistory = await securefetchReQuest(`api/payments/lawyer/${lawyer_id}`);
       console.log(hiringHistory, "hiring history from fetch new fetch");
      return  hiringHistory || [];
}

export const getCommentLawyer = async(lawyerId) => {
  ///api/comments/lawyer/6a369816dfe529732b664825
  const comments = await securefetchReQuest(`api/comments/lawyer/${lawyerId}`);
  return comments || [] ;
}

export const getUserComment = async(userId) => {
  // /http://localhost:5000/api/comments/user/6a3984b4f2853813c1b6311a
    const comments = await securefetchReQuest(`api/comments/user/${userId}`);
  return comments || [] ;
}

export async function getAdminAnalytics() {
  const response = await securefetchReQuest(`api/admin/analytics`);

  return response || [];

}
export async function getAdminTransactions(){
  const response = await securefetchReQuest('api/admin/transactions');
   return response || [];
}
export async function getAllUsers() {

  const response = await securefetchReQuest(`api/admin/users`);
   return response || [];

}