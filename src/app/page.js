import { updateData } from "@/action/apiProfile";
import Banner from "@/componenet/Banner";
import Image from "next/image";

export default async function Home() {
  updateData();
  return (
    <>
      <Banner/>
    </>
  );
}
