import React, { useState } from "react";

function FilteredDishes(props) {
  let [allMenus, setAllMenus] = useState(props.allMenus);
  let [filterdDishes, setFilteredDishes] = useState([]);
  let [activeDishes, setActiveDishes] = useState();


  console.log("singleDishdd", props.singleDish);
// lets show only single dishes
let singleDishItems = props.singleDish.map((items)=>{
return(
  <li>
    <img src={items.strMealThumb} className="br-10" />
    <h5>{items.strMeal}</h5>
  </li>
)
})


//  show dishes on Click
  function ShowFilterdDishes(category) {
    setActiveDishes(category);
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

  // lets show all the categories
  let allCategories = props.menuCategories.map((item) => {
    return (
      <li
        className={item.strCategory == activeDishes ? "active" : ""}
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
            <ul className="flex flex-wrap gap-30">
              {singleDishItems}
              {filterdDishes.length != 0 ? (
                filterdDishes
              ) : (
                <div className="alert">
                  <h3>sorry..no item found</h3>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilteredDishes;
