import React, { useState } from 'react'
import './App.css'
import CharacterSelection from './CharacterSelection'
import PerkSelection from './PerkSelection'
import HandSelection from './HandSelection'
import PlayArea from './PlayArea'

function App() {
  const [stage, setStage] = useState('selectCharacter')
  const [character, setCharacter] = useState({})
  const [level, setLevel] = useState(1)
  const allCharacterData = require('./characterData.json')

  function handleSetStage(stage) {
    setStage(stage)
  }

  function handleSetCharacter(characterName) {
    let characterData = allCharacterData.find((x) => x.name === characterName)
    setCharacter(characterData, setStage('selectPerks'))
  }

  function handleUpdateCharacter(character) {
    console.log(character)
    setCharacter(character)
  }

  function handleSetLevel(level) {
    setLevel(level)
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
          handleSetStage={handleSetStage}
          characterPerks={character.perks}
        />
      )}
      {stage === 'selectHand' && (
        <HandSelection
          character={character}
          level={level}
          handleUpdateCharacter={handleUpdateCharacter}
          handleSetStage={handleSetStage}
        />
      )}
      {stage === 'playing' && <PlayArea />}
    </>
  )
}

export default App
