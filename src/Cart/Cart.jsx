import classes from "./Cart.module.css"
import Modal from '../UI/Modal'


function Cart(prop) {
   const CartItem=[{id:1,name:"sushi",price:"10.00"}]

  return (
    <Modal onClose={prop.onClose}>
        <ul className={classes['cart-items']}>
            {CartItem.map((item)=><h2 key={item.id}>{item.name}</h2>)}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={prop.onClose}>close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart