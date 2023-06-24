import React ,{useState} from "react";
import CardDish from "./cardDish";
import PopUp from "./PopUp";
function SpecialDishes(props) {
  let [showPopUp , setShowPopUp] = useState(false);

  let maxSpecialDishes = 8
  let specialMenu = props.specialMenu.map((menuItem,index) => {
    if(index < maxSpecialDishes){
        return (
            <CardDish menuItem={menuItem}/>
          );

    }
   
  });
  return (
    <section className="special-dishes ">
      {showPopUp &&  <PopUp></PopUp>}
      <div className="container">
        <div className="special-dishes-content text-centre">
          <h2>our special dishes</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            sed tempora pariatur porro error! Perferendis, nobis laboriosam. Eum
            ratione iusto, doloribus quidem pariatur necessitatibus, repellendus
            praesentium, ex maiores excepturi architecto.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenu}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
