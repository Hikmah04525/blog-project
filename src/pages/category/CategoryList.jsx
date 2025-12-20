
const ListCategory = () => {
  const categories = [
    "Technology",
    "Health",
    "Education",
    "Business",
    "Science",
  ];

  return (
    <div>
      <h1>Category List</h1>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCategory;
