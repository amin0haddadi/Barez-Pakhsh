import { PATHNAME } from "@/constants";
import { Hotel } from "@/types";

export async function getHotels(): Promise<Hotel[]> {
  try {
    const res = await fetch(`${PATHNAME}`);

    if (!res.ok) throw new Error("Failed to fetch hotels");

    return res.json();
  } catch (err) {
    console.error("Error fetching hotels:", err);
    throw new Error("Failed to fetch hotels");
  }
}
