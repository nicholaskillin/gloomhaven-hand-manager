import React, { useState } from 'react'
import _ from 'lodash'
import CardContainer from './CardContainer'

function PlayArea({ character, hand, setHand, staffOfCommand }) {
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

  function moveCardToLost(cardLost) {
    // TODO: Make this work
    console.log('Lose', cardLost)
    let i = _.indexOf(chosenCards, cardLost)
    let newChosenCards = [...chosenCards]
    newChosenCards[i] = {}
    setChosenCards(newChosenCards)
    setLostCards([...lostCards, cardLost])
    if (!anyChosenCardsLeft(newChosenCards)) {
      setHasCardsInPlay(false)
    }
  }

  function moveCardToActive(cardActivated) {
    // TODO: Is there a limit to the number of active cards?
    console.log(`activate`, cardActivated)
    let i = _.indexOf(chosenCards, cardActivated)
    let newChosenCards = [...chosenCards]
    newChosenCards[i] = {}
    setChosenCards(newChosenCards)
    setActiveCards([...activeCards, cardActivated])
    if (!anyChosenCardsLeft(newChosenCards)) {
      setHasCardsInPlay(false)
    }
  }

  function handleMoveCardBackToHand(cardRecovered) {
    setHand([...hand, cardRecovered])
  }

  function removeCardFromDiscard(card) {
    _.remove(discardedCards, card)
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
                moveCardToActive={moveCardToActive}
                moveCardToDiscard={moveCardToDiscard}
                moveCardToLost={moveCardToLost}
                staffOfCommand={staffOfCommand}
              />
              <ActiveCards character={character} activeCards={activeCards} />
            </tr>
            <tr>
              <DiscardedCards
                character={character}
                discardedCards={discardedCards}
                handleMoveCardBackToHand={handleMoveCardBackToHand}
                removeCardFromDiscard={removeCardFromDiscard}
              />
              <LostCards character={character} lostCards={lostCards} />
            </tr>
          </tbody>
        </table>
      </div>
      <HandCards
        character={character}
        hand={hand}
        moveCardsToChosen={moveCardsToChosen}
        hasCardsInPlay={hasCardsInPlay}
        staffOfCommand={staffOfCommand}
      />
      <div id="zoomModal">
        <div id="zoomContent">
          <h2 style={{ color: 'black', textAlign: 'center' }}>
            Played Modifiers
          </h2>
          <span className="close">&times;</span>
          <div id="used-modifier-cards"></div>
        </div>
      </div>
    </>
  )
}

function DiscardedCards({
  character,
  discardedCards,
  handleMoveCardBackToHand,
  removeCardFromDiscard,
}) {
  const [selectedCards, setSelectedCards] = useState([])
  const firstRow = discardedCards.slice(0, 5)
  const secondRow = discardedCards.slice(5, 10)
  const thirdRow = discardedCards.slice(10, 15)

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

  function handleRecoverDiscardedCard() {
    handleMoveCardBackToHand(selectedCards[0])
    removeCardFromDiscard(selectedCards[0])
    setSelectedCards([])
  }

  return (
    <td
      id="discarded-cards-title"
      colSpan="2"
      style={{ border: '1px solid white', textAlign: 'center' }}
    >
      Discarded Cards
      <br />
      <table id="discard-table">
        <tbody>
          <tr>
            {firstRow.map((card) => (
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
        disabled={discardedCards.length < 2}
        className="button"
        type="button"
        title="Must Have At Least 2 Discarded Cards And No Cards in Play"
      >
        Short Rest
      </button>
      <button
        id="long-rest-button"
        disabled={discardedCards.length < 2}
        className="button"
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
        disabled={true}
        type="button"
        title="Must Be Resting"
      >
        Lose Card From Rest
      </button>
      <button
        id="reroll-random-card-button"
        className="button"
        disabled={true}
        type="button"
        title="Can Only Be Used Once Per Short Rest"
      >
        Reroll Lost Card
      </button>
      <button
        id="lose-discard-button2"
        className="button"
        disabled={selectedCards.length !== 2}
        type="button"
        title="Must Have A Discarded Card Selected - Must Lose 2 to Avoid Damage"
      >
        Lose Cards To Avoid Damage
      </button>
    </td>
  )
}

function ActiveCards({ character, activeCards }) {
  // NEXT: TODO: Figure out how I'm going to display these. I could use CardContainer, but how will trackers work?
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
            <td id="active4" className="flipped active-card">
              <br />
              <button
                id="tracker4-1"
                className="tracker-button tracker-button4 invisible"
                type="button"
              >
                1
              </button>
              <button
                id="tracker4-2"
                className="tracker-button4 invisible"
                type="button"
              >
                2
              </button>
              <button
                id="tracker4-3"
                className="tracker-button4 invisible"
                type="button"
              >
                3
              </button>
              <button
                id="tracker4-4"
                className="tracker-button4 invisible"
                type="button"
              >
                4
              </button>
              <button
                id="tracker4-5"
                className="tracker-button4 invisible"
                type="button"
              >
                5
              </button>
              <button
                id="tracker4-6"
                className="tracker-button4 invisible"
                type="button"
              >
                6
              </button>
            </td>
            <td id="active5" className="flipped active-card">
              <br />
              <button
                id="tracker5-1"
                className="tracker-button tracker-button5 invisible"
                type="button"
              >
                1
              </button>
              <button
                id="tracker5-2"
                className="tracker-button5 invisible"
                type="button"
              >
                2
              </button>
              <button
                id="tracker5-3"
                className="tracker-button5 invisible"
                type="button"
              >
                3
              </button>
              <button
                id="tracker5-4"
                className="tracker-button5 invisible"
                type="button"
              >
                4
              </button>
              <button
                id="tracker5-5"
                className="tracker-button5 invisible"
                type="button"
              >
                5
              </button>
              <button
                id="tracker5-6"
                className="tracker-button5 invisible"
                type="button"
              >
                6
              </button>
            </td>
            <td id="active6" className="flipped active-card">
              <br />
              <button
                id="tracker6-1"
                className="tracker-button tracker-button6 invisible"
                type="button"
              >
                1
              </button>
              <button
                id="tracker6-2"
                className="tracker-button6 invisible"
                type="button"
              >
                2
              </button>
              <button
                id="tracker6-3"
                className="tracker-button6 invisible"
                type="button"
              >
                3
              </button>
              <button
                id="tracker6-4"
                className="tracker-button6 invisible"
                type="button"
              >
                4
              </button>
              <button
                id="tracker6-5"
                className="tracker-button6 invisible"
                type="button"
              >
                5
              </button>
              <button
                id="tracker6-6"
                className="tracker-button6 invisible"
                type="button"
              >
                6
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        id="discard-active-card"
        className="button tooltip"
        type="button"
        title="Must Have an Active Card Selected"
      >
        Discard Active Card
      </button>
      <button
        id="lose-active-card"
        className="button tooltip"
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
      <ModifierDeck />
    </td>
  )
}

function ModifierDeck() {
  return (
    <div id="attack-modifier-deck" align="center">
      <h2 id="mustShuffle" className="invisible" style={{ color: 'red' }}>
        Must Shuffle At End of Turn
      </h2>
      <h2 id="cardsInDeck" style={{ color: 'white' }}>
        Cards in Deck:{' '}
      </h2>
      <h6 id="blessesInDeck" style={{ color: 'white' }}>
        Extra Blesses in Deck: 0
      </h6>
      <h6 id="cursesInDeck" style={{ color: 'white' }}>
        Extra Curses in Deck: 0
      </h6>
      <img
        alt="Attack Modifier Deck"
        id="amDeck"
        className="attack-modifier"
        src="./images/modifier-deck/cardBack.png"
      />
      <img
        alt="Played Modifiers"
        id="playedModifiers"
        className="attack-modifier"
        style={{ display: 'hidden' }}
        src=""
      />
      <br />
      <button id="shuffleMods" className="button" type="button">
        Shuffle Modifiers
      </button>
      <br />
      <button id="bless" className="button" type="button">
        Bless
      </button>
      <button id="curse" className="button" type="button">
        Curse
      </button>
      <button id="add-minus-1" className="button" type="button">
        Add -1 Card
      </button>
      <button id="reset-deck" className="button" type="button">
        Reset Modifier Deck
      </button>
    </div>
  )
}

function LostCards({ character, lostCards }) {
  // TODO: Convert selectedCards here from array to a single item. Can't pick more than 1
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
  hasCardsInPlay,
  staffOfCommand,
}) {
  // TODO: Clicking on the <td> of a card instead of the image blows up the app. Test this in all areas of this page

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
            disabled={true}
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
