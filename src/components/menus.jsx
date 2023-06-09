import React, { useState, useEffect } from "react";
import Hero from "./hero";
import SpecialDishes from "./specialDishes";


function Menus() {
  let [menu, setMenu] = useState([]);

  async function getAllTheMenus() {
    const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API);
    let data = await response.json();
    setMenu(data.meals);
  }

  useEffect(() => {
    getAllTheMenus();
  }, []);

  // let MenuImages = menu.map((item) => {
  //   return (
  //     <div>
  //     <img src={item.strMealThumb} />
  //     <h2>{item.strCategory}</h2>
  //     </div>
  //   );
  // });

  console.log(menu);

  return ( 
    <div>
      <Hero/>
      <SpecialDishes specialMenu = {menu}/>
    </div>
      );
}

export default Menus;
