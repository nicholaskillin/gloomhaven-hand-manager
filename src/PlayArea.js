import React, { useState } from 'react'
import _ from 'lodash'
import CardContainer from './CardContainer'

function PlayArea({ character, hand, setHand, staffOfCommand }) {
  const [hasCardsInPlay, setHasCardsInPlay] = useState(false)
  const [chosenCards, setChosenCards] = useState([{}, {}, {}])

  function handlePlayCards(cards) {
    // remove selected cards from hand
    let newHand = [...hand]
    cards.forEach((card) => {
      _.remove(newHand, card)
    });
    setHand(newHand)

    // add selected cards to ChosenCards component
    let newChosenCards = [...chosenCards]
    newChosenCards[0] = cards[0]
    newChosenCards[1] = cards[1]
    setChosenCards(newChosenCards)
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
                staffOfCommand={staffOfCommand}
              />
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
                      <td id="active1" className="flipped active-card">
                        <br />
                        <button
                          id="tracker1-1"
                          className="tracker-button tracker-button1 invisible"
                          type="button"
                        >
                          1
                        </button>
                        <button
                          id="tracker1-2"
                          className="tracker-button1 invisible"
                          type="button"
                        >
                          2
                        </button>
                        <button
                          id="tracker1-3"
                          className="tracker-button1 invisible"
                          type="button"
                        >
                          3
                        </button>
                        <button
                          id="tracker1-4"
                          className="tracker-button1 invisible"
                          type="button"
                        >
                          4
                        </button>
                        <button
                          id="tracker1-5"
                          className="tracker-button1 invisible"
                          type="button"
                        >
                          5
                        </button>
                        <button
                          id="tracker1-6"
                          className="tracker-button1 invisible"
                          type="button"
                        >
                          6
                        </button>
                      </td>
                      <td id="active2" className="flipped active-card">
                        <br />
                        <button
                          id="tracker2-1"
                          className="tracker-button tracker-button2 invisible"
                          type="button"
                        >
                          1
                        </button>
                        <button
                          id="tracker2-2"
                          className="tracker-button2 invisible"
                          type="button"
                        >
                          2
                        </button>
                        <button
                          id="tracker2-3"
                          className="tracker-button2 invisible"
                          type="button"
                        >
                          3
                        </button>
                        <button
                          id="tracker2-4"
                          className="tracker-button2 invisible"
                          type="button"
                        >
                          4
                        </button>
                        <button
                          id="tracker2-5"
                          className="tracker-button2 invisible"
                          type="button"
                        >
                          5
                        </button>
                        <button
                          id="tracker2-6"
                          className="tracker-button2 invisible"
                          type="button"
                        >
                          6
                        </button>
                      </td>
                      <td id="active3" className="flipped active-card">
                        <br />
                        <button
                          id="tracker3-1"
                          className="tracker-button tracker-button3 invisible"
                          type="button"
                        >
                          1
                        </button>
                        <button
                          id="tracker3-2"
                          className="tracker-button3 invisible"
                          type="button"
                        >
                          2
                        </button>
                        <button
                          id="tracker3-3"
                          className="tracker-button3 invisible"
                          type="button"
                        >
                          3
                        </button>
                        <button
                          id="tracker3-4"
                          className="tracker-button3 invisible"
                          type="button"
                        >
                          4
                        </button>
                        <button
                          id="tracker3-5"
                          className="tracker-button3 invisible"
                          type="button"
                        >
                          5
                        </button>
                        <button
                          id="tracker3-6"
                          className="tracker-button3 invisible"
                          type="button"
                        >
                          6
                        </button>
                      </td>
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
                <button
                  id="create-active-tracker"
                  className="button tooltip"
                  type="button"
                  title="Must Have an Active Card Without a Tracker Selected"
                >
                  Create Card Tracker
                </button>
                <br />
                <p
                  id="tracker-size"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Palatino Linotype',
                    color: 'white',
                  }}
                >
                  Tracker Size: 1
                </p>
                <br />
                <button
                  id="decrease-tracker-size"
                  className="button"
                  type="button"
                >
                  -
                </button>
                <button
                  id="increase-tracker-size"
                  className="button"
                  type="button"
                >
                  +
                </button>
                <br />
              </td>
            </tr>
            <tr>
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
                      <td
                        id="discard1"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard2"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard3"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard4"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard5"
                        className="discarded flipped hiding"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="discard6"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard7"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard8"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard9"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard10"
                        className="discarded flipped hiding"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        id="discard11"
                        className="discarded flipped hiding"
                      ></td>
                      <td
                        id="discard12"
                        className="discarded flipped hiding"
                      ></td>
                    </tr>
                  </tbody>
                </table>
                <button
                  id="short-rest-button"
                  className="button"
                  type="button"
                  title="Must Have At Least 2 Discarded Cards And No Cards in Play"
                >
                  Short Rest
                </button>
                <button
                  id="long-rest-button"
                  className="button"
                  type="button"
                  title="Must Have At Least 2 Discarded Cards And No Cards in Play"
                >
                  Long Rest
                </button>
                <button
                  id="recover-discard-button"
                  className="button"
                  type="button"
                  title="Must Have A Discarded Card Selected"
                >
                  Recover Discarded Card
                </button>
                <br />
                <button
                  id="lose-discard-button"
                  className="button"
                  type="button"
                  title="Must Be Resting"
                >
                  Lose Card From Rest
                </button>
                <button
                  id="reroll-random-card-button"
                  className="button"
                  type="button"
                  title="Can Only Be Used Once Per Short Rest"
                >
                  Reroll Lost Card
                </button>
                <button
                  id="lose-discard-button2"
                  className="button not-without-more-selected"
                  type="button"
                  title="Must Have A Discarded Card Selected - Must Lose 2 to Avoid Damage"
                >
                  Lose Card To Avoid Damage
                </button>
              </td>
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
                      <td id="lost1" className="lost flipped hiding"></td>
                      <td id="lost2" className="lost flipped hiding"></td>
                      <td id="lost3" className="lost flipped hiding"></td>
                      <td id="lost4" className="lost flipped hiding"></td>
                      <td id="lost5" className="lost flipped hiding"></td>
                    </tr>
                    <tr>
                      <td id="lost6" className="lost flipped hiding"></td>
                      <td id="lost7" className="lost flipped hiding"></td>
                      <td id="lost8" className="lost flipped hiding"></td>
                      <td id="lost9" className="lost flipped hiding"></td>
                      <td id="lost10" className="lost flipped hiding"></td>
                    </tr>
                    <tr>
                      <td id="lost11" className="lost flipped hiding"></td>
                      <td id="lost12" className="lost flipped hiding"></td>
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
            </tr>
          </tbody>
        </table>
      </div>
      <HandCards
        character={character}
        hand={hand}
        handlePlayCards={handlePlayCards}
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

function ChosenCards({ character, chosenCards, staffOfCommand }) {
  const [selectedCard, setSelectedCard] = useState({})

  function cardSelected(card) {
    if (selectedCard === card) {
      return true
    }
    return false
  }

  function handleCardClick(card) {
    // Find card in character.cards
    // If card is selectedCard (remove it from selectedCard)
    // Else add it to selectedCard
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
            {Object.keys(chosenCards[0]).length === 0
              ? (
                <td id="chosen-card-1" className="card-in-play">

                  <img
                    alt="Chosen Card 1"
                    src={`./images/character-ability-cards/${character.initials}/${character.initials}-back.png`}
                    className="card"
                  />
                </td>
              )
              : (
                <CardContainer card={chosenCards[0]} cardClass={'chooseCards'} containerClass={'card-in-play'} cardSelected={cardSelected} character={character} onClick={handleCardClick} />
              )}
            {Object.keys(chosenCards[1]).length === 0
              ? (
                <td id="chosen-card-2" className="card-in-play">
                  <img
                    alt="Chosen Card 1"
                    src={`./images/character-ability-cards/${character.initials}/${character.initials}-back.png`}
                    className="card"
                  />
                </td>
              )
              : (
                <CardContainer card={chosenCards[1]} cardClass={'chooseCards'} containerClass={'card-in-play'} cardSelected={cardSelected} character={character} onClick={handleCardClick} />
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
              <CardContainer card={chosenCards[2]} cardClass={'chooseCards'} containerClass={'card-in-play'} cardSelected={cardSelected} character={character} onClick={handleCardClick} />
            )}
          </tr>
        </tbody>
      </table>
      <div>
        <br />
        <button
          id="discard-button"
          className="button tooltip"
          type="button"
          title="Must Have a Card In Play Selected"
        >
          Discard Card
        </button>
        <button
          id="lose-button"
          className="button tooltip"
          type="button"
          title="Must Have a Card In Play Selected"
        >
          Lose Card
        </button>
        <button
          id="activate-button"
          className="button tooltip"
          type="button"
          title="Must Have a Card In Play Selected"
        >
          Move Card to Active
        </button>
      </div>
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
    </td>
  )
}

function HandCards({ character, hand, handlePlayCards, staffOfCommand }) {
  let rowOne = hand.slice(0, 4)
  let rowTwo = hand.slice(4, 8)
  let rowThree = hand.slice(8, 12)

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
          disabled={selectedCards.length !== 2}
          type="button"
          title="Must Select 2 Cards, Not Have Any Cards In Play, And Not Be Resting"
          onClick={() => handlePlayCards(selectedCards)}
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
