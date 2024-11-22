import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import items from "./data"
import Categories from "./Categories"
const allCategories = ['all', ...new Set(items.map((item)=> item.category))]
const App = () => { 
  const [menuItems, setMenuItems] = useState(items) 
  const [categories, setCategories] = useState(allCategories) 

  const filtersItems = (category) =>{
    if (category === "all"){
      setMenuItems(items)
      return;
    } 
    const newItems = items.filter((item) => item.category === category) 
    setMenuItems(newItems);
  }
  return (
    <main>
      <div className="menu">
        <Title text="Our Menus"/>
        <Categories categories={categories}  filtersItems={filtersItems}/>
        <Menu items={menuItems}/> 
      </div>
    </main>
  );
};
export default App;
