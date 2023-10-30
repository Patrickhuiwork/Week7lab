import React, { useState, useEffect } from "react";
import "../styles.css";

function Post({ post }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch author");
        }
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAuthor();
  }, [post.userId]);

  return (
    <div className="post">
      <h2 className="title">{post.title}</h2>
      {author && (
        <p>
          By <span>{author.name}</span>
        </p>
      )}
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
