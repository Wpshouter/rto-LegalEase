
export const fetchReQuest = async (path) => {
   
    //return;

  console.log(`Fetching data from: ${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}` );
  //return;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/${path}`);
  const data = await res.json();
  return data;
};
export const getUserProfileLaywer = async(laywer_id) => {
   console.log(`${process.env.NEXT_PUBLIC_BACKEND_URI}/api/get-legal-profile/${laywer_id}`);

    const existingProfile = await fetchReQuest(`api/get-legal-profile/${laywer_id}`);
    return existingProfile;
}
export const getLawyers = async(query='') => {
    const lawyers = await fetchReQuest(`api/lawyer?${query}`);
    console.log(  'lawyers from fetch', lawyers);
    return lawyers || [];
}
