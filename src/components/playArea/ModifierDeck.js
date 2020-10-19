import React, {useState} from 'react'

import _ from 'lodash'

function ModifierDeck({ modifierDeck }) {
  const [playedModifyCards, setPlayedModifyCards] = useState([])
  const [localModifierDeck, setLocalModifierDeck] = useState(modifierDeck)
  const [mustShuffle, setMustShuffle] = useState(false)
  const [extraBlessCount, setExtraBlessCount] = useState(0)
  const [extraCurseCount, setExtraCurseCount] = useState(0)
  const [extraMinusOneCount, setExtraMinusOneCount] = useState(0)
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
    setExtraMinusOneCount(extraMinusOneCount + 1)
    setLocalModifierDeck(newLocalModifierDeck)
  }

  function handleRemoveMinusOneCard() {
    if (extraMinusOneCount > 0) {
      let newLocalModifierDeck = [...localModifierDeck]
      let cardIndex = _.findIndex(newLocalModifierDeck, minus1Card)
      newLocalModifierDeck.splice(cardIndex, 1)
      setLocalModifierDeck(newLocalModifierDeck)
      setExtraMinusOneCount(extraMinusOneCount - 1)
    }
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

  function handleRemoveAllCurseCards() {
    let newModDeck = [...localModifierDeck]
    _.remove(newModDeck, curseCard)
    setLocalModifierDeck(newModDeck)
    setExtraCurseCount(0)
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
        Extra Blesses in deck: {extraBlessCount}
      </h6>
      <h6 id="cursesInDeck" style={{ color: 'white' }}>
        Extra Curses in deck: {extraCurseCount}
      </h6>
      <h6 id="cursesInDeck" style={{ color: 'white' }}>
        Extra -1 cards in deck: {extraMinusOneCount}
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
        onClick={() => handleRemoveMinusOneCard()}
      >
        Remove -1 card
      </button>
      <button
        className="button"
        type="button"
        onClick={() => handleResetModifierDeck()}
      >
        Reset Modifier Deck
      </button>
      <button
        className="button"
        type="button"
        onClick={() => handleRemoveAllCurseCards()}
      >
        Remove all curse cards
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
          {playedModifierCards.map((card, index) => (
            <img alt={card.title} src={card.image} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModifierDeck
