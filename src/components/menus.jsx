import React, { useState, useEffect } from "react";
import Hero from "./hero";
import SpecialDishes from "./specialDishes";
import FilteredDishes from "./filteredDishes";

function Menus() {
  let [menu, setMenu] = useState([]);
  let [category, setCategory] = useState([]);
  let [loading, setloading] = useState(true);
  let [singleDish, setSingleDish] = useState();

  async function getAllTheMenus() {
    const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API);
    let data = await response.json();
    setMenu(data.meals);
    setloading(false);
  }
  async function getAllTheCategories() {
    const API = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API);
    let CategoryData = await response.json();
    setCategory(CategoryData.categories);
  }

  async function getOnlyOneDish() {
    const API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
  }

  useEffect(() => {
    getAllTheMenus();
    getAllTheCategories();
    getOnlyOneDish();
  }, []);

  return (
    <div>
      <Hero />
      {!loading ? <SpecialDishes specialMenu={menu} /> : <h1>Loading</h1>}
      {!loading ? (
        <FilteredDishes 
        menuCategories={category} 
        allMenus={menu} 
        singleDish = {singleDish}
        setSingleDish = {setSingleDish}/>
      ) : null}
    </div>
  );
}

export default Menus;
