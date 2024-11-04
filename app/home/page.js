import Link from "next/link";
import React from "react";
import Card from "@/components/Card";

export default async function page() {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?amount=10"
  ); // Fetching multiple jokes
  const data = await response.json();

  // Check if the data is an array of jokes
  const jokes = Array.isArray(data.jokes) ? data.jokes : [data]; 

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {jokes.map((item) => (
        <Card key={item.id} joke={item} />
      ))}
    </div>
  );
}
