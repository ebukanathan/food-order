import React from 'react'
import classes from './Input.module.css'

function Input(prop) {
  return (
    <div className={classes.input}>
        <label htmlFor={prop.input.id}>{prop.label}</label>
        <input {...prop.input}/>
    </div>
  )
}

export default Input