import { PATHNAME } from "@/constants";
import { Hotel } from "@/types";

export async function getHotel(id: string): Promise<Hotel | null> {
  try {
    const res = await fetch(`${PATHNAME}`);

    if (!res.ok) return null;

    const hotels: Hotel[] = await res.json();
    return hotels.find((hotel) => hotel.id.toString() === id) || null;
  } catch (err) {
    console.error("Error fetching hotel:", err);
    return null;
  }
}
