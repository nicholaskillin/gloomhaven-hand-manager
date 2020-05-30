import React, { useState } from 'react'
import _ from 'lodash'

// TODO PRE LAUNCH: How do I persist what perks have been selected if someone navigates away and comes back?
// TODO PRE LAUNCH: What if someone selects a perk, confirms, then comes back and unchecks it?

function PerkSelection({
  modifyModifierDeck,
  character,
  handleSetStage,
  characterPerks,
}) {
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
    // Update value of perk in state
    setPerk((prevPerks) => {
      let newPerks = [...prevPerks]
      newPerks[checkboxId].isChecked = value
      return newPerks
    })

    // Find changes needed to Attack Modifier based on this perk
    let changes = characterPerks.find((perk) => perk.id === perkId).changes

    // Add or remove the changes for this perk from state, which is used in handleConfirmPerks()
    value === true
      ? setChangesToModifierDeck([...changesToModifierDeck, ...changes])
      : changesToModifierDeck.splice(
          changesToModifierDeck.indexOf(...changes),
          changesToModifierDeck.indexOf(...changes) + 1
        )
  }

  function handleConfirmPerks() {
    // TODO: Got each function working independantly, but they don't work together. Need to combine these two functions into a single function and rework it.
    // Adding cards to the modifier deck
    let cardsToAdd = _.filter(changesToModifierDeck, { action: 'add' })
    let formattedCardsToAdd = []
    cardsToAdd.forEach((card) => {
      for (let i = 0; i < card.number; i++) {
        formattedCardsToAdd.push({
          name: card.cardTitle,
          image: `./images/attack-modifiers/${character.initials}/am-${character.initials}-${card.cardTitle}.png`,
        })
      }
    })

    // Removing cards from the modifier deck
    let cardsToRemove = _.filter(changesToModifierDeck, { action: 'remove' })
    // Send array of formatted card names to remove
    let formattedCardsToRemove = []
    cardsToRemove.forEach((card) => {
      for (let i = 0; i < card.number; i++) {
        formattedCardsToRemove.push({ name: card.cardTitle })
      }
    })
    modifyModifierDeck(formattedCardsToRemove, formattedCardsToAdd)
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
