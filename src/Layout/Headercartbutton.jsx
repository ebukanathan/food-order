import CartIcon from "../Cart/CartIcon";
import classes from "./Headercartbutton.module.css";

function Headercartbutton(prop) {
  return (
    <button className={classes.button} onClick={prop.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default Headercartbutton;
