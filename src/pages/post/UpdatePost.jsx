import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Temporary mock data (replace with API fetch)
    const mockPost = {
      title: "Sample Post Title",
      content: "This is the post content that can be edited.",
      category: "Technology",
    };

    setTitle(mockPost.title);
    setContent(mockPost.content);
    setCategory(mockPost.category);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      content,
      category,
    };

    console.log("Updated Post:", updatedPost);
  };

  return (
    <div>
      <h1>Update Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
