import { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      category,
    };

    console.log("New Post:", newPost);

    // reset form
    setTitle("");
    setContent("");
    setCategory("");
  };

  return (
    <div>
      <h1>Create New Post</h1>

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

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewPost;
