"use client";

import { useBasketStore } from "@/stores/basket";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

const Basket = () => {
  const { items, removeFromBasket, clearBasket } = useBasketStore();

  if (items.length === 0)
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your basket is empty 🧺</h1>
        <Link
          href="/hotels"
          className="text-blue-600 hover:underline inline-block mt-4"
        >
          Browse Hotels
        </Link>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Basket 🧳</h1>

      <div className="grid gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row gap-4 border rounded-lg shadow-sm p-4 hover:shadow-md hover:scale-105 transition duration-300"
          >
            <Image
              src={item.image_url}
              alt={item.name}
              width={200}
              height={150}
              className="rounded-lg object-cover"
              unoptimized
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm text-gray-500">
                From: {format(new Date(item.checkIn), "PPP")} — To:{" "}
                {format(new Date(item.checkOut), "PPP")}
              </p>
              <p className="text-lg font-medium mt-2">
                ${item.price_per_night}/night
              </p>
              <button
                onClick={() => removeFromBasket(item.id.toString())}
                className="mt-2 text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <button
          onClick={clearBasket}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear Basket
        </button>
      </div>
    </div>
  );
};

export default Basket;
