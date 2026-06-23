import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getListingLawyers } from "@/data/dataFetch";

export async function POST(req) {

    try {

        const formData =
            await req.formData();

        const lawyerId =
            formData.get("lawyerId");

        const lawyerName =
            formData.get("lawyerName");

               const reqID =
            formData.get("reqID");

        const fee =
            Number(
                formData.get("fee")
            );

        const getLawyerFromServer = await getListingLawyers(lawyerId);
        //console.log(getLawyerFromServer, "lawyer from server");
        if(Number(getLawyerFromServer?.fee) !== fee){
            throw new Error('The fee has been changed. Please refresh the page and try again.');
        }
        const session =
            await stripe.checkout.sessions.create({

                mode: "payment",

                payment_method_types: [
                    "card",
                ],

                line_items: [
                    {
                        price_data: {
                            currency: "usd",

                            product_data: {
                                name:
                                    `Consultation - ${lawyerName}`,
                            },

                            unit_amount:
                                fee * 100,
                        },

                        quantity: 1,
                    },
                ],

                metadata: {
                    lawyerId,
                    lawyerName,
                    fee:
                        fee.toString(),
                    reqID
                },

                success_url:
                    `${process.env.NEXT_PUBLIC_APP_URL}/lawyers/success?session_id={CHECKOUT_SESSION_ID}`,

                cancel_url:
                    `${process.env.NEXT_PUBLIC_APP_URL}/lawyers/cancelled`,
            });

        return NextResponse.redirect(
            session.url,
            303
        );

    } catch (error) {

        return NextResponse.json(
            {
                error:
                    error.message,
            },
            {
                status: 500,
            }
        );

    }

}