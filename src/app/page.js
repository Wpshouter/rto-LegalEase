import { updateData } from "@/action/apiProfile";
import Banner from "@/componenet/Banner";
import LegalCategories from "@/componenet/ServiceCard";
import TopLegalExperts from "@/componenet/TopExperts";
import { getLawyers } from "@/data/dataFetch";
import Image from "next/image";

export default async function Home() {
  //updateData();
     const lawyers = await getLawyers();
  return (
    <>
      <Banner/>
     <TopLegalExperts lawyers={lawyers} />
     <LegalCategories />
    </>
  );
}
