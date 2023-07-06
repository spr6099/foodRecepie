import React, { useContext, useState , useEffect } from "react";
import Pagination from "./pagination";
import CardDish from "./cardDish";
import { MenuContext } from "./AllMenuContext";

function FilteredDishes() {
  let [category, setCategory] = useState([]);
  let [singleDish, setSingleDish] = useState();
  let allMenuses = useContext(MenuContext)
  let [filterdDishes, setFilteredDishes] = useState([]);
  let [activeDishes, setActiveDishes] = useState("Beef");
  //pagination
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);

  let indexOfLastdish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastdish - itemsPerPage;

 let showTheseDishes = filterdDishes.slice(indexOfFirstDish, indexOfLastdish);

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


  // lets show only single dishes
  let maxLength = 8;
  let singleDishItems = singleDish.map((items, index) => {
    if (index < maxLength) {
      return (
        <li>  
        <img src={items.strMealThumb} className="br-10" />
        <h4>{items.strMeal}</h4>
        </li>
      );
    }
  });

  //  show dishes on Click
  function ShowFilterdDishes(category) {
    setSingleDish([]);
    setActiveDishes(category);
    let filteredDishesAre = allMenuses
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return (
         <CardDish menuItem={item}/>
        );
      });
    setFilteredDishes(filteredDishesAre);
  }

  // lets show all the categories
  let allCategories = category.map((item) => {
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
    <div>
      <div className="container">
        <div className="text-centre">
          <h2>choose your dishes</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            at explicabo dolore tenetur sint corrupti, nobis, sunt commodi animi
            recusandae pariatur quis necessitatibus, doloribus accusantium neque
            quasi labore quidem illo?
          </p>
        </div>
        <div className="filtered-dishes">
          <ul>{allCategories}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {singleDishItems}
            {filterdDishes.length != 0 || singleDishItems != 0 ? (
              showTheseDishes
            ) : (
              <div className="alert">
                <h3>sorry..no item found</h3>
              </div>
            )}
          </ul>
        </div>
        {/* pagination */}
        <Pagination
          filterdDishes={filterdDishes}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default FilteredDishes;
