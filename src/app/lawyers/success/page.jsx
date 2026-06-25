import { saveHiringHistory } from '@/action/apiProfile';
import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation'
import { getSession } from "@/lib/user";
import SuccessPage from '@/componenet/success/PageSuccessContent';


export default async function Success({ searchParams }) {
  const { session_id } = await searchParams
  const user = await getSession();
  //console.log('user from success page', user);
  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail }, metadata, ...restofdata
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })
  //console.log('restofdata from success page', restofdata?.payment_intent?.id);
  //console.log('metadata from success page', metadata);
  //console.log('status from success page', status);
  //console.log('customerEmail from success page', customerEmail);
  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const payload = {
      lawyerId: metadata.lawyerId,
      lawyerName: metadata.lawyerName,
      fee: metadata.fee,
      hired_by: user?.id, // Replace with actual user ID from your authentication system
      reqID: metadata.reqID,
      'stuatus': 'hired',
      'payment_intent_id': restofdata?.payment_intent?.id,
      created_at: new Date(),
    }
          /*
      {
    "fee": "343",
    "lawyerId": "6a365dc132b7a9f0eb328a33",
    "lawyerName": "William Taylor",
    "hired_by" : user_id,
    created att,

}
      */
    //console.log('payload for saving hiring history', payload);
    const res = await saveHiringHistory(payload);
    //console.log(res, 'res from saving hiring history');
    return (
      <SuccessPage customerEmail={customerEmail} />
    )
  }
}