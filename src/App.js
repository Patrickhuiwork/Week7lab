import React from "react";
import "./styles.css";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <h1>Recent Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
