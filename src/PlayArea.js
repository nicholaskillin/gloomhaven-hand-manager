import React, { useState } from 'react'
import _ from 'lodash'
import CardContainer from './CardContainer'

function PlayArea({ character, hand, modifierDeck, setHand, staffOfCommand }) {
  const [hasCardsInPlay, setHasCardsInPlay] = useState(false)
  const [chosenCards, setChosenCards] = useState([{}, {}, {}])
  const [discardedCards, setDiscardedCards] = useState([])
  const [activeCards, setActiveCards] = useState([])
  const [lostCards, setLostCards] = useState([])

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
      _.remove(newHand, card)
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
      _.remove(newHand, card)
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

  return (
    <>
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
      </div>
      <HandCards
        character={character}
        hand={hand}
        moveThirdCardToChosen={moveThirdCardToChosen}
        moveCardsToChosen={moveCardsToChosen}
        hasCardsInPlay={hasCardsInPlay}
        staffOfCommand={staffOfCommand}
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
                cardClass={'chooseCards'}
                containerClass={'discarded'}
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
                containerClass={'discarded'}
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
        id="short-rest-button"
        disabled={discardedCards.length < 2 || resting}
        className="button"
        onClick={() => handleShortRest()}
        type="button"
        title="Must Have At Least 2 Discarded Cards And No Cards in Play"
      >
        Short Rest
      </button>
      <button
        id="long-rest-button"
        disabled={discardedCards.length < 2 || resting}
        className="button"
        onClick={() => handleLongRest()}
        type="button"
        title="Must Have At Least 2 Discarded Cards And No Cards in Play"
      >
        Long Rest
      </button>
      <button
        id="recover-discard-button"
        disabled={selectedCards.length !== 1}
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

function ModifierDeck({ modifierDeck }) {
  const [playedModifyCards, setPlayedModifyCards] = useState([])
  const [localModifierDeck, setLocalModifierDeck] = useState(modifierDeck)
  const [mustShuffle, setMustShuffle] = useState(false)
  const [extraBlessCount, setExtraBlessCount] = useState(0)
  const [extraCurseCount, setExtraCurseCount] = useState(0)
  // PICK UP HERE: add a modal component and hand showModal state
  const [displayModal, setDisplayModal] = useState(false)

  const minus1Card = {
    name: 'extraMinus1',
    image: './images/attack-modifiers/base/player-mod/am-pm-minus1.png',
  }
  const curseCard = {
    name: 'extraCurse',
    image: './images/attack-modifiers/base/player-mod/am-pm-curse.png',
  }
  const blessingCard = {
    name: 'extraBless',
    image: './images/attack-modifiers/base/player-mod/am-pm-bless.png',
  }

  function handleFlipModifier() {
    let newLocalModifierDeck = [...localModifierDeck]
    setPlayedModifyCards([...playedModifyCards, newLocalModifierDeck[0]])
    let playedCard = newLocalModifierDeck.shift()
    setLocalModifierDeck(newLocalModifierDeck)
    if (playedCard.name === 'times2' || playedCard.name === 'miss') {
      setMustShuffle(true)
    } else if (playedCard.name === 'extraBless') {
      setExtraBlessCount(extraBlessCount - 1)
    } else if (playedCard.name === 'extraCurse') {
      setExtraCurseCount(extraCurseCount - 1)
    }
  }

  function handleShuffleModifierDeck(addPlayedCards) {
    let shuffledModifierDeck = []
    if (addPlayedCards) {
      let playedMinusBlessCurseMinusOne = [...playedModifyCards]
      _.remove(playedMinusBlessCurseMinusOne, blessingCard)
      _.remove(playedMinusBlessCurseMinusOne, curseCard)
      _.remove(playedMinusBlessCurseMinusOne, minus1Card)
      shuffledModifierDeck = [
        ...localModifierDeck,
        ...playedMinusBlessCurseMinusOne,
      ]
      setPlayedModifyCards([])
      setMustShuffle(false)
    } else {
      shuffledModifierDeck = [...localModifierDeck]
    }
    for (let i = shuffledModifierDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = shuffledModifierDeck[i]
      shuffledModifierDeck[i] = shuffledModifierDeck[j]
      shuffledModifierDeck[j] = temp
    }
    setLocalModifierDeck(shuffledModifierDeck)
  }

  function handleAddBless() {
    if (extraBlessCount < 10) {
      let newLocalModifierDeck = [...localModifierDeck, blessingCard]
      // When I had it shuffle once, the bless was always the last card. Suffling twice fixes this, but there is likely a better way to do this.
      for (let i = newLocalModifierDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = newLocalModifierDeck[i]
        newLocalModifierDeck[i] = newLocalModifierDeck[j]
        newLocalModifierDeck[j] = temp
      }
      for (let i = newLocalModifierDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = newLocalModifierDeck[i]
        newLocalModifierDeck[i] = newLocalModifierDeck[j]
        newLocalModifierDeck[j] = temp
      }
      setLocalModifierDeck(newLocalModifierDeck)
      setExtraBlessCount(extraBlessCount + 1)
    }
  }

  function handleAddCurse() {
    if (extraCurseCount < 10) {
      let newLocalModifierDeck = [...localModifierDeck, curseCard]
      // When I had it shuffle once, the bless was always the last card. Suffling twice fixes this, but there is likely a better way to do this.
      for (let i = newLocalModifierDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = newLocalModifierDeck[i]
        newLocalModifierDeck[i] = newLocalModifierDeck[j]
        newLocalModifierDeck[j] = temp
      }
      for (let i = newLocalModifierDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = newLocalModifierDeck[i]
        newLocalModifierDeck[i] = newLocalModifierDeck[j]
        newLocalModifierDeck[j] = temp
      }
      setLocalModifierDeck(newLocalModifierDeck)
      setExtraCurseCount(extraCurseCount + 1)
    }
  }

  function handleAddMinusOneCard() {
    let newLocalModifierDeck = [...localModifierDeck, minus1Card]
    // When I had it shuffle once, the bless was always the last card. Suffling twice fixes this, but there is likely a better way to do this.
    for (let i = newLocalModifierDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = newLocalModifierDeck[i]
      newLocalModifierDeck[i] = newLocalModifierDeck[j]
      newLocalModifierDeck[j] = temp
    }
    for (let i = newLocalModifierDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = newLocalModifierDeck[i]
      newLocalModifierDeck[i] = newLocalModifierDeck[j]
      newLocalModifierDeck[j] = temp
    }
    setLocalModifierDeck(newLocalModifierDeck)
  }

  function handleResetModifierDeck() {
    let newLocalModifierDeck = [...localModifierDeck, ...playedModifyCards]
    // Probably a better way to do this...
    _.remove(newLocalModifierDeck, minus1Card)
    _.remove(newLocalModifierDeck, curseCard)
    _.remove(newLocalModifierDeck, blessingCard)
    setLocalModifierDeck(newLocalModifierDeck)
    setPlayedModifyCards([])
    setExtraCurseCount(0)
    setExtraBlessCount(0)
  }

  function showModal() {
    setDisplayModal(true)
  }

  function hideModal() {
    setDisplayModal(false)
  }
  return (
    <div id="attack-modifier-deck" align="center">
      {mustShuffle && (
        <h2 id="mustShuffle" style={{ color: 'red' }}>
          Must Shuffle At End of Turn
        </h2>
      )}
      <h2 id="cardsInDeck" style={{ color: 'white' }}>
        Cards in Deck:{` ${localModifierDeck.length}`}
      </h2>
      <h6 id="blessesInDeck" style={{ color: 'white' }}>
        Extra Blesses in Deck: {extraBlessCount}
      </h6>
      <h6 id="cursesInDeck" style={{ color: 'white' }}>
        Extra Curses in Deck: {extraCurseCount}
      </h6>
      {localModifierDeck.length > 0 && (
        <img
          alt="Attack Modifier Deck"
          id="amDeck"
          className="attack-modifier"
          onClick={() => handleFlipModifier()}
          src="./images/modifier-deck/cardBack.png"
        />
      )}
      {playedModifyCards.length > 0 && (
        <img
          alt="Played Modifiers"
          id="playedModifiers"
          className="attack-modifier"
          onClick={() => showModal()}
          src={playedModifyCards[playedModifyCards.length - 1].image}
        />
      )}
      <br />
      <button
        className="button"
        type="button"
        onClick={() => handleShuffleModifierDeck(true)}
      >
        Shuffle Modifiers
      </button>
      <br />
      <button className="button" type="button" onClick={() => handleAddBless()}>
        Bless
      </button>
      <button className="button" type="button" onClick={() => handleAddCurse()}>
        Curse
      </button>
      <button
        className="button"
        type="button"
        onClick={() => handleAddMinusOneCard()}
      >
        Add -1 Card
      </button>
      <button
        className="button"
        type="button"
        onClick={() => handleResetModifierDeck()}
      >
        Reset Modifier Deck
      </button>
      <ModifierModal
        handleClose={hideModal}
        playedModifierCards={playedModifyCards}
        show={displayModal}
      />
    </div>
  )
}

function ModifierModal({ handleClose, playedModifierCards, show }) {
  const style = show ? { display: 'block' } : { display: 'none' }
  return (
    <div id="zoomModal" style={style}>
      <div id="zoomContent">
        <h2 style={{ color: 'black', textAlign: 'center' }}>
          Played Modifiers
        </h2>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div id="used-modifier-cards">
          {playedModifierCards.map((card) => (
            <img alt={card.title} src={card.image} />
          ))}
        </div>
      </div>
    </div>
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

function HandCards({
  character,
  hand,
  moveCardsToChosen,
  moveThirdCardToChosen,
  hasCardsInPlay,
  staffOfCommand,
}) {
  const rowOne = hand.slice(0, 4)
  const rowTwo = hand.slice(4, 8)
  const rowThree = hand.slice(8, 12)

  const [selectedCards, setSelectedCards] = useState([])

  function handleOnClick(cardClicked) {
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
            disabled={!hasCardsInPlay || selectedCards.length !== 1}
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
          type="button"
          title="Must Have One Card Selected"
        >
          Lose Card To Avoid Damage
        </button>
      </div>
    </>
  )
}

export default PlayArea
