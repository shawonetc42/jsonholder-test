import React from "react";
import Card from "@/components/next/card/Card";
import Pagination from "@/components/next/card/Pagination";
import Link from "next/link";

export default async function Page({ searchParams }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const postsPerPage = 5; // Number of posts per page
  const currentPage = parseInt(searchParams.page) || 1; // Get the page number from URL
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Posts</h1>
      <ul className="space-y-4">
        {currentPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Card title={post.title} body={post.body} />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
