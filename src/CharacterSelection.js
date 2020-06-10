import React, { useState, useEffect } from 'react'
import Konami from 'react-konami-code'
import Cookies from 'universal-cookie'

function CharacterSelection({
  availableCharacters,
  game,
  handleGameChange,
  handleSetCharacter,
  handleSetLevel,
  handleStaffOfCommand,
  level,
}) {
  const [characterName, setCharacterName] = useState('')
  const [bladeSwarmUnlocked, setBladeSwarmUnlocked] = useState(false)
  const cookies = new Cookies()
  const firstRow = availableCharacters.slice(0, 3)
  const secondRow = availableCharacters.slice(3, 6)
  const thirdRow = availableCharacters.slice(6, 9)
  const fourthRow = availableCharacters.slice(9, 12)
  const fifthRow = availableCharacters.slice(12, 15)
  const sixthRow = availableCharacters.slice(15, 18)

  useEffect(() => {
    let cookieInfo = cookies.getAll()
    if (cookieInfo.character) {
      selectCharacter(cookieInfo.character)
    }
    if (cookieInfo.level) {
      handleSetLevel(parseInt(cookieInfo.level, 10))
    }
  }, [])

  function selectCharacter(characterName) {
    setCharacterName(characterName)
  }

  if (bladeSwarmUnlocked) {
    alert(`You unlocked bladeswarm`)
  }

  function handleUnlockBladeSwarm() {
    setBladeSwarmUnlocked(true)
  }

  return (
    <>
      <Konami action={handleUnlockBladeSwarm} />
      <div id="select-className-section" align="center">
        <h2 className="header" align="center" style={{ color: 'white' }}>
          Select Your Character
        </h2>
        <select
          onChange={(event) => handleGameChange(event.target.value)}
          id="game-selector"
          value={game}
        >
          <option value="gloomhaven">Gloomhaven</option>
          <option value="forgottenCircles">Forgotten Circles</option>
        </select>
        <table>
          <tbody>
            <tr>
              {firstRow.map((character) => (
                <CharacterContainer
                  character={character}
                  characterName={characterName}
                  handleStaffOfCommand={handleStaffOfCommand}
                  key={character.name}
                  selectCharacter={selectCharacter}
                />
              ))}
            </tr>
            <tr>
              {secondRow.map((character) => (
                <CharacterContainer
                  character={character}
                  characterName={characterName}
                  handleStaffOfCommand={handleStaffOfCommand}
                  key={character.name}
                  selectCharacter={selectCharacter}
                />
              ))}
            </tr>
            <tr>
              {thirdRow.map((character) => (
                <CharacterContainer
                  character={character}
                  characterName={characterName}
                  handleStaffOfCommand={handleStaffOfCommand}
                  key={character.name}
                  selectCharacter={selectCharacter}
                />
              ))}
            </tr>
            <tr>
              {fourthRow.map((character) => (
                <CharacterContainer
                  character={character}
                  characterName={characterName}
                  handleStaffOfCommand={handleStaffOfCommand}
                  key={character.name}
                  selectCharacter={selectCharacter}
                />
              ))}
            </tr>
            <tr>
              {fifthRow.map((character) => (
                <CharacterContainer
                  character={character}
                  characterName={characterName}
                  handleStaffOfCommand={handleStaffOfCommand}
                  key={character.name}
                  selectCharacter={selectCharacter}
                />
              ))}
            </tr>
            <tr>
              {sixthRow.map((character) => (
                <CharacterContainer
                  character={character}
                  characterName={characterName}
                  handleStaffOfCommand={handleStaffOfCommand}
                  key={character.name}
                  selectCharacter={selectCharacter}
                />
              ))}
            </tr>
          </tbody>
        </table>
        <div id="level-selection" align="center">
          <h2 className="header" align="center" style={{ color: 'white' }}>
            Select Your Level
          </h2>
          <p id="level-counter">Level: {level}</p>
          <br />
          <button
            id="level-down"
            className="level-modifier"
            type="button"
            onClick={() => handleSetLevel(level - 1)}
            disabled={level < 2}
          >
            -
          </button>
          <button
            id="level-up"
            className="level-modifier"
            type="button"
            onClick={() => handleSetLevel(level + 1)}
            disabled={level > 8}
          >
            +
          </button>
          <br />
        </div>
        <br />
        <button
          id="confirm-character-button"
          className="button"
          type="button"
          align="center"
          title="Must Select A Character"
          onClick={() => handleSetCharacter(characterName)}
          disabled={characterName === ''}
        >
          Confirm Character
        </button>
      </div>
    </>
  )
}

function CharacterContainer({
  character,
  characterName,
  handleStaffOfCommand,
  selectCharacter,
}) {
  return (
    <td
      id={character.name === 'beastTyrant' ? 'beastTyrantOption' : ''}
      onClick={() => selectCharacter(character.name)}
    >
      <img
        id={character.name}
        className={
          characterName === character.name
            ? 'character active character-selected'
            : 'character active'
        }
        src={`./images/character-icons/${character.initials}-icon.png`}
        alt={character.name}
      />
      <br />
      {character.name === 'beastTyrant' && (
        <div>
          <div
            id="beastTyrantStaffLabel"
            className={
              characterName === 'beastTyrant' ? 'solo-scenario-label' : 'hiding'
            }
          >
            Completed solo scenario
          </div>
          <label className="switch">
            <input
              id="beastTyrantSolo"
              type="checkbox"
              onChange={(e) => handleStaffOfCommand(e.target.checked)}
            />
            <span
              id="beastTyrantStaff"
              className={
                characterName === 'beastTyrant' ? 'slider' : 'slider hiding'
              }
            />
          </label>
        </div>
      )}
      <p className="character-title" align="center">
        {character.noSpoilerName}
      </p>
    </td>
  )
}

export default CharacterSelection
