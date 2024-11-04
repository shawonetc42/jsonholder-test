import Link from "next/link";
import React from "react";
import Card from "@/components/Card";

export default async function page() {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?amount=10", {
      cache: "no-store" // {{ edit_1 }} Corrected cache option syntax
    }
  ); // Fetching multiple jokes
  const data = await response.json();
  console.log(data);

  const jokes = data.jokes; // {{ edit_2 }} Assigning fetched jokes to a variable

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {jokes.map((item) => (
        <Card key={item.id} joke={item} />
      ))}
    </div>
  );
}
