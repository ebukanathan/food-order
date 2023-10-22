import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../UI/Input'

function MealItemForm(prop) {
  return (
    <div className={classes.form}>
        <Input label="Amount" input={{
            id:'amount_'+ prop.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}

        
        />
        <div className="">

            <button>+ Add</button>
        </div>
    </div>
  )
}

export default MealItemForm