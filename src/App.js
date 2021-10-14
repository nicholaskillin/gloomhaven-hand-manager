import './App.css'

import React, { useEffect, useState } from 'react'

import CharacterSelection from './CharacterSelection'
import CookieConsent from 'react-cookie-consent'
import Cookies from 'universal-cookie'
import HandSelection from './HandSelection'
import PerkSelection from './PerkSelection'
import PlayArea from './PlayArea'
import FeedbackModal from './FeedbackModal'
import _ from 'lodash'

function App() {
  const [stage, setStage] = useState('selectCharacter')
  const [game, setGame] = useState('gloomhaven')
  const [campaign, setCampaign] = useState(1)
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

  // Load the game selected from the cookie if possible
  useEffect(() => {
    let cookieInfo = cookies.getAll()
    if (cookieInfo.game) {
      setGame(cookieInfo.game)
    }
    if (cookieInfo.hand) {
      setHand(cookieInfo.hand)
    }
    if (cookieInfo.campaign) {
      setCampaign(parseInt(cookieInfo.campaign))
    }
  }, [])

  useEffect(() => {
    if (characterSelected && game === 'jotl') {
      let characterData = allCharacterData.find(
        (x) => x.name === character.name
      ).campaignVersions[campaign - 1]

      if (
        game === 'jotl' &&
        (campaign === 1 || campaign === 2 || campaign === 3)
      ) {
        setHand(characterData.cards)
      } else if (game === 'jotl') {
        setHand([])
      }

      cookies.set('campaign', campaign, {
        path: '/',
        maxAge: 31104000,
      })

      setCharacter(characterData)
    }
  }, [campaign])

  function getGameCharacters(gameName) {
    if (gameName === 'gloomhaven') {
      return require('./gloomhavenCharacterData.json')
    } else if (gameName === 'forgottenCircles') {
      return require(`./forgottenCirclesCharacterData.json`)
    } else if (gameName === 'jotl') {
      return require(`./jawsOfTheLionCharacterData.json`)
    }
  }

  const characterSelected = !_.isEmpty(character)

  function changeGame(gameName) {
    setGame(gameName)
  }

  function handleSetStage(stage) {
    setStage(stage)
  }

  function handleSetCharacter(characterName) {
    // Set game info in cookie for retrieval the next time they visit the site.
    cookies.set('game', game, {
      path: '/',
      maxAge: 31104000,
    })

    let characterData =
      game === 'jotl'
        ? allCharacterData.find((x) => x.name === characterName)
            .campaignVersions[campaign - 1]
        : allCharacterData.find((x) => x.name === characterName)

    if (characterName !== cookies.get('character')) {
      cookies.remove('perks')
      cookies.remove('modifierChanges')
      cookies.remove('hand')
      setHand([])
    }
    cookies.set('character', characterData.name, {
      path: '/',
      maxAge: 31104000,
    })

    if (
      game === 'jotl' &&
      (campaign === 1 || campaign === 2 || campaign === 3)
    ) {
      setHand(characterData.cards)
    } else if (game === 'jotl') {
      setHand([])
    }
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
            changeGame={changeGame}
            game={game}
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
          characterPerks={character.perks}
          handleSetStage={handleSetStage}
          resetModifierDeck={resetModifierDeck}
        />
      )}
      {stage === 'selectHand' && (
        <HandSelection
          addCardToHand={addCardToHand}
          character={character}
          game={game}
          level={level}
          hand={hand}
          handleUpdateCharacter={handleUpdateCharacter}
          handleSetStage={handleSetStage}
          removeCardFromHand={removeCardFromHand}
          {...{ campaign, setCampaign }}
        />
      )}
      {stage === 'playing' && (
        <PlayArea
          character={character}
          hand={hand}
          level={level}
          modifierDeck={modifierDeck}
          setHand={setHand}
          staffOfCommand={staffOfCommand}
        />
      )}
      <Feedback />
      <CookieConsent>
        This website uses cookies to save your selected preferences.
      </CookieConsent>
    </>
  )
}

function Feedback() {
  const [displayModal, setDisplayModal] = useState(false)

  function handleSubmitFeedback() {
    setDisplayModal(true)
  }

  function hideModal() {
    setDisplayModal(false)
  }

  return (
    <div className='footer'>
      <p>
        Did you run into a bug or do you have some feedback about the app? I'd
        love to hear about it!
      </p>
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
      <FeedbackModal show={displayModal} hideModal={hideModal} />
    </div>
  )
}

export default App
