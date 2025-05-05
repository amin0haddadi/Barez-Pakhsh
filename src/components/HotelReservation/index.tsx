"use client";

import { useBasketStore } from "@/stores/basket";
import { Hotel } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "sonner";

interface HotelReservationProps {
  hotel: Hotel;
}

export const HotelReservation = ({ hotel }: HotelReservationProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const router = useRouter();
  const addToBasket = useBasketStore((state) => state.addToBasket);

  const handleReserve = () => {
    if (!startDate || !endDate) {
      toast.error("تاریخ ورود و خروج هر دو باید ثبت شوند ");
      return;
    }

    if (endDate <= startDate) {
      toast.warning("تاریخ خروج باید بعد از تاریخ ورود باشد ");
      return;
    }

    addToBasket({
      ...hotel,
      checkIn: startDate,
      checkOut: endDate,
      addedAt: new Date().toISOString(),
    });

    toast.success("به سبد خرید اضافه شد");
    router.push("/hotels");
  };

  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-xl font-semibold mb-2">Reserve this hotel</h3>
      <div className="flex gap-4 flex-wrap">
        <div>
          <label className="block text-sm font-medium mb-1">Check-in</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="p-2 border rounded"
            placeholderText="Select check-in date"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Check-out</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            className="p-2 border rounded"
            placeholderText="Select check-out date"
          />
        </div>
      </div>

      <button
        onClick={handleReserve}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add to Basket
      </button>
    </div>
  );
};
