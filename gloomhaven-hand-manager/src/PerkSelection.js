import React, { useState } from 'react'

function PerkSelection({ character, handleSetStage }) {
  const [perks, setPerk] = useState([
    {
      id: 1,
      isChecked: false,
    },
    {
      id: 2,
      isChecked: false,
    },
    {
      id: 3,
      isChecked: false,
    },
    {
      id: 4,
      isChecked: false,
    },
    {
      id: 5,
      isChecked: false,
    },
    {
      id: 6,
      isChecked: false,
    },
    {
      id: 7,
      isChecked: false,
    },
    {
      id: 8,
      isChecked: false,
    },
    {
      id: 9,
      isChecked: false,
    },
    {
      id: 10,
      isChecked: false,
    },
    {
      id: 11,
      isChecked: false,
    },
    {
      id: 12,
      isChecked: false,
    },
    {
      id: 13,
      isChecked: false,
    },
    {
      id: 14,
      isChecked: false,
    },
    {
      id: 15,
      isChecked: false,
    },
  ])
  const allCharacterData = require('./characterData.json')

  function handleChange(id) {
    setPerk((prevPerks) => {
      let newPerks = [...prevPerks]
      console.log(newPerks[id])
      newPerks[id].isChecked = !newPerks[id].isChecked
      console.log(newPerks[id])
      return newPerks
    })
  }

  let characterData = allCharacterData.find((x) => x.name === character)

  return (
    <>
      <div id="perk-section" align="center">
        <h2 id="perks-header" className="header">
          Select Your Perks
        </h2>
        <div id="cragheart-perks" className="perks">
          {characterData.perks.map((perkData) => (
            <div key={perkData.id}>
              {perkData.checkboxes.map((checkbox) => (
                <div
                  key={checkbox.id}
                  className="checkbox"
                  className={
                    perks[checkbox.id].isChecked
                      ? 'checkbox checked'
                      : 'checkbox'
                  }
                  onClick={() => handleChange(checkbox.id)}
                />
              ))}
              <p>{perkData.label}</p>
            </div>
          ))}
          <button id="confirmPerksButton" className="button" type="button">
            Confirm Perks
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={() => handleSetStage('selectCharacter')}
        >
          Go Back To Character Select
        </button>
      </div>
    </>
  )
}

export default PerkSelection
