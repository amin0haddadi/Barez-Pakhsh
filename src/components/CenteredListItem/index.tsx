"use client";
import { getPosts } from "@/services/post/getPosts";
import { CenteredListItemProps, Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const CenteredListItem: FC<CenteredListItemProps> = () => {
  const { data, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ul className="flex flex-col gap-4 m-8">
      {data?.map((post, index) => (
        <li key={index} className="flex justify-center items-center">
          <div className="bg-gray-300 w-[40%] p-10 rounded-lg shadow-lg opacity-60 transform transition-transform duration-200 hover:scale-105 hover:opacity-100">
            <p className="text-center text-xl">{post.title}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CenteredListItem;
