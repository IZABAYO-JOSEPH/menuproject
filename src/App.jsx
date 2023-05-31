import { useState } from "react";
import menu from "./data";
import Menu from "./menu";
import Title from "./title";
import Categories from "./categories";

const allCategories = [
  "all",
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
