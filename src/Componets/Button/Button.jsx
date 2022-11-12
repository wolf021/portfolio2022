import React from 'react'
import './button.css'

const Button = ({Title,Type,onClick}) => {
  return (
    <button className="button-container" type={Type} onClick={onClick}>
        <p className="button-title">
            {Title}
        </p>
    </button>
  )
}

export default Button;