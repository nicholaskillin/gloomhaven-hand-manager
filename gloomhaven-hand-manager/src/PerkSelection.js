import React, { useState } from 'react'

function PerkSelection({ handleSetStage, characterPerks }) {
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
  
  function handleChange(id, value) {
    setPerk((prevPerks) => {
      let newPerks = [...prevPerks]
      newPerks[id].isChecked = value
      return newPerks
    })
  }

  return (
    <>
      <div id="perk-section" align="center">
        <h2 id="perks-header" className="header">
          Select Your Perks
        </h2>
        <div className="perks">
          {characterPerks.map((perkData) => (
            <div key={perkData.id}>
              {perkData.checkboxes.map((checkbox) => (
                <div
                  key={checkbox.id}
                  className={
                    perks[checkbox.id].isChecked
                      ? 'checkbox checked'
                      : 'checkbox'
                  }
                  onClick={
                    perks[checkbox.id].isChecked
                      ? () => handleChange(checkbox.id, false)
                      : () => handleChange(checkbox.id, true)
                  }
                />
              ))}
              <p>{perkData.label}</p>
            </div>
          ))}
          <button
            id="confirmPerksButton"
            className="button"
            type="button"
            onClick={() => handleSetStage('selectHand')}
          >
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
