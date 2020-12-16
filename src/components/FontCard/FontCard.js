import React from 'react'
import './FontCard.css'

const FontCards = ({ filterText, sampleText, fonts }) => {
  const filteredCards = fonts.filter(
    (font) =>
      font.name.toLocaleLowerCase().includes(filterText) ||
      font.author.toLocaleLowerCase().includes(filterText)
  )

  const cardsToShow = filterText ? filteredCards : fonts
  console.log(`filterText: ${filterText}`)
  console.log(`filteredCards: ${filteredCards}`)

  return cardsToShow.map((card) => (
    <div className="card" key={card.name}>
      <h1 className="font-name">{card.name}</h1>
      <i className="fas fa-plus-circle"></i>
      <h2 className="font-author">{card.author}</h2>
      <p className="sample-text" style={{ fontFamily: card.name }}>
        {sampleText}
      </p>
    </div>
  ))
}

export default FontCards
