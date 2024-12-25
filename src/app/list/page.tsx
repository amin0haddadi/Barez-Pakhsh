"use client";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../../types";
import { getPosts } from "@/services/post/getPosts";
import CenteredListItem from "@/components/CenteredListItem";

const ListPage = () => {
  const { data, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className="flex flex-col gap-4 m-8">
      {data?.map((post) => (
        <CenteredListItem key={post.id} text={post.title} />
      ))}
    </ul>
  );
};

export default ListPage;
