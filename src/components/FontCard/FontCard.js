import React from 'react'
import './FontCard.css'

const FontCard = ({ font }) => {
  return (
    <div class="card">
      <h3 class="font-name">Roboto</h3>
      <i class="fas fa-plus-circle"></i>
      <h5 class="font-author">Christian Robertson</h5>
      <p class="sample-text">Sample text</p>
    </div>
  )
}

export default FontCard
