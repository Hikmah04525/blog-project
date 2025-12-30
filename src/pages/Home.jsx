import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Temporary mock data (replace with API later)
    const mockPosts = [
      {
        id: 1,
        title: "Welcome to My Blog",
        excerpt: "This is a simple blog built with React.",
      },
      {
        id: 2,
        title: "Learning React Step by Step",
        excerpt: "Sharing my journey of learning full-stack development.",
      },
    ];

    setPosts(mockPosts);
  }, []);

  return (
    <div>
      <h1>Home</h1>

      <p>
        Welcome to the blog! Here you can read posts, explore categories,
        and learn new things.
      </p>

      <h2>Recent Posts</h2>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <Link to={`/posts/${post.id}`}>Read More</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
