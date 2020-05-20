import React, { useState } from 'react'

function HandSelection({
  character,
  level,
  handleUpdateCharacter,
  handleSetStage,
}) {
  const [cardsSelected, setCardsSelected] = useState(0)
  const firstRow = character.cards.slice(0, 5)
  const secondRow = character.cards.slice(5, 10)
  const thirdRow = character.cards.slice(10, character.startingCards)
  const levelTwoCards = character.cards.filter((card) => {
    return card.level === 2
  })
  const levelThreeCards = character.cards.filter((card) => {
    return card.level === 3
  })
  const levelFourCards = character.cards.filter((card) => {
    return card.level === 4
  })
  const levelFiveCards = character.cards.filter((card) => {
    return card.level === 5
  })
  const levelSixCards = character.cards.filter((card) => {
    return card.level === 6
  })
  const levelSevenCards = character.cards.filter((card) => {
    return card.level === 7
  })
  const levelEightCards = character.cards.filter((card) => {
    return card.level === 8
  })
  const levelNineCards = character.cards.filter((card) => {
    return card.level === 9
  })
  const enchancementOptions = [
    '+1',
    'Fly/Leap',
    'Wind',
    'Ice',
    'Fire',
    'Leaf',
    'Sun',
    'Moon',
    'Wild Element',
    'Bless',
    'Curse',
    'Disarm',
    'Immobilize',
    'Wound',
    'Muddle',
    'Poison',
    'Strengthen',
    'Area',
  ]

  function handleEnhancementChange(cardTitle, id, e) {
    let updatedData = character
    const card = updatedData.cards.find((card) => card.title === cardTitle)
    let enhancement = card.enchancements.find(
      (enhancement) => enhancement.id === id
    )
    enhancement.enhancement = e.target.value
    handleUpdateCharacter(updatedData)
  }

  return (
    <div id="initial-table" className="cardSet">
      <h2 id="choose-cards-number" className="header">
        Choose {character.handSize} Cards
      </h2>
      <div align="center">
        <p id="card-counter" className="card-counter" align="center">
          {cardsSelected}/{character.handSize}
        </p>
      </div>
      <table className="cardTable" align="center">
        <tbody>
          <tr>
            <td className="level">Level 1:</td>
            {firstRow.map((card) => {
              return (
                <td key={card.title} className="chooseCardsTable">
                  <img
                    src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                    className="chooseCards"
                    alt={card.title}
                  />
                  {card.enchancements.map((enhancement) => (
                    <EnhancementIcon
                      key={enhancement.id}
                      card={card}
                      originalEnhancement={enhancement}
                    />
                  ))}
                </td>
              )
            })}
          </tr>
          <tr>
            <td className="enhancement-label" />
            {firstRow.map((card) => {
              return (
                <td key={`${card.title}-Enhancements`} className="enchancement">
                  {card.enchancements.map((enhancement, index) => {
                    return (
                      <div
                        key={`${card.title}-${index}`}
                        className="enhancement-row"
                      >
                        <label className="enhancement">Enhancement:</label>
                        <select
                          onChange={(e) =>
                            handleEnhancementChange(
                              card.title,
                              enhancement.id,
                              e
                            )
                          }
                        >
                          <option value="none">None</option>
                          {enchancementOptions.map((enhancementOption) => {
                            return (
                              <option
                                key={enhancementOption}
                                value={enhancementOption}
                              >
                                {enhancementOption}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                    )
                  })}
                </td>
              )
            })}
          </tr>
          <tr>
            <td className="level">Level 1:</td>
            {secondRow.map((card) => {
              return (
                <td key={card.title} className="chooseCardsTable">
                  <img
                    src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                    className="chooseCards"
                    alt={card.title}
                  />
                  {card.enchancements.map((enhancement) => (
                    <EnhancementIcon
                      key={enhancement.id}
                      card={card}
                      originalEnhancement={enhancement}
                    />
                  ))}
                </td>
              )
            })}
          </tr>
          <tr>
            <td className="enhancement-label" />
            {secondRow.map((card) => {
              return (
                <td key={`${card.title}-Enhancements`} className="enchancement">
                  {card.enchancements.map((enhancement, index) => {
                    return (
                      <div
                        key={`${card.title}-${index}`}
                        className="enhancement-row"
                      >
                        <label className="enhancement">Enhancement:</label>
                        <select
                          onChange={(e) =>
                            handleEnhancementChange(
                              card.title,
                              enhancement.id,
                              e
                            )
                          }
                        >
                          <option value="none">None</option>
                          {enchancementOptions.map((enhancementOption) => {
                            return (
                              <option
                                key={enhancementOption}
                                value={enhancementOption}
                              >
                                {enhancementOption}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                    )
                  })}
                </td>
              )
            })}
          </tr>
          <tr>
            <td className="level">Level 1:</td>
            {thirdRow.map((card) => {
              return (
                <td key={card.title} className="chooseCardsTable">
                  <img
                    src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                    className="chooseCards"
                    alt={card.title}
                  />
                  {card.enchancements.map((enhancement) => (
                    <EnhancementIcon
                      key={enhancement.id}
                      card={card}
                      originalEnhancement={enhancement}
                    />
                  ))}
                </td>
              )
            })}
          </tr>
          <tr>
            <td className="enhancement-label" />
            {thirdRow.map((card) => {
              return (
                <td key={`${card.title}-Enhancements`} className="enchancement">
                  {card.enchancements.map((enhancement, index) => {
                    return (
                      <div
                        key={`${card.title}-${index}`}
                        className="enhancement-row"
                      >
                        <label className="enhancement">Enhancement:</label>
                        <select
                          onChange={(e) =>
                            handleEnhancementChange(
                              card.title,
                              enhancement.id,
                              e
                            )
                          }
                        >
                          <option value="none">None</option>
                          {enchancementOptions.map((enhancementOption) => {
                            return (
                              <option
                                key={enhancementOption}
                                value={enhancementOption}
                              >
                                {enhancementOption}
                              </option>
                            )
                          })}
                        </select>
                      </div>
                    )
                  })}
                </td>
              )
            })}
          </tr>
          {level >= 2 && (
            <>
              <tr>
                <td className="level">Level 2:</td>
                {levelTwoCards.map((card) => {
                  return (
                    <td key={card.title} className="chooseCardsTable">
                      <img
                        src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                        className="chooseCards"
                        alt={card.title}
                      />
                      {card.enchancements.map((enhancement) => (
                        <EnhancementIcon
                          key={enhancement.id}
                          card={card}
                          originalEnhancement={enhancement}
                        />
                      ))}
                    </td>
                  )
                })}
                {level >= 3 && (
                  <>
                    <td className="level">Level 3:</td>
                    {levelThreeCards.map((card) => {
                      return (
                        <td key={card.title} className="chooseCardsTable">
                          <img
                            src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                            className="chooseCards"
                            alt={card.title}
                          />
                          {card.enchancements.map((enhancement) => (
                            <EnhancementIcon
                              key={enhancement.id}
                              card={card}
                              originalEnhancement={enhancement}
                            />
                          ))}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
              <tr>
                <td className="enhancement-label" />
                {levelTwoCards.map((card) => {
                  return (
                    <td
                      key={`${card.title}-Enhancements`}
                      className="enchancement"
                    >
                      {card.enchancements.map((enhancement, index) => {
                        return (
                          <div
                            key={`${card.title}-${index}`}
                            className="enhancement-row"
                          >
                            <label className="enhancement">Enhancement:</label>
                            <select
                              onChange={(e) =>
                                handleEnhancementChange(
                                  card.title,
                                  enhancement.id,
                                  e
                                )
                              }
                            >
                              <option value="none">None</option>
                              {enchancementOptions.map((enhancementOption) => {
                                return (
                                  <option
                                    key={enhancementOption}
                                    value={enhancementOption}
                                  >
                                    {enhancementOption}
                                  </option>
                                )
                              })}
                            </select>
                          </div>
                        )
                      })}
                    </td>
                  )
                })}
                {level >= 3 && (
                  <>
                    <td className="enhancement-label" />
                    {levelThreeCards.map((card) => {
                      return (
                        <td
                          key={`${card.title}-Enhancements`}
                          className="enchancement"
                        >
                          {card.enchancements.map((enhancement, index) => {
                            return (
                              <div
                                key={`${card.title}-${index}`}
                                className="enhancement-row"
                              >
                                <label className="enhancement">
                                  Enhancement:
                                </label>
                                <select
                                  onChange={(e) =>
                                    handleEnhancementChange(
                                      card.title,
                                      enhancement.id,
                                      e
                                    )
                                  }
                                >
                                  <option value="none">None</option>
                                  {enchancementOptions.map(
                                    (enhancementOption) => {
                                      return (
                                        <option
                                          key={enhancementOption}
                                          value={enhancementOption}
                                        >
                                          {enhancementOption}
                                        </option>
                                      )
                                    }
                                  )}
                                </select>
                              </div>
                            )
                          })}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
            </>
          )}
          {level >= 4 && (
            <>
              <tr>
                <td className="level">Level 4:</td>
                {levelFourCards.map((card) => {
                  return (
                    <td key={card.title} className="chooseCardsTable">
                      <img
                        src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                        className="chooseCards"
                        alt={card.title}
                      />
                      {card.enchancements.map((enhancement) => (
                        <EnhancementIcon
                          key={enhancement.id}
                          card={card}
                          originalEnhancement={enhancement}
                        />
                      ))}
                    </td>
                  )
                })}
                {level >= 5 && (
                  <>
                    <td className="level">Level 5:</td>
                    {levelFiveCards.map((card) => {
                      return (
                        <td key={card.title} className="chooseCardsTable">
                          <img
                            src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                            className="chooseCards"
                            alt={card.title}
                          />
                          {card.enchancements.map((enhancement) => (
                            <EnhancementIcon
                              key={enhancement.id}
                              card={card}
                              originalEnhancement={enhancement}
                            />
                          ))}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
              <tr>
                <td className="enhancement-label" />
                {levelFourCards.map((card) => {
                  return (
                    <td
                      key={`${card.title}-Enhancements`}
                      className="enchancement"
                    >
                      {card.enchancements.map((enhancement, index) => {
                        return (
                          <div
                            key={`${card.title}-${index}`}
                            className="enhancement-row"
                          >
                            <label className="enhancement">Enhancement:</label>
                            <select
                              onChange={(e) =>
                                handleEnhancementChange(
                                  card.title,
                                  enhancement.id,
                                  e
                                )
                              }
                            >
                              <option value="none">None</option>
                              {enchancementOptions.map((enhancementOption) => {
                                return (
                                  <option
                                    key={enhancementOption}
                                    value={enhancementOption}
                                  >
                                    {enhancementOption}
                                  </option>
                                )
                              })}
                            </select>
                          </div>
                        )
                      })}
                    </td>
                  )
                })}
                {level >= 5 && (
                  <>
                    <td className="enhancement-label" />
                    {levelFiveCards.map((card) => {
                      return (
                        <td
                          key={`${card.title}-Enhancements`}
                          className="enchancement"
                        >
                          {card.enchancements.map((enhancement, index) => {
                            return (
                              <div
                                key={`${card.title}-${index}`}
                                className="enhancement-row"
                              >
                                <label className="enhancement">
                                  Enhancement:
                                </label>
                                <select
                                  onChange={(e) =>
                                    handleEnhancementChange(
                                      card.title,
                                      enhancement.id,
                                      e
                                    )
                                  }
                                >
                                  <option value="none">None</option>
                                  {enchancementOptions.map(
                                    (enhancementOption) => {
                                      return (
                                        <option
                                          key={enhancementOption}
                                          value={enhancementOption}
                                        >
                                          {enhancementOption}
                                        </option>
                                      )
                                    }
                                  )}
                                </select>
                              </div>
                            )
                          })}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
            </>
          )}
          {level >= 6 && (
            <>
              <tr>
                <td className="level">Level 6:</td>
                {levelSixCards.map((card) => {
                  return (
                    <td key={card.title} className="chooseCardsTable">
                      <img
                        src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                        className="chooseCards"
                        alt={card.title}
                      />
                      {card.enchancements.map((enhancement) => (
                        <EnhancementIcon
                          key={enhancement.id}
                          card={card}
                          originalEnhancement={enhancement}
                        />
                      ))}
                    </td>
                  )
                })}
                {level >= 7 && (
                  <>
                    <td className="level">Level 7:</td>
                    {levelSevenCards.map((card) => {
                      return (
                        <td key={card.title} className="chooseCardsTable">
                          <img
                            src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                            className="chooseCards"
                            alt={card.title}
                          />
                          {card.enchancements.map((enhancement) => (
                            <EnhancementIcon
                              key={enhancement.id}
                              card={card}
                              originalEnhancement={enhancement}
                            />
                          ))}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
              <tr>
                <td className="enhancement-label" />
                {levelSixCards.map((card) => {
                  return (
                    <td
                      key={`${card.title}-Enhancements`}
                      className="enchancement"
                    >
                      {card.enchancements.map((enhancement, index) => {
                        return (
                          <div
                            key={`${card.title}-${index}`}
                            className="enhancement-row"
                          >
                            <label className="enhancement">Enhancement:</label>
                            <select
                              onChange={(e) =>
                                handleEnhancementChange(
                                  card.title,
                                  enhancement.id,
                                  e
                                )
                              }
                            >
                              <option value="none">None</option>
                              {enchancementOptions.map((enhancementOption) => {
                                return (
                                  <option
                                    key={enhancementOption}
                                    value={enhancementOption}
                                  >
                                    {enhancementOption}
                                  </option>
                                )
                              })}
                            </select>
                          </div>
                        )
                      })}
                    </td>
                  )
                })}
                {level >= 7 && (
                  <>
                    <td className="enhancement-label" />
                    {levelSevenCards.map((card) => {
                      return (
                        <td
                          key={`${card.title}-Enhancements`}
                          className="enchancement"
                        >
                          {card.enchancements.map((enhancement, index) => {
                            return (
                              <div
                                key={`${card.title}-${index}`}
                                className="enhancement-row"
                              >
                                <label className="enhancement">
                                  Enhancement:
                                </label>
                                <select
                                  onChange={(e) =>
                                    handleEnhancementChange(
                                      card.title,
                                      enhancement.id,
                                      e
                                    )
                                  }
                                >
                                  <option value="none">None</option>
                                  {enchancementOptions.map(
                                    (enhancementOption) => {
                                      return (
                                        <option
                                          key={enhancementOption}
                                          value={enhancementOption}
                                        >
                                          {enhancementOption}
                                        </option>
                                      )
                                    }
                                  )}
                                </select>
                              </div>
                            )
                          })}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
            </>
          )}
          {level >= 8 && (
            <>
              <tr>
                <td className="level">Level 8:</td>
                {levelEightCards.map((card) => {
                  return (
                    <td key={card.title} className="chooseCardsTable">
                      <img
                        src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                        className="chooseCards"
                        alt={card.title}
                      />
                      {card.enchancements.map((enhancement) => (
                        <EnhancementIcon
                          key={enhancement.id}
                          card={card}
                          originalEnhancement={enhancement}
                        />
                      ))}
                    </td>
                  )
                })}
                {level >= 9 && (
                  <>
                    <td className="level">Level 9:</td>
                    {levelNineCards.map((card) => {
                      return (
                        <td key={card.title} className="chooseCardsTable">
                          <img
                            src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                            className="chooseCards"
                            alt={card.title}
                          />
                          {card.enchancements.map((enhancement) => (
                            <EnhancementIcon
                              key={enhancement.id}
                              card={card}
                              originalEnhancement={enhancement}
                            />
                          ))}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
              <tr>
                <td className="enhancement-label" />
                {levelEightCards.map((card) => {
                  return (
                    <td
                      key={`${card.title}-Enhancements`}
                      className="enchancement"
                    >
                      {card.enchancements.map((enhancement, index) => {
                        return (
                          <div
                            key={`${card.title}-${index}`}
                            className="enhancement-row"
                          >
                            <label className="enhancement">Enhancement:</label>
                            <select
                              onChange={(e) =>
                                handleEnhancementChange(
                                  card.title,
                                  enhancement.id,
                                  e
                                )
                              }
                            >
                              <option value="none">None</option>
                              {enchancementOptions.map((enhancementOption) => {
                                return (
                                  <option
                                    key={enhancementOption}
                                    value={enhancementOption}
                                  >
                                    {enhancementOption}
                                  </option>
                                )
                              })}
                            </select>
                          </div>
                        )
                      })}
                    </td>
                  )
                })}
                {level >= 9 && (
                  <>
                    <td className="enhancement-label" />
                    {levelNineCards.map((card) => {
                      return (
                        <td
                          key={`${card.title}-Enhancements`}
                          className="enchancement"
                        >
                          {card.enchancements.map((enhancement, index) => {
                            return (
                              <div
                                key={`${card.title}-${index}`}
                                className="enhancement-row"
                              >
                                <label className="enhancement">
                                  Enhancement:
                                </label>
                                <select
                                  onChange={(e) =>
                                    handleEnhancementChange(
                                      card.title,
                                      enhancement.id,
                                      e
                                    )
                                  }
                                >
                                  <option value="none">None</option>
                                  {enchancementOptions.map(
                                    (enhancementOption) => {
                                      return (
                                        <option
                                          key={enhancementOption}
                                          value={enhancementOption}
                                        >
                                          {enhancementOption}
                                        </option>
                                      )
                                    }
                                  )}
                                </select>
                              </div>
                            )
                          })}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
            </>
          )}
        </tbody>
      </table>
      <div align="center">
        <button
          className="button"
          type="button"
          onClick={() => handleSetStage('selectPerks')}
        >
          Go Back To Perks
        </button>
        <button
          className="button"
          type="button"
          title="Must Have a Full Hand"
          onClick={() => handleSetStage('playing')}
        >
          Confirm Hand
        </button>
      </div>
    </div>
  )
}

function EnhancementIcon({ card, originalEnhancement }) {
  const [enhancement, setEnhancement] = useState(originalEnhancement)

  return (
    <img
      className="enhancement-icon"
      src={`./images/enhancements/${enhancement.enhancement}.png`}
      style={{ top: enhancement.top, left: enhancement.left }}
      alt={`Enhancement Name`}
    />
  )
}

export default HandSelection
