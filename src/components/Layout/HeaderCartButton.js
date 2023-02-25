import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "../Layout/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
function HeaderCartButton(props) {
  const [btnIsHighlited, setButnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButnIsHighlighted(true);
    const timer = setTimeout(() => {
      setButnIsHighlighted(false);
    }, 300);

    return ()=> {
      clearTimeout(timer)
    }
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
