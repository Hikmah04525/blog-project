import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ListPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Temporary mock data (replace with API later)
    const mockPosts = [
      {
        id: 1,
        title: "First Blog Post",
        category: "Technology",
      },
      {
        id: 2,
        title: "Second Blog Post",
        category: "Education",
      },
    ];

    setPosts(mockPosts);
  }, []);

  return (
    <div>
      <h1>Post List</h1>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>Category: {post.category}</p>
              <Link to={`/posts/${post.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPost;
