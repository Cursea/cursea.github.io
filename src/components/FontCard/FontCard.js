import React from 'react'
import './FontCard.css'

const FontCards = ({ filterText, customText, fonts }) => {
  const filteredCards = fonts.filter(
    (font) =>
      font.family.toLocaleLowerCase().includes(filterText) ||
      font.author.toLocaleLowerCase().includes(filterText)
  )

  const cardsToShow = filterText ? filteredCards : fonts

  return cardsToShow.map((card) => (
    <div className="card" key={card.family}>
      <div className="font-info">
        <h1 className="font-name">{card.family}</h1>
        <h2 className="font-author">
          {card.author ? card.author : 'Author Name'}
        </h2>
      </div>
      <p className="sample-text" style={{ fontFamily: card.family }}>
        {!customText
          ? `“If cats looked like frogs we'd realize what nasty, cruel little bastards they are.
          Style. That's what people remember.”
          
          ― Terry Pratchett, Lords and Ladies`
          : customText}
      </p>
    </div>
  ))
}

export default FontCards
