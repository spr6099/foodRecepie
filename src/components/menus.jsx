import React, { useState, useEffect } from "react";
import Hero from "./hero";
import SpecialDishes from "./specialDishes";
import FilteredDishes from "./filteredDishes";
import Header from "./header";
import {AllMenus} from "./AllMenuContext";

function Menus() {
  let [category, setCategory] = useState([]);
  let [singleDish, setSingleDish] = useState();

 
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
    getAllTheCategories();
    getOnlyOneDish();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <AllMenus>
         <SpecialDishes /> 
        
          <FilteredDishes
            menuCategories={category}
            singleDish={singleDish}
            setSingleDish={setSingleDish}
          />
        
      </AllMenus>
    </div>
  );
}

export default Menus;
