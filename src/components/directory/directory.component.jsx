import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ items }) => {
  return (
    <div className="categories-container">
      {items.map((item) => {
        return <CategoryItem key={item.id} item={item}></CategoryItem>;
      })}
    </div>
  );
};

export default Directory;
