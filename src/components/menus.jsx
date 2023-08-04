import { BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import Hero from "./hero";
import SpecialDishes from "./specialDishes";
import FilteredDishes from "./filteredDishes";
import Header from "./header";
import {AllMenus} from "./AllMenuContext";
import Checkout from "./Checkout";
import { AppProvider } from "../context/AppProvider";

function Menus() {

  return (
    <div>
      <Router>
        <AppProvider>
      <Header />
      <Hero />
        <Routes>

          {/* page1 */}
          <Route exact path="/"
            element={
          <AllMenus>
         <SpecialDishes />  
          <FilteredDishes />
          </AllMenus>
          }>
          </Route>

          {/* page2 */}
          <Route path="/Checkout"
            element={
            <Checkout/>
          }>
          </Route>
        </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default Menus;
