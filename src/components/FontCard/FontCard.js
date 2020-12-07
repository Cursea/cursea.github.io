import React from 'react'
import './FontCard.css'

const FontCard = ({ sampleText }) => {
  return (
    <div className="card">
      <h3 className="font-name">Roboto</h3>
      <i className="fas fa-plus-circle"></i>
      <h5 className="font-author">Christian Robertson</h5>
      <p className="sample-text">{sampleText}</p>
    </div>
  )
}

export default FontCard
