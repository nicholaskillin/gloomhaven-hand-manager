import React, { useState } from 'react'
import _ from 'lodash'

function PerkSelection({ character, handleSetStage, characterPerks }) {
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
  const [changesToModifierDeck, setChangesToModifierDeck] = useState([])

  function handlePerkChange(perkId, checkboxId, value) {
    setPerk((prevPerks) => {
      let newPerks = [...prevPerks]
      newPerks[checkboxId].isChecked = value
      return newPerks
    })
    let changes = characterPerks.find((perk) => perk.id === perkId).changes
    setChangesToModifierDeck([...changesToModifierDeck, ...changes])
  }

  function handleConfirmPerks() {
    handleSetStage('selectHand')
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
                      ? () => handlePerkChange(perkData.id, checkbox.id, false)
                      : () => handlePerkChange(perkData.id, checkbox.id, true)
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
            onClick={() => handleConfirmPerks()}
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
