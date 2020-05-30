import React, { useState } from 'react'

function CardContainer({
  card,
  cardClass = '',
  containerClass,
  cardSelected,
  character,
  mustLose,
  onClick,
}) {
  const [trackerButtons, setTrackerButtons] = useState(card.tracker)

  function handleClickTracker(i) {
    let newTrackerButtons = [...trackerButtons]
    newTrackerButtons[i].active = !newTrackerButtons[i].active
    setTrackerButtons(newTrackerButtons)
  }
  return (
    <td key={card.title} className={containerClass}>
      <img
        src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
        className={
          cardSelected(card) ? `new-add-border ${cardClass}` : `${cardClass}`
        }
        alt={card.title}
        onClick={(e) => onClick(e.target)}
      />
      {card.enhancements.map((enhancement) => (
        <EnhancementIcon key={enhancement.id} enhancement={enhancement} />
      ))}
      {mustLose && <p>Must Lose</p>}
      {containerClass === 'active-card' && card.tracker.length > 0 && (
        <>
          <br />
          {card.tracker.map((tracker, i) => (
            <button
              disabled={!trackerButtons[i].active}
              onClick={() => handleClickTracker(i)}
            >
              {i + 1}
            </button>
          ))}
        </>
      )}
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
