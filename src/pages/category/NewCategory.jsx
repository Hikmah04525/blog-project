import { useState } from "react";

const NewCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Category:", categoryName);
    setCategoryName("");
  };

  return (
    <div>
      <h1>Create New Category</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />

        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default NewCategory;
