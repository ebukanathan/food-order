
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

function MealItem(prop) {

  

  return (
    <li className={classes.meal}>
               <div className="">
            <h3>{prop.name}</h3>
            <div className={classes.description}>{prop.description}</div>
             <div className={classes.price}>{prop.price}</div>
            </div>
            <div className="">
              <MealItemForm/>  


            </div>
    </li>
  )
}

export default MealItem