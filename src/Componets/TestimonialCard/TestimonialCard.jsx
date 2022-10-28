import React from 'react'
import './testimonialCard.css'

const TestimonialCard = ({TestimonialTitle, TestimonialDescription}) => {
  return (
    <div className="testimonial-container">
        <h4 className="testimonialCard-title">
            {TestimonialTitle}
        </h4>
        <p className="testimonial-description">
            {TestimonialDescription}
        </p>
    </div>
  )
}

export default TestimonialCard;