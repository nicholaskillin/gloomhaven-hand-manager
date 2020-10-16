import React, {useState} from 'react'

import CardContainer from '../../CardContainer'
import ModifierDeck from './ModifierDeck'

function ChosenCards({
  character,
  chosenCards,
  modifierDeck,
  moveCardToActive,
  moveCardToDiscard,
  moveCardToLost,
  staffOfCommand,
}) {
  const [selectedCard, setSelectedCard] = useState({})

  function cardSelected(card) {
    if (selectedCard === card) {
      return true
    }
    return false
  }

  function handleCardClick(cardClicked) {
    while (cardClicked.className === 'enhancement-icon') {
      cardClicked = cardClicked.previousSibling
    }
    if (
      cardClicked.className === 'hand' ||
      cardClicked.className === 'card-in-play'
    ) {
      cardClicked = cardClicked.firstChild
    }
    let cardToSelect = character.cards.find(
      (card) => card.title === cardClicked.alt
    )
    cardToSelect === selectedCard
      ? setSelectedCard({})
      : setSelectedCard(cardToSelect)
  }

  function handleDiscardChosenCard() {
    moveCardToDiscard(selectedCard)
    setSelectedCard({})
  }

  function handleLostChosenCard() {
    moveCardToLost(selectedCard)
    setSelectedCard({})
  }

  function handleActivateChosenCard() {
    moveCardToActive(selectedCard)
    setSelectedCard({})
  }

  return (
    <td
      className="chosen-cards-title"
      colSpan="2"
      style={{ border: '1px solid white', textAlign: 'center' }}
    >
      Chosen Cards
      <br />
      <table align="center">
        <tbody>
          <tr>
            {Object.keys(chosenCards[0]).length === 0 ? (
              <td id="chosen-card-1" className="card-in-play">
                <img
                  alt="Chosen Card 1"
                  src={`./images/character-ability-cards/${character.initials}/${character.initials}-back.png`}
                  className="card"
                />
              </td>
            ) : (
              <CardContainer
                card={chosenCards[0]}
                cardClass={'chooseCards'}
                containerClass={'card-in-play'}
                cardSelected={cardSelected}
                character={character}
                onClick={handleCardClick}
              />
            )}
            {Object.keys(chosenCards[1]).length === 0 ? (
              <td id="chosen-card-2" className="card-in-play">
                <img
                  alt="Chosen Card 1"
                  src={`./images/character-ability-cards/${character.initials}/${character.initials}-back.png`}
                  className="card"
                />
              </td>
            ) : (
              <CardContainer
                card={chosenCards[1]}
                cardClass={'chooseCards'}
                containerClass={'card-in-play'}
                cardSelected={cardSelected}
                character={character}
                onClick={handleCardClick}
              />
            )}
            {staffOfCommand && Object.keys(chosenCards[2]).length === 0 && (
              <td id="chosen-card-3" className="card-in-play">
                <img
                  alt="Chosen Card 1"
                  src={`./images/character-ability-cards/${character.initials}/${character.initials}-back.png`}
                  className="card"
                />
              </td>
            )}
            {staffOfCommand && Object.keys(chosenCards[2]).length !== 0 && (
              <CardContainer
                card={chosenCards[2]}
                cardClass={'chooseCards'}
                containerClass={'card-in-play'}
                cardSelected={cardSelected}
                character={character}
                onClick={handleCardClick}
              />
            )}
          </tr>
        </tbody>
      </table>
      <div>
        <br />
        <button
          id="discard-button"
          className="button tooltip"
          disabled={Object.keys(selectedCard).length === 0}
          type="button"
          title="Must Have a Card In Play Selected"
          onClick={() => handleDiscardChosenCard()}
        >
          Discard Card
        </button>
        <button
          id="lose-button"
          className="button tooltip"
          disabled={Object.keys(selectedCard).length === 0}
          onClick={() => handleLostChosenCard()}
          type="button"
          title="Must Have a Card In Play Selected"
        >
          Lose Card
        </button>
        <button
          id="activate-button"
          className="button tooltip"
          disabled={Object.keys(selectedCard).length === 0}
          onClick={() => handleActivateChosenCard()}
          type="button"
          title="Must Have a Card In Play Selected"
        >
          Move Card to Active
        </button>
      </div>
      <ModifierDeck modifierDeck={modifierDeck} />
    </td>
  )
}

export default ChosenCards
