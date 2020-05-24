import React, { useState } from 'react'
import './App.css'
import _ from 'lodash'
import CharacterSelection from './CharacterSelection'
import PerkSelection from './PerkSelection'
import HandSelection from './HandSelection'
import PlayArea from './PlayArea'

function App() {
  const [stage, setStage] = useState('selectCharacter')
  const [character, setCharacter] = useState({})
  const [level, setLevel] = useState(1)
  const [hand, setHand] = useState([])
  const [modifierDeck, setModifierDeck] = useState([
    {
      name: 'plus0',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plus0',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plus0',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plus0',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plus0',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plus0',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plus1',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'plus1',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'plus1',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'plus1',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'plus1',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'minus1',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minus1',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minus1',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minus1',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minus1',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minus2',
      image: './images/attack-modifiers/base/player/am-minus2.png',
    },
    {
      name: 'plus1',
      image: './images/attack-modifiers/base/player/am-plus2.png',
    },
    {
      name: 'miss',
      image: './images/attack-modifiers/base/player/am-miss.png',
    },
    {
      name: 'times2',
      image: './images/attack-modifiers/base/player/am-x2.png',
    },
  ])
  const allCharacterData = require('./characterData.json')

  function handleSetStage(stage) {
    setStage(stage)
  }

  function handleSetCharacter(characterName) {
    let characterData = allCharacterData.find((x) => x.name === characterName)
    setCharacter(characterData, setStage('selectPerks'))
  }

  function handleUpdateCharacter(character) {
    setCharacter(character)
  }

  function handleSetLevel(level) {
    setLevel(level)
  }

  function addCardToHand(cardToAdd) {
    setHand([...hand, cardToAdd])
  }

  function removeCardFromHand(cardReceived) {
    let cardToRemove = hand.find((card) => card.title === cardReceived.title)
    let previousHand = [...hand]
    let newHand = _.reject(previousHand, ['title', cardToRemove.title])
    setHand(newHand)
  }

  function modifyModifierDeck(cardsToRemove, cardsToAdd) {
    // Function to find index for cards to remove
    function findWithAttr(array, attr, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][attr] === value) {
          return i
        }
      }
      return -1
    }

    // Remove cards from modifier deck
    // TODO: Does this work if someone has a single checkmark that removes 2 cards?
    let modifierWithCardsRemoved = [...modifierDeck]
    cardsToRemove.forEach((card) => {
      let index = findWithAttr(modifierWithCardsRemoved, 'name', card.name)
      modifierWithCardsRemoved.splice(index, 1)
    })

    // Add cards to modifier deck
    let newModifierDeck = modifierWithCardsRemoved.concat(cardsToAdd)
    console.log(newModifierDeck)

    // Set state with new deck
    setModifierDeck(newModifierDeck)
  }

  return (
    <>
      {stage === 'selectCharacter' && (
        <>
          <CharacterSelection
            handleSetCharacter={handleSetCharacter}
            handleSetLevel={handleSetLevel}
            level={level}
          />
        </>
      )}
      {stage === 'selectPerks' && (
        <PerkSelection
          modifyModifierDeck={modifyModifierDeck}
          character={character}
          handleSetStage={handleSetStage}
          characterPerks={character.perks}
        />
      )}
      {stage === 'selectHand' && (
        <HandSelection
          addCardToHand={addCardToHand}
          character={character}
          level={level}
          hand={hand}
          handleUpdateCharacter={handleUpdateCharacter}
          handleSetStage={handleSetStage}
          removeCardFromHand={removeCardFromHand}
        />
      )}
      {stage === 'playing' && <PlayArea character={character} hand={hand} />}
    </>
  )
}

export default App
