import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIShown] = useState(false);
  const showCartHandler = () => {
    setCartIShown(true);
  };
  const hideCartHandler = () => {
    setCartIShown(false);
  };

  return (
    <CartProvider>
     { cartIsShown && 
     <Cart
        onHideCart={hideCartHandler}
      ></Cart>
      }
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
        <div>Hello</div>
      </main>
    </CartProvider>
  );
}

export default App;
