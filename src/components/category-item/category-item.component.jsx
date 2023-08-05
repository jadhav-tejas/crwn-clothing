import "./category-item.styles.scss";

const CategoryItem = ({ item }) => {
  const { id, title, imageUrl } = item;
  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Show Now!</p>
      </div>
    </div>
  );
};

export default CategoryItem;
