import React from 'react'
import "./card.css"
import ServiceIcon from "../../Assets/Images/logo192.png"

const Card = ({Title,Description,CardImage}) => {





  return (
    <div className="card" >
    <div className="card-container">
        <div className="card-logo">
            <img src={CardImage} alt="" width="100%" height="100%" />
        </div>
        <div className="card-info">
            <h3 className="card-heading">
                {Title}
            </h3>
            <p className="card-info">
                {Description}
            </p>
        </div>
    </div>
    </div>
  )
}

export default Card