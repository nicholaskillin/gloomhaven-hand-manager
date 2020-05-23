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
      name: 'plusZero',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plusZero',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plusZero',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plusZero',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plusZero',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plusZero',
      image: './images/attack-modifiers/base/player/am-plus0.png',
    },
    {
      name: 'plusOne',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'plusOne',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'plusOne',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'plusOne',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'plusOne',
      image: './images/attack-modifiers/base/player/am-plus1.png',
    },
    {
      name: 'minusOne',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minusOne',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minusOne',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minusOne',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minusOne',
      image: './images/attack-modifiers/base/player/am-minus1.png',
    },
    {
      name: 'minusTwo',
      image: './images/attack-modifiers/base/player/am-minus2.png',
    },
    {
      name: 'plusOne',
      image: './images/attack-modifiers/base/player/am-plus2.png',
    },
    {
      name: 'miss',
      image: './images/attack-modifiers/base/player/am-miss.png',
    },
    {
      name: 'timesTwo',
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

  function removeCardFromModifierDeck(card) {
    console.log(`You tried to remove`, card)
  }

  function addCardToModifier(card) {
    setModifierDeck([...modifierDeck, card])
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
          addCardToModifier={addCardToModifier}
          character={character}
          handleSetStage={handleSetStage}
          characterPerks={character.perks}
          removeCardFromModifierDeck={removeCardFromModifierDeck}
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
      {stage === 'playing' && <PlayArea character={character} />}
    </>
  )
}

export default App
