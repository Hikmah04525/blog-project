import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Temporary mock data (replace with API call later)
    const mockPost = {
      id,
      title: "Sample Post Title",
      content: "This is the detailed content of the post.",
      category: "Technology",
      author: "Admin",
      createdAt: "2025-01-01",
    };

    setPost(mockPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>Category:</strong> {post.category}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {post.createdAt}</p>

      <hr />

      <p>{post.content}</p>
    </div>
  );
};

export default DetailPost;
