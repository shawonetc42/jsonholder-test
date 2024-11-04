import React from "react";

export default async function page({ params }) {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json(); // Changed variable name to 'post'

  console.log(post); // Log the post for debugging

  return (
    <div>
      <h1>{post.title}</h1> {/* Display the post title */}
      <p>{post.body}</p> {/* Display the post body */}
    </div>
  );
}
