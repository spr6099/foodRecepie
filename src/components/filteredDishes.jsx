import React, { useState } from "react";

function FilteredDishes(props) {
  let [allMenus, setAllMenus] = useState(props.allMenus);
  let [filterdDishes, setFilteredDishes] = useState([]);
  console.log(filterdDishes)

  console.log("allMenus", props.allMenus);

  function ShowFilterdDishes(category) {
    let filteredDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return (
          <li>
            <img src={item.strMealThumb} className="br-10" alt="" />
            <h5>{item.strMeal}</h5>
          </li>
        );
      });
    setFilteredDishes(filteredDishesAre);
  }

  let allCategories = props.menuCategories.map((item) => {
    return (
      <li
        onClick={() => {
          ShowFilterdDishes(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });
  return (
    <div className="filtered-dishes">
      <div className="container">
        <div className="text-centre">
          <h2>choose your dishes</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            at explicabo dolore tenetur sint corrupti, nobis, sunt commodi animi
            recusandae pariatur quis necessitatibus, doloribus accusantium neque
            quasi labore quidem illo?
          </p>
          <div className="filterd-dishes">
            <ul>{allCategories}</ul>
          </div>
          <div className="filtered-dishes-results">
            <ul className="flex flex-wrap gap-30">{filterdDishes}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilteredDishes;
