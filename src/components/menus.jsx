import { BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Hero from "./hero";
import SpecialDishes from "./specialDishes";
import FilteredDishes from "./filteredDishes";
import Header from "./header";
import {AllMenus} from "./AllMenuContext";
import Checkout from "./Checkout";

function Menus() {

  return (
    <div>
      <Router>
      <Header />
      <Hero />
        <Routes>

          {/* page1 */}
          <Route path="/">
          <AllMenus>
         <SpecialDishes />  
          <FilteredDishes />
          </AllMenus>
          </Route>

          {/* page2 */}
          <Route path="/Checkout">
            <Checkout/>
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default Menus;
