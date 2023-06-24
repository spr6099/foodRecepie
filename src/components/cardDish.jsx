import React from "react";

function CardDish(props) {

    function showPopupHandler(){
        alert("clicked")
    }
  return (
     <li>  
        <a href="javaScript:;" onClick={showPopupHandler}>
        <img src={props.menuItem.strMealThumb} className="br-10" />
        <h4>{props.menuItem.strMeal}</h4>
        </a>
      </li>
     
    
  );
}

export default CardDish;
