import React, { useState, useEffect } from "react";

function Menus() {
  let [menu, setMenu] = useState([]);

  async function getAllTheMenus() {
    const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    let response = await fetch(API);
    let data = await response.json();
    setMenu(data.meals);
  }

  useEffect(() => {
    getAllTheMenus();
  }, []);

  let MenuImages = menu.map((item) => {
    return (
      <div>
      <img src={item.strMealThumb} />
      <h2>{item.strCategory}</h2>
      </div>
    );
  });
  console.log(menu);
  return ( <div>{MenuImages}</div> );
}

export default Menus;
