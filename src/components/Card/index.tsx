import { Hotel } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface IHotelCardProps {
  hotels: Hotel[];
}

const HotelCard = ({ hotels }: IHotelCardProps) => {
  return (
    <div className="p-8">
      <h1 className="flex justify-center items-center text-3xl font-bold mb-6 ">
        Available Hotels
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center w-fit mx-auto">
        {hotels.map((hotel: Hotel) => (
          <Link
            key={hotel.id}
            className="border rounded-xl shadow p-4 max-w-fit hover:scale-105 cursor-pointer transition"
            href={`/hotels/${hotel.id}`}
          >
            <Image
              src={hotel.image_url}
              alt={hotel.name}
              width={370}
              height={270}
              unoptimized
              className="border rounded-lg"
            />
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <p className="text-gray-600 truncate whitespace-nowrap overflow-hidden w-[80%]">
              {hotel.description}
            </p>
            <p className="mt-1">${hotel.price_per_night}/night</p>
            {/* <ul className="mt-2 text-sm text-gray-500">
                  {hotel.amenities.map((amenity, i) => (
                    <li key={i}>• {amenity}</li>
                  ))}
                </ul> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotelCard;
