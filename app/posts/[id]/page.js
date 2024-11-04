// app/posts/page.js
import Link from "next/link";
import React from "react";
import PostsCard from "@/components/PostsCard";

export default async function PostsPage({ params }) {
  const id = params;
  const response = await fetch(
    `https://v2.jokeapi.dev/joke/Programming?id=${id}`
  );
  const data = await response.json();
  console.log(data);

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="mb-4 text-2xl font-bold">Posts</h1>
      <PostsCard joke={data.joke} type={data.type} />
    </div>
  );
}
