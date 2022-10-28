import React from 'react'
import './button.css'

const Button = ({Title,Type}) => {
  return (
    <button className="button-container" type={Type}>
        <p className="button-title">
            {Title}
        </p>
    </button>
  )
}

export default Button