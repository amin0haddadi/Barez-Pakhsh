import { Hotel } from "@/types";
import Image from "next/image";
import React from "react";

interface IInformationProps {
  hotel: Hotel;
}

const Information = ({ hotel }: IInformationProps) => {
  return (
    <>
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
        <ul className="mt-4 flex flex-wrap gap-2 text-gray-600">
          {hotel.amenities.map((amenity, i) => (
            <li key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">
              {amenity}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Information;
