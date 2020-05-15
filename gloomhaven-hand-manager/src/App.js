import React, { useState } from 'react'
import './App.css'
import CharacterSelection from './CharacterSelection'
import PerkSelection from './PerkSelection'

function App() {
  const [stage, setStage] = useState('selectCharacter')
  const [character, setCharacter] = useState('')
  const [level, setLevel] = useState(1)

  function handleSetStage(stage) {
    setStage(stage)
  }

  function handleSetCharacter(character) {
    setCharacter(character)
    setStage('selectPerks')
  }

  function handleSetLevel(level) {
    console.log(level)
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
        <PerkSelection character={character} handleSetStage={handleSetStage} />
      )}
    </>
  )
}

export default App
