import React from "react";
import Hero from "./hero";
import SpecialDishes from "./specialDishes";
import FilteredDishes from "./filteredDishes";
import Header from "./header";
import {AllMenus} from "./AllMenuContext";

function Menus() {


 
 
  return (
    <div>
      <Header />
      <Hero />
      <AllMenus>
         <SpecialDishes /> 
        
          <FilteredDishes />
        
      </AllMenus>
    </div>
  );
}

export default Menus;
