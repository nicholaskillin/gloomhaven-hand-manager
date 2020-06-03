import React, { useState, useEffect } from 'react'
import './App.css'
import _ from 'lodash'
import CharacterSelection from './CharacterSelection'
import PerkSelection from './PerkSelection'
import HandSelection from './HandSelection'
import PlayArea from './PlayArea'
import Cookies from 'universal-cookie'

function App() {
  const [stage, setStage] = useState('selectCharacter')
  const [game, setGame] = useState('gloomhaven')
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
  const [staffOfCommand, setStaffOfCommand] = useState(false)
  const allCharacterData = getGameCharacters(game)
  const cookies = new Cookies()

  function getGameCharacters(gameName) {
    if (gameName === 'gloomhaven') {
      return require('./gloomhavenCharacterData.json')
    }
  }
  function handleGameChange(gameName) {
    setGame(gameName)
  }

  function handleSetStage(stage) {
    setStage(stage)
  }

  function handleSetCharacter(characterName) {
    let characterData = allCharacterData.find((x) => x.name === characterName)
    if (characterName !== cookies.get('character')) {
      cookies.remove('perks')
      cookies.remove('modifierChanges')
    }
    cookies.set('character', characterData.name, {
      path: '/',
      maxAge: 31104000,
    })
    setCharacter(characterData, setStage('selectPerks'))
  }

  function handleUpdateCharacter(character) {
    setCharacter(character)
  }

  function handleSetLevel(level) {
    cookies.set('level', level, { maxAge: 31104000 })
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

    // Add cards to modifier deck
    let newModifierDeck = modifierDeck.concat(cardsToAdd)

    // Remove cards from modifier deck
    let modifierWithCardsRemoved = [...newModifierDeck]
    cardsToRemove.forEach((card) => {
      let index = findWithAttr(modifierWithCardsRemoved, 'name', card.name)
      modifierWithCardsRemoved.splice(index, 1)
    })

    // Shuffle new deck
    for (let i = modifierWithCardsRemoved.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = modifierWithCardsRemoved[i]
      modifierWithCardsRemoved[i] = modifierWithCardsRemoved[j]
      modifierWithCardsRemoved[j] = temp
    }

    // Set state with new deck
    setModifierDeck(modifierWithCardsRemoved)
  }

  function handleStaffOfCommand(selected) {
    setStaffOfCommand(selected)
  }

  function resetModifierDeck() {
    setModifierDeck([
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
  }

  return (
    <>
      {stage === 'selectCharacter' && (
        <>
          <CharacterSelection
            availableCharacters={allCharacterData}
            handleGameChange={handleGameChange}
            handleSetCharacter={handleSetCharacter}
            handleSetLevel={handleSetLevel}
            handleStaffOfCommand={handleStaffOfCommand}
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
          resetModifierDeck={resetModifierDeck}
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
