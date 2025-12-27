import { useState } from "react";

const UpdateCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Category:", categoryName);
  };

  return (
    <div>
      <h1>Update Category</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />

        <button type="submit">Update Category</button>
      </form>
    </div>
  );
};

export default UpdateCategory;
