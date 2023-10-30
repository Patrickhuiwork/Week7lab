import React, { useState, useEffect } from "react";
import Post from "./Post";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Simulate network latency with a delay
        setTimeout(async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch posts");
          }
          const data = await response.json();
          setPosts(data);
          setIsLoading(false);
        }, 1000); // Delay for 1 second
      } catch (error) {
        console.error(error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {isLoading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
}

export default PostList;
