import React from "react";
import { useCart } from "../Contexts/Cart";


const Cart = () => {
  const cart = useCart();
//   const total = cart.items.reduce((acc, item) => acc + parseInt(item.price.replace(/,/g, "")), 0);


const total = cart.items.reduce((a, b) => a + parseInt(b.price.replace(/,/g, "")), 0);

//same as above but in simpler way.

//we used / ,/g to replace all the commas in the price string with an empty string so,replace method is used to remove the comma from the price and then parseInt is used to convert the string to integer before adding it to the total.0 is the initial value of the accumulator which is used to store the total amount.

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}
      <h4>Total Amount : ${total}</h4>
    </div>
  );
};

export default Cart;
