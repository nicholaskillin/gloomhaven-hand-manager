import React from 'react'

function CardContainer({ card, cardClass = '', containerClass, cardSelected, character, onClick }) {
  return (
    <td
      key={card.title}
      className={containerClass}
      onClick={(e) => onClick(e.target)}
    >
      <img
        src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
        className={cardSelected(card) ? `new-add-border ${cardClass}` : `${cardClass}`}
        alt={card.title}
      />
      {card.enhancements.map((enhancement) => (
        <EnhancementIcon key={enhancement.id} enhancement={enhancement} />
      ))}
    </td>
  )
}

function EnhancementIcon({ enhancement }) {
  return (
    <>
      {enhancement.enhancement !== '' && (
        <img
          className="enhancement-icon"
          src={`./images/enhancements/${enhancement.enhancement}.png`}
          style={{ top: enhancement.top, left: enhancement.left }}
          alt={`Enhancement Name`}
        />
      )}
    </>
  )
}

export default CardContainer
