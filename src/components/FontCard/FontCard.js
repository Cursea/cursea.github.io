import React from 'react'
import './FontCard.css'

const FontCard = ({ sampleText, fonts }) => {
  const cardstoShow = () =>
    fonts.map((font) => (
      <div className="card" key={font.name}>
        <h1 className="font-name">{font.name}</h1>
        <i className="fas fa-plus-circle"></i>
        <h2 className="font-author">{font.author}</h2>
        <p className="sample-text" style={{ fontFamily: font.family }}>
          {sampleText}
        </p>
      </div>
    ))

  return <>{cardstoShow()}</>
}

export default FontCard
