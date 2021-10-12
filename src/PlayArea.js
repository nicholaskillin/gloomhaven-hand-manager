import { CheckboxCard, StackView, Text } from '@planning-center/ui-kit'
import React, { useEffect, useState } from 'react'

import CardContainer from './CardContainer'
import ChosenCards from './components/playArea/ChosenCards'
import HandCards from './components/playArea/HandCards'
import { slide as Menu } from 'react-burger-menu'
import PlayerStats from './components/playArea/PlayerStats'
import _ from 'lodash'

function PlayArea({
  character,
  hand,
  level,
  modifierDeck,
  setHand,
  staffOfCommand,
}) {
  const [hasCardsInPlay, setHasCardsInPlay] = useState(false)
  const [chosenCards, setChosenCards] = useState([{}, {}, {}])
  const [discardedCards, setDiscardedCards] = useState([])
  const [activeCards, setActiveCards] = useState([])
  const [lostCards, setLostCards] = useState([])
  const [showPlayerStats, setShowPlayerStats] = useState(false)

  useEffect(() => {
    modifierDeck.forEach((image) => {
      const newImage = new Image()
      newImage.src = image.image
    })
  }, [modifierDeck])

  function anyChosenCardsLeft(newArray) {
    let cardsStillInPlay = newArray.filter(
      (value) => Object.keys(value).length !== 0
    )
    if (cardsStillInPlay.length > 0) {
      return true
    }
    return false
  }

  function moveCardsToChosen(cards) {
    // remove selected cards from hand
    let newHand = [...hand]
    cards.forEach((card) => {
      _.remove(newHand, function(handCard) {
        return handCard.title === card.title
      })
    })
    setHand(newHand)

    // add selected cards to ChosenCards component
    let newChosenCards = [...chosenCards]
    newChosenCards[0] = cards[0]
    newChosenCards[1] = cards[1]
    setChosenCards(newChosenCards)

    setHasCardsInPlay(true)
  }

  function moveThirdCardToChosen(cards) {
    // remove selected cards from hand
    let newHand = [...hand]
    cards.forEach((card) => {
      _.remove(newHand, function(handCard) {
        return handCard.title === card.title
      })
    })
    setHand(newHand)

    // add selected cards to ChosenCards component
    let newChosenCards = [...chosenCards]
    newChosenCards[2] = cards[0]
    setChosenCards(newChosenCards)

    setHasCardsInPlay(true)
  }

  function moveCardToDiscard(cardDiscarded) {
    let i = _.indexOf(chosenCards, cardDiscarded)
    let newChosenCards = [...chosenCards]
    newChosenCards[i] = {}
    setChosenCards(newChosenCards)
    setDiscardedCards([...discardedCards, cardDiscarded])
    if (!anyChosenCardsLeft(newChosenCards)) {
      setHasCardsInPlay(false)
    }
  }

  function moveDiscardedCardsToLost(cards, resetHand) {
    setLostCards([...lostCards, ...cards])
    let newDiscardedCards = [...discardedCards]
    cards.forEach((card) => {
      _.remove(newDiscardedCards, card)
    })
    if (resetHand) {
      setHand([...hand, ...newDiscardedCards], setDiscardedCards([]))
    } else {
      setDiscardedCards(newDiscardedCards)
    }
  }

  function moveActiveCardToDiscard(cardDiscarded) {
    let newActiveCards = [...activeCards]
    _.remove(newActiveCards, cardDiscarded)
    setActiveCards(newActiveCards)
    setDiscardedCards([...discardedCards, cardDiscarded])
  }

  function moveCardToLost(cardLost) {
    let i = _.indexOf(chosenCards, cardLost)
    let newChosenCards = [...chosenCards]
    newChosenCards[i] = {}
    setChosenCards(newChosenCards)
    setLostCards([...lostCards, cardLost])
    if (!anyChosenCardsLeft(newChosenCards)) {
      setHasCardsInPlay(false)
    }
  }

  function moveActiveCardToLost(cardLost) {
    let newActiveCards = [...activeCards]
    _.remove(newActiveCards, cardLost)
    setActiveCards(newActiveCards)
    setLostCards([...lostCards, cardLost])
  }

  function moveHandCardToLost(cardLost) {
    let newHandCards = [...hand]
    _.remove(newHandCards, cardLost)
    setHand(newHandCards)
    setLostCards([...lostCards, cardLost])
  }

  function moveCardToActive(cardActivated) {
    let i = _.indexOf(chosenCards, cardActivated)
    let newChosenCards = [...chosenCards]
    newChosenCards[i] = {}
    setChosenCards(newChosenCards)
    setActiveCards([...activeCards, cardActivated])
    if (!anyChosenCardsLeft(newChosenCards)) {
      setHasCardsInPlay(false)
    }
  }

  function handleMoveCardsBackToHand(cardsRecovered) {
    setHand([...hand, ...cardsRecovered])
  }

  function removeCardFromDiscard(card) {
    _.remove(discardedCards, card)
  }

  function moveLostCardToHand(card) {
    setHand([...hand, card])
    let newLostCards = [...lostCards]
    _.remove(newLostCards, card)
    setLostCards(newLostCards)
  }

  function handleUpdateShowPlayerStats(showStats) {
    setShowPlayerStats(showStats)
  }

  function returnChosenCardsToHand() {
    // remove selected cards from hand
    let newHand = [...hand]
    chosenCards.forEach((chosenCard) => {
      if (Object.keys(chosenCard).length !== 0) {
        newHand = [...newHand, chosenCard]
      } 
    })
    setHand(newHand)

    // add selected cards to ChosenCards component
    setChosenCards([{}, {}, {}])
    setHasCardsInPlay(false)
  }

  return (
    <>
      <Menu>
        <SettingsMenu setPlayerStats={handleUpdateShowPlayerStats} />
      </Menu>
      <div id="play-game" align="center">
        <table id="play-area" align="center">
          <tbody>
            <tr>
              <ChosenCards
                character={character}
                chosenCards={chosenCards}
                modifierDeck={modifierDeck}
                moveCardToActive={moveCardToActive}
                moveCardToDiscard={moveCardToDiscard}
                moveCardToLost={moveCardToLost}
                returnChosenCardsToHand={returnChosenCardsToHand}
                staffOfCommand={staffOfCommand}
              />
              <ActiveCards
                character={character}
                activeCards={activeCards}
                moveActiveCardToDiscard={moveActiveCardToDiscard}
                moveActiveCardToLost={moveActiveCardToLost}
              />
            </tr>
            <tr>
              <DiscardedCards
                character={character}
                discardedCards={discardedCards}
                handleMoveCardsBackToHand={handleMoveCardsBackToHand}
                moveDiscardedCardsToLost={moveDiscardedCardsToLost}
                removeCardFromDiscard={removeCardFromDiscard}
              />
              <LostCards
                character={character}
                lostCards={lostCards}
                moveLostCardToHand={moveLostCardToHand}
              />
            </tr>
          </tbody>
        </table>
        {showPlayerStats && <PlayerStats character={character} level={level} />}
      </div>
      <HandCards
        character={character}
        hand={hand}
        moveHandCardToLost={moveHandCardToLost}
        moveThirdCardToChosen={moveThirdCardToChosen}
        moveCardsToChosen={moveCardsToChosen}
        hasCardsInPlay={hasCardsInPlay}
        staffOfCommand={staffOfCommand}
        staffOfCommandPlayed={Object.keys(chosenCards[2]).length === 0 ? false : true}
      />
    </>
  )
}

function DiscardedCards({
  character,
  discardedCards,
  handleMoveCardsBackToHand,
  moveDiscardedCardsToLost,
  removeCardFromDiscard,
}) {
  const [selectedCards, setSelectedCards] = useState([])
  const [resting, setResting] = useState(false)
  const [canRerollLost, setCanRerollLost] = useState(false)
  const [longResting, setLongResting] = useState(false)
  const [cardToLose, setCardToLose] = useState({})
  const firstRow = discardedCards.slice(0, 5)
  const secondRow = discardedCards.slice(5, 10)
  const thirdRow = discardedCards.slice(10, 15)

  function handleOnClick(cardClicked) {
    while (cardClicked.className === 'enhancement-icon') {
      cardClicked = cardClicked.previousSibling
    }
    if (cardClicked.className === 'discarded') {
      cardClicked = cardClicked.firstChild
    }
    let characterCard = character.cards.find(
      (card) => card.title === cardClicked.alt
    )
    if (longResting) {
      setCardToLose(characterCard)
    } else {
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
  }

  function cardSelected(cardClicked) {
    if (selectedCards.some((card) => card.title === cardClicked.title)) {
      return true
    }
    return false
  }

  function handleRecoverDiscardedCard() {
    handleMoveCardsBackToHand(selectedCards)
    removeCardFromDiscard(selectedCards[0])
    setSelectedCards([])
  }

  function handleLoseCardsAvoidingDamage(cards) {
    moveDiscardedCardsToLost(cards, false)
    setSelectedCards([])
  }

  function handleShortRest() {
    setResting(true)
    let cardToLose =
      discardedCards[Math.floor(Math.random() * discardedCards.length)]
    setCardToLose(cardToLose)
    setCanRerollLost(true)
  }

  function handleLoseCardFromRest() {
    moveDiscardedCardsToLost([cardToLose], true)
    setResting(false)
    setCanRerollLost(false)
    setCardToLose({})
    setLongResting(false)
  }

  function handleRerollLostCard() {
    let cardsToChooseFrom = [...discardedCards]
    _.remove(cardsToChooseFrom, cardToLose)
    let newCardToLose =
      cardsToChooseFrom[Math.floor(Math.random() * cardsToChooseFrom.length)]
    setCardToLose(newCardToLose)
    setCanRerollLost(false)
  }

  function handleLongRest() {
    setLongResting(true)
  }

  function cardBoarder(card) {
    if (card === cardToLose && resting) {
      return 'chooseCards must-lose'
    } else if (card === cardToLose && longResting) {
      return 'chooseCards discard-selected'
    }
    return 'chooseCards'
  }

  return (
    <td
      id="discarded-cards-title"
      colSpan="2"
      style={{ border: '1px solid white', textAlign: 'center' }}
    >
      Discarded Cards
      {longResting && <p id="choose-to-lose">Choose One Card to Lose</p>}
      <table id="discard-table">
        <tbody>
          <tr>
            {firstRow.map((card) => (
              <CardContainer
                card={card}
                cardClass={cardBoarder(card)}
                containerClass={'discarded'}
                cardSelected={cardSelected}
                character={character}
                key={card.title}
                mustLose={card === cardToLose && resting}
                onClick={handleOnClick}
              />
            ))}
          </tr>
          <tr>
            {secondRow.map((card) => (
              <CardContainer
                card={card}
                cardClass={cardBoarder(card)}
                containerClass={'discarded'}
                cardSelected={cardSelected}
                character={character}
                key={card.title}
                mustLose={card === cardToLose && resting}
                onClick={handleOnClick}
              />
            ))}
          </tr>
          <tr>
            {thirdRow.map((card) => (
              <CardContainer
                card={card}
                cardClass={cardBoarder(card)}
                containerClass={'discarded'}
                cardSelected={cardSelected}
                character={character}
                key={card.title}
                mustLose={card === cardToLose && resting}
                onClick={handleOnClick}
              />
            ))}
          </tr>
        </tbody>
      </table>
      <button
        id="short-rest-button"
        disabled={discardedCards.length < 2 || resting || longResting}
        className="button"
        onClick={() => handleShortRest()}
        type="button"
        title="Must Have At Least 2 Discarded Cards And No Cards in Play"
      >
        Short Rest
      </button>
      <button
        id="long-rest-button"
        disabled={discardedCards.length < 2 || resting || longResting}
        className="button"
        onClick={() => handleLongRest()}
        type="button"
        title="Must Have At Least 2 Discarded Cards And No Cards in Play"
      >
        Long Rest
      </button>
      <button
        id="recover-discard-button"
        disabled={selectedCards.length !== 1 || resting || longResting}
        className="button"
        onClick={() => handleRecoverDiscardedCard(selectedCards[0])}
        type="button"
        title="Must Have A Discarded Card Selected"
      >
        Recover Discarded Card
      </button>
      <br />
      <button
        id="lose-discard-button"
        className="button"
        disabled={Object.keys(cardToLose).length === 0}
        onClick={() => handleLoseCardFromRest()}
        type="button"
        title="Must Be Resting"
      >
        Lose Card From Rest
      </button>
      <button
        id="reroll-random-card-button"
        className="button"
        disabled={!canRerollLost}
        onClick={() => handleRerollLostCard()}
        type="button"
        title="Can Only Be Used Once Per Short Rest"
      >
        Reroll Lost Card
      </button>
      <button
        id="lose-discard-button2"
        className="button"
        disabled={selectedCards.length !== 2}
        onClick={() => handleLoseCardsAvoidingDamage(selectedCards)}
        type="button"
        title="Must Have A Discarded Card Selected - Must Lose 2 to Avoid Damage"
      >
        Lose Cards To Avoid Damage
      </button>
    </td>
  )
}

function ActiveCards({
  character,
  activeCards,
  moveActiveCardToDiscard,
  moveActiveCardToLost,
}) {
  const [selectedCard, setSelectedCard] = useState({})
  const firstRow = activeCards.slice(0, 3)
  const secondRow = activeCards.slice(3, 6)

  function cardSelected(card) {
    if (selectedCard === card) {
      return true
    }
    return false
  }

  function handleCardClick(cardClicked) {
    if (cardClicked.tagName === 'BUTTON' || cardClicked.tagName === 'BR') {
      return
    }
    while (cardClicked.className === 'enhancement-icon') {
      cardClicked = cardClicked.previousSibling
    }
    if (cardClicked.className === 'active-card') {
      cardClicked = cardClicked.firstChild
    }
    let cardToSelect = character.cards.find(
      (card) => card.title === cardClicked.alt
    )
    cardToSelect === selectedCard
      ? setSelectedCard({})
      : setSelectedCard(cardToSelect)
  }

  function handleDiscardCard(card) {
    moveActiveCardToDiscard(card)
    setSelectedCard({})
  }

  function handleLoseCard(card) {
    moveActiveCardToLost(card)
    setSelectedCard({})
  }

  return (
    <td
      id="active-cards-title"
      colSpan="2"
      style={{ border: '1px solid white', textAlign: 'center' }}
    >
      Active Cards
      <br />
      <table id="active-table" align="center">
        <tbody>
          <tr>
            {firstRow.map((card) => (
              <CardContainer
                card={card}
                cardClass={'chooseCards'}
                containerClass={'active-card'}
                cardSelected={cardSelected}
                character={character}
                key={card.title}
                onClick={handleCardClick}
              />
            ))}
          </tr>
          <tr>
            {secondRow.map((card) => (
              <CardContainer
                card={card}
                cardClass={'chooseCards'}
                containerClass={'active-card'}
                cardSelected={cardSelected}
                character={character}
                key={card.title}
                onClick={handleCardClick}
              />
            ))}
          </tr>
        </tbody>
      </table>
      <button
        id="discard-active-card"
        className="button tooltip"
        disabled={Object.keys(selectedCard).length === 0}
        onClick={() => handleDiscardCard(selectedCard)}
        type="button"
        title="Must Have an Active Card Selected"
      >
        Discard Active Card
      </button>
      <button
        id="lose-active-card"
        className="button tooltip"
        disabled={Object.keys(selectedCard).length === 0}
        onClick={() => handleLoseCard(selectedCard)}
        type="button"
        title="Must Have an Active Card Selected"
      >
        Lose Active Card
      </button>
      <br />
    </td>
  )
}

function LostCards({ character, lostCards, moveLostCardToHand }) {
  const [selectedCard, setSelectedCard] = useState({})
  const firstRow = lostCards.slice(0, 5)
  const secondRow = lostCards.slice(5, 10)
  const thirdRow = lostCards.slice(10, 15)

  function cardSelected(card) {
    if (selectedCard === card) {
      return true
    }
    return false
  }

  function handleOnClick(cardClicked) {
    while (cardClicked.className === 'enhancement-icon') {
      cardClicked = cardClicked.previousSibling
    }
    if (cardClicked.className === 'lost') {
      cardClicked = cardClicked.firstChild
    }
    let cardToSelect = character.cards.find(
      (card) => card.title === cardClicked.alt
    )
    cardToSelect === selectedCard
      ? setSelectedCard({})
      : setSelectedCard(cardToSelect)
  }

  function handleRecoverLostCard(card) {
    moveLostCardToHand(card)
    setSelectedCard({})
  }

  return (
    <td
      id="lost-cards-title"
      colSpan="2"
      style={{ border: '1px solid white', textAlign: 'center' }}
    >
      Lost Cards
      <br />
      <table id="lost-table">
        <tbody>
          <tr>
            {firstRow.map((card) => (
              <CardContainer
                card={card}
                cardClass={'chooseCards'}
                containerClass={'lost'}
                cardSelected={cardSelected}
                character={character}
                key={card.title}
                onClick={handleOnClick}
              />
            ))}
          </tr>
          <tr>
            {secondRow.map((card) => (
              <CardContainer
                card={card}
                cardClass={'chooseCards'}
                containerClass={'lost'}
                cardSelected={cardSelected}
                character={character}
                key={card.title}
                onClick={handleOnClick}
              />
            ))}
          </tr>
          <tr>
            {thirdRow.map((card) => (
              <CardContainer
                card={card}
                cardClass={'chooseCards'}
                containerClass={'lost'}
                cardSelected={cardSelected}
                character={character}
                key={card.title}
                onClick={handleOnClick}
              />
            ))}
          </tr>
        </tbody>
      </table>
      <button
        id="recover-lost"
        className="button"
        disabled={Object.keys(selectedCard).length === 0}
        onClick={() => handleRecoverLostCard(selectedCard)}
        type="button"
        title="Must Have a Lost Card Selected"
      >
        Recover Lost Card
      </button>
    </td>
  )
}

function SettingsMenu({ setPlayerStats }) {
  return (
    <>
      <StackView>
        <Text>Settings</Text>
        <CheckboxCard
          onChange={(e) => setPlayerStats(e.target.checked)}
          key="stats"
          title="Player Stats"
        />
      </StackView>
    </>
  )
}

export default PlayArea
