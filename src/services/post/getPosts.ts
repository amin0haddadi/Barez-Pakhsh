import { PATHNAME } from "@/constants";
import { Post } from "@/types";

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${PATHNAME}/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};
