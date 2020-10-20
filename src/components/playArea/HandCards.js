import React, {useState} from 'react'

import CardContainer from '../../CardContainer'
import _ from 'lodash'

function HandCards({
  character,
  hand,
  moveHandCardToLost,
  moveCardsToChosen,
  moveThirdCardToChosen,
  hasCardsInPlay,
  staffOfCommand,
  staffOfCommandPlayed
}) {
  const rowOne = hand.slice(0, 4)
  const rowTwo = hand.slice(4, 8)
  const rowThree = hand.slice(8, 12)

  const [selectedCards, setSelectedCards] = useState([])

  function handleOnClick(cardClicked) {
    while (cardClicked.className === 'enhancement-icon') {
      cardClicked = cardClicked.previousSibling
    }
    if (cardClicked.className === 'hand') {
      cardClicked = cardClicked.firstChild
    }
    let characterCard = character.cards.find(
      (card) => card.title === cardClicked.alt
    )
    if (selectedCards.some((card) => card.title === cardClicked.alt)) {
      let newSelection = [...selectedCards]
      _.remove(newSelection, characterCard)
      setSelectedCards(newSelection)
    } else {
      if (selectedCards.length < 2) {
        setSelectedCards([...selectedCards, characterCard])
      } else {
        let newSelection = [...selectedCards]
        newSelection.shift()
        newSelection.push(characterCard)
        setSelectedCards(newSelection)
      }
    }
  }

  function cardSelected(cardClicked) {
    if (selectedCards.some((card) => card.title === cardClicked.title)) {
      return true
    }
    return false
  }

  function handlePlayCards() {
    moveCardsToChosen(selectedCards)
    setSelectedCards([])
  }

  function handlePlayStaffOfCommand() {
    let cardToPlay = selectedCards
    moveThirdCardToChosen(cardToPlay)
    setSelectedCards([])
  }

  function handleLostCardToAvoidDamage() {
    moveHandCardToLost(selectedCards[0])
    setSelectedCards([])
  }

  return (
    <>
      <div id="hand-cards">
        <table align="center">
          <tbody>
            <tr>
              {rowOne.map((card) => (
                <CardContainer
                  key={card.title}
                  card={card}
                  containerClass="hand"
                  cardSelected={cardSelected}
                  character={character}
                  onClick={handleOnClick}
                />
              ))}
            </tr>
            <tr>
              {rowTwo.map((card) => (
                <CardContainer
                  key={card.title}
                  card={card}
                  containerClass="hand"
                  cardSelected={cardSelected}
                  character={character}
                  onClick={handleOnClick}
                />
              ))}
            </tr>
            <tr>
              {rowThree.map((card) => (
                <CardContainer
                  key={card.title}
                  card={card}
                  containerClass="hand"
                  cardSelected={cardSelected}
                  character={character}
                  onClick={handleOnClick}
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div id="confirm-buttons" align="center">
        <button
          id="play-cards-button"
          className="button"
          disabled={selectedCards.length !== 2 || hasCardsInPlay}
          type="button"
          title="Must Select 2 Cards, Not Have Any Cards In Play, And Not Be Resting"
          onClick={() => handlePlayCards()}
        >
          Play Cards
        </button>
        {staffOfCommand && (
          <button
            id="play-third-card"
            className="button"
            disabled={!hasCardsInPlay || selectedCards.length !== 1 || staffOfCommandPlayed}
            onClick={() => handlePlayStaffOfCommand()}
            type="button"
            title="Must Have Played Cards"
          >
            Play third card with Staff of Command
          </button>
        )}
        <button
          id="lose-hand-card"
          className="button"
          disabled={selectedCards.length !== 1}
          onClick={() => handleLostCardToAvoidDamage()}
          type="button"
          title="Must Have One Card Selected"
        >
          Lose Card To Avoid Damage
        </button>
      </div>
    </>
  )
}

export default HandCards