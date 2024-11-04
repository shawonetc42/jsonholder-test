import Link from "next/link";
import React from "react";

const Card = ({ joke }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Link
        href={`/posts/${joke.id}`}
        className="text-blue-500 hover:underline"
      >
        {joke.setup || "Random Joke"}
      </Link>
    </div>
  );
};

export default Card;
