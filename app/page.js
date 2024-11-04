"use client"; // এই কম্পোনেন্টটিকে ক্লায়েন্ট কম্পোনেন্ট হিসেবে চিহ্নিত করুন
import React, { useEffect, useState } from "react"; // useEffect এবং useState আমদানি করুন
import Head from "next/head"; // SEO-এর জন্য Head আমদানি করুন
import Card from "@/components/next/card/Card"; // Card কম্পোনেন্ট আমদানি করুন
import Link from "next/link"; // নেভিগেশনের জন্য Link আমদানি করুন

export default function Page() {
  const [posts, setPosts] = useState([]); // পোস্টগুলির জন্য স্টেট
  const [loading, setLoading] = useState(true); // লোডিং স্টেট

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data); // ফেচ করা পোস্টগুলি স্টেটে সেট করুন
      setLoading(false); // ফেচ করার পর লোডিং বন্ধ করুন
    };

    fetchPosts(); // ফেচ ফাংশন কল করুন
  }, []); // একবার মাউন্ট হলে চলবে

  if (loading) {
    return <div>Loading...</div>; // লোডিং স্টেট দেখান
  }

  return (
    <>
      <Head>
        <title>Your Blog Title</title>
        <meta
          name="description"
          content="A brief description of your blog for SEO."
        />
        <meta name="keywords" content="blog, posts, articles, your keywords" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Your Blog Title" />
        <meta
          property="og:description"
          content="A brief description of your blog."
        />
        <meta property="og:image" content="https://yourwebsite.com/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
    </>
  );
}
