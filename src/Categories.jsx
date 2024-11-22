const Categories = ({ categories, filtersItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={category}
            className="btn"
            onClick={() => filtersItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
