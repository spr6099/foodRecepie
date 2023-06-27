import React from "react";

function PopUp({ closePopUp, currentDish, allDishes }) {
  let dishDetails = allDishes
    .filter((menuItem) => {
      return menuItem.strMeal == currentDish;
    })
    .map((item) => {
      return (
        <div className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} alt="" />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>
          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>
          <ul className="dish-ingredients flex">
            <li>{item.strIngredient4}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient1}</li>
          </ul>
        </div>
      );
    });

  return (
    <div className="popup">
      <div className="popup-content">
        {dishDetails}
        <button>Order Now</button>
        <h5 className="popup-close" onClick={closePopUp}>
          close
        </h5>
      </div>
    </div>
  );
}

export default PopUp;
