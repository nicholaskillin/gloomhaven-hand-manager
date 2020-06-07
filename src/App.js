import React, { useState } from 'react'
import './App.css'
import _ from 'lodash'
import {
  Button,
  Divider,
  Field,
  Input,
  Menu,
  Select,
  StackView,
  ThemeProvider,
  TextArea,
} from '@planning-center/ui-kit'
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
      <Feedback />
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
    <div className="footer">
      <p>
        Did you run into a bug or do you have some feedback about the app? I'd
        love to hear about it!
      </p>
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
      <FeedbackModal show={displayModal} hideModal={hideModal} />
    </div>
  )
}

function FeedbackModal({ show, hideModal }) {
  const style = show ? { display: 'block' } : { display: 'none' }
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [body, setBody] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const { Octokit } = require('@octokit/rest')
  const octokit = new Octokit({
    // auth: '1bd59bf8f5b8f2e4f101bdc142f9f98b62b13d33',
  })

  function handleSubmitForm() {
    if (title !== '' && type !== '' && body !== '') {
      setShowErrors(false)
      setSubmitted(true)
      octokit.issues
        .create({
          owner: 'nicholaskillin',
          repo: 'gloomhaven-hand-manager',
          title: title,
          body: body,
          labels: [type],
        })
        .catch((err) => {
          setSubmissionError(true)
          return
        })
    } else {
      setShowErrors(true)
    }
  }

  return (
    <div id="zoomModal" style={style}>
      <div id="zoomFeedbackContent">
        <span className="close" onClick={hideModal}>
          &times;
        </span>
        <h1>Feedback</h1>
        {showErrors && (
          <h1 style={{ color: 'red' }}>Please fill out all fields</h1>
        )}
        {!submitted && (
          <ThemeProvider>
            <StackView spacing={1}>
              <Field
                inline
                label="Subject"
                helpContent="Brief sentence describing the feedback"
              >
                <Input
                  onChange={({ target }) => setTitle(target.value)}
                  style={{ color: 'black' }}
                />
              </Field>
              <Field
                inline
                label="Type"
                helpContent="Is this a bug or a feature request?"
              >
                <Select
                  emptyValue="Bug or Feature Request?"
                  tooltip={{ title: 'Bug or Feature Request' }}
                  onChange={(e) => setType(e.value)}
                  style={{ color: 'black' }}
                >
                  <Select.Option value="bug">Bug</Select.Option>
                  <Select.Option value="featureRequest">
                    Feature Request
                  </Select.Option>
                </Select>
              </Field>
              <Field
                inline
                label="Description"
                helpContent="Please be detailed here if you found a bug. The more details the better."
              >
                <TextArea
                  onChange={({ target }) => setBody(target.value)}
                  style={{ color: 'black', height: '200px' }}
                  placeholder="Please include as many details as you can for bugs"
                />
              </Field>
              <Field inline>
                <Button onClick={handleSubmitForm}>Submit</Button>
              </Field>
            </StackView>
          </ThemeProvider>
        )}
        {submitted && !submissionError && (
          <h1>Thank you for your submission!</h1>
        )}
        {submissionError && (
          <p>
            Welp, seems like there was an issue sending your feedback. You can
            visit the{' '}
            <a
              href="https://github.com/nicholaskillin/gloomhaven-hand-manager/issues"
              target="_blank"
            >
              Github Repo
            </a>{' '}
            to provide that feedback if you'd like.
          </p>
        )}
      </div>
    </div>
  )
}

export default App
