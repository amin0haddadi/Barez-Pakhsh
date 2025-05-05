import { getHotel } from "@/api/getHotel";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IHotelPageProps {
  params: { hotelId: string };
}

export default async function HotelPage({ params }: IHotelPageProps) {
  const hotel = await getHotel(params.hotelId);

  if (!hotel) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{hotel.name}</h1>
      <Image
        width={300}
        height={400}
        src={hotel.image_url}
        alt={hotel.name}
        className="w-full rounded-lg mb-4"
        unoptimized
      />
      <p className="text-lg text-gray-700 mb-2">{hotel.description}</p>
      <p className="text-xl font-semibold">${hotel.price_per_night}/night</p>
      {hotel.amenities?.length > 0 && (
        <ul className="mt-4 list-disc pl-5 text-gray-600">
          {hotel.amenities.map((amenity, i) => (
            <li key={i}>{amenity}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
