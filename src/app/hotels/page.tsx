import { getHotels } from "@/api/getHotels";
import HotelCard from "@/components/Card";
import { Hotel } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "هتل ها",
};

const ListPage = async () => {
  const hotels: Hotel[] = await getHotels();

  return (
   <HotelCard hotels={hotels}/>
  );
};

export default ListPage;
