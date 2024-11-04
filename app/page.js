import React from "react";
import Card from "@/components/next/card/Card";
import Link from "next/link";

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Card title={post.title} body={post.body} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
