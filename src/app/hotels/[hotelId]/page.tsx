import { getHotel } from "@/api/getHotel";
import { notFound } from "next/navigation";
import { HotelReservation } from "@/components/HotelReservation";
import Information from "@/components/Information";

interface IHotelPageProps {
  params: { hotelId: string };
}

const HotelPage = async ({ params }: IHotelPageProps) => {
  const hotel = await getHotel(params.hotelId);

  if (!hotel) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Information hotel={hotel} />
      <HotelReservation hotel={hotel} />
    </div>
  );
};

export default HotelPage;
