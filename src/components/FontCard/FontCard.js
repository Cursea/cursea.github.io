import React from 'react'
import './FontCard.css'

const FontCard = ({ font }) => {
  return (
    <div className="card">
      <h3 className="font-name">Roboto</h3>
      <i className="fas fa-plus-circle"></i>
      <h5 className="font-author">Christian Robertson</h5>
      <p className="sample-text">Sample text</p>
    </div>
  )
}

export default FontCard
