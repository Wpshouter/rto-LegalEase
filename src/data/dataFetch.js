
export const fetchReQuest = async (path) => {
   
    //return;

  console.log(`Fetching data from: ${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}` );
  //return;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}`);
  const data = await res.json();
  return data;
};
export const securefetchReQuest = async (path) => {
   
    //return;

  console.log(`secure Fetching data from: ${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}` );
  //return;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}`);
  const data = await res.json();
  return data;
};
export const getUserProfileLaywer = async(laywer_id) => {
   console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/get-legal-profile/${laywer_id}`);

    const existingProfile = await fetchReQuest(`api/get-legal-profile/${laywer_id}`);
    return existingProfile || [];
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
