import React from 'react'
import './toolCard.css'

const ToolCard = ({ToolsTitle, ToolIcon }) => {
  return (
    <div className="toolCard-contaiiner">
        <div className="toolCard-logo">
            <img src={ToolIcon} alt="tools Icon" />
        </div>
        <br/>
        <p className="toolsCard-title">
            {ToolsTitle}
        </p>
    </div>
  )
}

export default ToolCard;