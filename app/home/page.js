import Link from "next/link";
import React from "react";

export default async function page() {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?amount=10"
  ); // Fetching multiple jokes
  const data = await response.json();

  // Check if the data is an array of jokes
  const jokes = Array.isArray(data.jokes) ? data.jokes : [data]; // Ensure we have an array

  return (
    <div>
      {jokes.map((item) => (
        <div key={item.id}>
          <Link href={`/posts/${item.id}`}>{item.setup || "Random Joke"}</Link>
        </div>
      ))}
    </div>
  );
}
