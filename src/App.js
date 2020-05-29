import React, { useState } from 'react'
import './App.css'
import _ from 'lodash'
import CharacterSelection from './CharacterSelection'
import PerkSelection from './PerkSelection'
import HandSelection from './HandSelection'
import PlayArea from './PlayArea'

// TODO: Get Staff of Command working
function App() {
  const [stage, setStage] = useState('selectCharacter')
  const [character, setCharacter] = useState({})
  const [level, setLevel] = useState(1)
  // TODO: Put hand back to blank state
  // const [hand, setHand] = useState([])
  const [hand, setHand] = useState([
    {
      title: 'disorienting-roar',
      level: 1,
      enhancementSpots: 0,
      enhancements: [],
      tracker: 0,
    },
    {
      title: 'spirit-swap',
      level: 1,
      enhancementSpots: 2,
      enhancements: [
        { id: 1, top: 79, left: 136, enhancement: '' },
        { id: 2, top: 79, left: 152, enhancement: '' },
      ],
      tracker: 0,
    },
    {
      title: 'venomous-ally',
      level: 1,
      enhancementSpots: 4,
      enhancements: [
        { id: 3, top: 78, left: 80, enhancement: '' },
        { id: 4, top: 78, left: 121, enhancement: '' },
        { id: 5, top: 97, left: 80, enhancement: '' },
        { id: 6, top: 225, left: 130, enhancement: '' },
      ],
      tracker: 0,
    },
    {
      title: 'relentless-ally',
      level: 1,
      enhancementSpots: 4,
      enhancements: [
        { id: 7, top: 78, left: 80, enhancement: '' },
        { id: 8, top: 78, left: 121, enhancement: '' },
        { id: 9, top: 97, left: 80, enhancement: '' },
        { id: 10, top: 223, left: 136, enhancement: '' },
      ],
      tracker: 0,
    },
    {
      title: 'concentrated-rage',
      level: 1,
      enhancementSpots: 2,
      enhancements: [
        { id: 11, top: 79, left: 139, enhancement: '' },
        { id: 12, top: 95, left: 130, enhancement: '' },
      ],
      tracker: 0,
    },
    {
      title: 'howling-bolts',
      level: 1,
      enhancementSpots: 3,
      enhancements: [
        { id: 25, top: 78, left: 138, enhancement: '' },
        { id: 26, top: 107, left: 131, enhancement: '' },
        { id: 27, top: 211, left: 136, enhancement: '' },
      ],
      tracker: 0,
    },
    {
      title: 'forceful-swipe',
      level: 1,
      enhancementSpots: 4,
      enhancements: [
        { id: 21, top: 76, left: 127, enhancement: '' },
        { id: 22, top: 85, left: 103, enhancement: '' },
        { id: 23, top: 197, left: 137, enhancement: '' },
        { id: 24, top: 216, left: 138, enhancement: '' },
      ],
      tracker: 0,
    },
    {
      title: 'maul',
      level: 1,
      enhancementSpots: 3,
      enhancements: [
        { id: 18, top: 94, left: 138, enhancement: '' },
        { id: 19, top: 94, left: 154, enhancement: '' },
        { id: 20, top: 193, left: 137, enhancement: '' },
      ],
      tracker: 0,
    },
    {
      title: 'patch-fur',
      level: 1,
      enhancementSpots: 2,
      enhancements: [
        { id: 16, top: 205, left: 133, enhancement: '' },
        { id: 17, top: 205, left: 151, enhancement: '' },
      ],
      tracker: 0,
    },
    {
      title: 'disappearing-wounds',
      level: 1,
      enhancementSpots: 3,
      enhancements: [
        { id: 13, top: 87, left: 134, enhancement: '' },
        { id: 14, top: 212, left: 138, enhancement: '' },
        { id: 15, top: 212, left: 154, enhancement: '' },
      ],
      tracker: 0,
    },
  ])
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
  const [staffOfCommand, setStaffOfCommand] = useState(false)
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
      {stage === 'playing' && (
        <PlayArea
          character={character}
          hand={hand}
          modifierDeck={modifierDeck}
          setHand={setHand}
          staffOfCommand={staffOfCommand}
        />
      )}
    </>
  )
}

export default App
