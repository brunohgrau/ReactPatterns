import { useState } from "react";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogPosts = await response.json();
  return blogPosts;
}

const BlogPosts = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);
  fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  return (
    <ul>
      {loadedPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
