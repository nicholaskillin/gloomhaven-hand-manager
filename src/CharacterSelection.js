import React, { useState } from 'react'
import Konami from 'react-konami-code'

function CharacterSelection({
  handleSetCharacter,
  handleSetLevel,
  handleStaffOfCommand,
  level,
}) {
  const [characterName, setCharacterName] = useState('')
  const [bladeSwarmUnlocked, setBladeSwarmUnlocked] = useState(false)

  function selectCharacter(characterName) {
    setCharacterName(characterName)
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
        <table>
          <tbody>
            <tr>
              <td onClick={() => selectCharacter('brute')}>
                <img
                  id="brute"
                  className={
                    characterName === 'brute'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/br-icon.png"
                  alt="brute"
                />
                <br />
                <p className="character-title" align="center">
                  Brute
                </p>
              </td>
              <td onClick={() => selectCharacter('cragheart')}>
                <img
                  id="cragheart"
                  className={
                    characterName === 'cragheart'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/ch-icon.png"
                  alt="cragheart"
                />
                <br />
                <p className="character-title" align="center">
                  Cragheart
                </p>
              </td>
              <td onClick={() => selectCharacter('mindthief')}>
                <img
                  id="mindthief"
                  className={
                    characterName === 'mindthief'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/mt-icon.png"
                  alt="mindthief"
                />
                <br />
                <p className="character-title" align="center">
                  Mindthief
                </p>
              </td>
            </tr>
            <tr>
              <td onClick={() => selectCharacter('scoundrel')}>
                <img
                  id="scoundrel"
                  className={
                    characterName === 'scoundrel'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/sc-icon.png"
                  alt="scoundrel"
                />
                <br />
                <p className="character-title" align="center">
                  Scoundrel
                </p>
              </td>
              <td onClick={() => selectCharacter('spellweaver')}>
                <img
                  id="spellweaver"
                  className={
                    characterName === 'spellweaver'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/sw-icon.png"
                  alt="spellweaver"
                />
                <br />
                <p className="character-title" align="center">
                  Spellweaver
                </p>
              </td>
              <td onClick={() => selectCharacter('tinkerer')}>
                <img
                  id="tinkerer"
                  className={
                    characterName === 'tinkerer'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/ti-icon.png"
                  alt="tinkerer"
                />
                <br />
                <p className="character-title" align="center">
                  Tinkerer
                </p>
              </td>
            </tr>
            <tr>
              <td
                id="beastTyrantOption"
                onClick={() => selectCharacter('beastTyrant')}
              >
                <img
                  id="beastTyrant"
                  className={
                    characterName === 'beastTyrant'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/bt-icon.png"
                  alt="beastTyrant"
                />
                <br />
                <div>
                  <div
                    id="beastTyrantStaffLabel"
                    className={
                      characterName === 'beastTyrant'
                        ? 'solo-scenario-label'
                        : 'hiding'
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
                        characterName === 'beastTyrant'
                          ? 'slider'
                          : 'slider hiding'
                      }
                    />
                  </label>
                </div>
                <p className="character-title" align="center">
                  "Two Minis"
                </p>
              </td>
              <td onClick={() => selectCharacter('doomStalker')}>
                <img
                  id="doomStalker"
                  className={
                    characterName === 'doomStalker'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/ds-icon.png"
                  alt="doomStalker"
                />
                <br />
                <p className="character-title" align="center">
                  "Spiky Face"
                </p>
              </td>
              <td onClick={() => selectCharacter('nightshroud')}>
                <img
                  id="nightshroud"
                  className={
                    characterName === 'nightshroud'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/ns-icon.png"
                  alt="nightshroud"
                />
                <br />
                <p className="character-title" align="center">
                  "Eclipse"
                </p>
              </td>
            </tr>
            <tr>
              <td onClick={() => selectCharacter('quartermaster')}>
                <img
                  id="quartermaster"
                  className={
                    characterName === 'quartermaster'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/qm-icon.png"
                  alt="quartermaster"
                />
                <br />
                <p className="character-title" align="center">
                  "Three Spears"
                </p>
              </td>
              <td onClick={() => selectCharacter('elementalist')}>
                <img
                  id="elementalist"
                  className={
                    characterName === 'elementalist'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/el-icon.png"
                  alt="elementalist"
                />
                <br />
                <p className="character-title" align="center">
                  "Triangles"
                </p>
              </td>
              <td onClick={() => selectCharacter('sunkeeper')}>
                <img
                  id="sunkeeper"
                  className={
                    characterName === 'sunkeeper'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/sk-icon.png"
                  alt="sunkeeper"
                />
                <br />
                <p className="character-title" align="center">
                  "Sun"
                </p>
              </td>
            </tr>
            <tr>
              <td onClick={() => selectCharacter('summoner')}>
                <img
                  id="summoner"
                  className={
                    characterName === 'summoner'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/su-icon.png"
                  alt="summoner"
                />
                <br />
                <p className="character-title" align="center">
                  "Circles"
                </p>
              </td>
              <td onClick={() => selectCharacter('berserker')}>
                <img
                  id="berserker"
                  className={
                    characterName === 'berserker'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/be-icon.png"
                  alt="berserker"
                />
                <br />
                <p className="character-title" align="center">
                  "Lightning"
                </p>
              </td>
              <td onClick={() => selectCharacter('soothsinger')}>
                <img
                  id="soothsinger"
                  className={
                    characterName === 'soothsinger'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/ss-icon.png"
                  alt="soothsinger"
                />
                <br />
                <p className="character-title" align="center">
                  "Music Notes"
                </p>
              </td>
            </tr>
            <tr>
              <td onClick={() => selectCharacter('sawbones')}>
                <img
                  id="sawbones"
                  className={
                    characterName === 'sawbones'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/sb-icon.png"
                  alt="sawbones"
                />
                <br />
                <p className="character-title" align="center">
                  "Saw"
                </p>
              </td>
              <td onClick={() => selectCharacter('plaqueherald')}>
                <img
                  id="plagueherald"
                  className={
                    characterName === 'plaqueherald'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/ph-icon.png"
                  alt="plaqueherald"
                />
                <br />
                <p className="character-title" align="center">
                  "Cthulhu"
                </p>
              </td>
              <td
                className={!bladeSwarmUnlocked ? 'hiding' : ''}
                onClick={() => selectCharacter('bladeswarm')}
              >
                <img
                  id="bladeswarm"
                  className={
                    characterName === 'bladeswarm'
                      ? 'character active character-selected'
                      : 'character active'
                  }
                  src="./images/character-icons/bs-icon.png"
                  alt="bladeswarm"
                />
                <br />
                <p className="character-title" align="center">
                  Bladeswarm
                </p>
              </td>
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

export default CharacterSelection
