import React from 'react'
import './FontCard.css'

const FontCard = ({ sampleText, fonts }) => {
  const cardstoShow = () =>
    fonts.map((font) => (
      <div className="card" key={font.name}>
        <h3 className="font-name">{font.name}</h3>
        <i className="fas fa-plus-circle"></i>
        <h5 className="font-author">{font.author}</h5>
        <p className="sample-text">{sampleText}</p>
      </div>
    ))

  return <>{cardstoShow()}</>
}

export default FontCard
