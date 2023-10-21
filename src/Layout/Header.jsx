
import mealImage from '../assets/meals.jpg'
import classes from './Header.module.css'
import Headercartbutton from './Headercartbutton'

function Header() {
  return (
    <div>
        <header className={classes.header}>
            <h1>ReactMeal</h1>
            <button>
                <Headercartbutton/>
            </button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="table of delicious food" />
        </div>
        
    </div>
  )
}

export default Header