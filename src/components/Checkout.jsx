import { StateContext } from "../context/AppProvider";
import { useContext } from "react";

const Checkout = () =>{
    const cartPackage = useContext(StateContext);

    let cartItemsAre = cartPackage.cartItems.map((item) => {
        return (
          <div>
            <img src={item.img}/>
          <h6>{item.title}</h6>
          </div>
        );
      });
    return(
        <div><h2>This is Checkout</h2>
        {cartItemsAre}
        </div>
    )
}

export default Checkout;