"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/next/card/Card";
import Link from "next/link";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Number of posts per page
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (page) => {
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`
    );
    const newPosts = await res.json();
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

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
      {loading && <p className="text-center">Loading more posts...</p>}
    </div>
  );
}
