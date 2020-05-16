import React, { useState } from 'react'

function HandSelection({ character, level, handleSetStage }) {
  const [cardsSelected, setCardsSelected] = useState(0)
  const firstRow = character.cards.slice(0, 5)
  const secondRow = character.cards.slice(5, 10)
  const thirdRow = character.cards.slice(10, character.startingCards)
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
        <tr>
          <td className="level">Level 1:</td>
          {firstRow.map((card) => {
            return (
              <td className="chooseCardsTable">
                <img
                  src={`./images/character-ability-cards/${character.initials}/${card.title}.png`}
                  className="chooseCards"
                />
              </td>
            )
          })}
        </tr>
      </table>
    </div>
  )
}

export default HandSelection

/* 
        <table className ="cardTable" align = "center">
          <tr id = "level-1">
            <td className = "level">Level 1:</td>
            <td id = "BM" className = "chooseCardsTable BM"><img  src = "" /></td>
            <td id = "EfaE" className = "chooseCardsTable EfaE"><img src = "" /></td>
            <td id = "GaG" className = "chooseCardsTable GaG"><img src = "" /></td>
            <td id = "LC" className = "chooseCardsTable LC"><img src = "" /></td>
            <td id = "OA" className = "chooseCardsTable OA"><img src = "" /></td>
          </tr>
          <tr>
            <td className="enhancement-label"></td>
            <td id="enhancement1" className="enhancement"></td>
            <td id="enhancement2" className="enhancement"></td>
            <td id="enhancement3" className="enhancement"></td>
            <td id="enhancement4" className="enhancement"></td>
            <td id="enhancement5" className="enhancement"></td>
          </tr>
          <tr id = "level-1">
            <td className = "level">Level 1:</td>
            <td id = "PR" className = "chooseCardsTable PR"><img src = "" /></td>
            <td id = "SBash" className = "chooseCardsTable SBash"><img src = "" /></td>
            <td id = "Skewer" className = "chooseCardsTable Skewer"><img src = "" /></td>
            <td id = "SD" className = "chooseCardsTable SD"><img src = "" /></td>
            <td id = "SBlow" className = "chooseCardsTable SBlow"><img src = "" /></td>
          </tr>
          <tr>
            <td className="enhancement-label"></td>
            <td id="enhancement6" className="enhancement"></td>
            <td id="enhancement7" className="enhancement"></td>
            <td id="enhancement8" className="enhancement"></td>
            <td id="enhancement9" className="enhancement"></td>
            <td id="enhancement10" className="enhancement"></td>
          </tr>
          <tr id = "level-1">
            <td className = "level">Level 1:</td>
            <td id = "Trample" className = "chooseCardsTable Trample"><img src = "" /></td>
            <td id = "WoD" className = "chooseCardsTable WoD"><img src = "" /></td>
            <td id = "WS" className = "chooseCardsTable WS"><img src = "" /></td>
            <td id = "L1-14" className = "chooseCardsTable L1-14"><img src = "" /></td>
            <td id = "L1-15" className = "chooseCardsTable L1-15"><img src = "" /></td>
          </tr>
          <tr>
            <td className="enhancement-label"></td>
            <td id="enhancement11" className="enhancement"></td>
            <td id="enhancement12" className="enhancement"></td>
            <td id="enhancement13" className="enhancement"></td>
            <td id="enhancement14" className="enhancement"></td>
            <td id="enhancement15" className="enhancement"></td>
          </tr>
          <tr id = "level-2-3">
            <td className = "level">Level 2:</td>
            <td id = "FA" className = "chooseCardsTable FA"><img src = "" /></td>
            <td id = "Juggernaut" className = "chooseCardsTable Juggernaut"><img src = "" /></td>
            <td className = "level">Level 3:</td>
            <td id = "BF" className = "chooseCardsTable BF"><img src = "" /></td>
            <td id = "HaC" className = "chooseCardsTable HaC"><img src = "" /></td>
          </tr>
          <tr>
            <td className="enhancement-label"></td>
            <td id="enhancement16" className="enhancement"></td>
            <td id="enhancement17" className="enhancement"></td>
            <td></td>
            <td id="enhancement18" className="enhancement"></td>
            <td id="enhancement19" className="enhancement"></td>
          </tr>
          <tr id = "level-4-5">
            <td className = "level">Level 4:</td>
            <td id = "DH" className = "chooseCardsTable DH"><img src = "" /></td>
            <td id = "UC" className = "chooseCardsTable UC"><img src = "" /></td>
            <td className = "level">Level 5:</td>
            <td id = "SM" className = "chooseCardsTable SM"><img src = "" /></td>
            <td id = "Whirlwind" className = "chooseCardsTable Whirlwind"><img src = "" /></td>
          </tr>
          <tr>
            <td className="enhancement-label"></td>
            <td id="enhancement20" className="enhancement"></td>
            <td id="enhancement21" className="enhancement"></td>
            <td></td>
            <td id="enhancement22" className="enhancement"></td>
            <td id="enhancement23" className="enhancement"></td>
          </tr>
          <tr id = "level-6-7">
            <td className = "level">Level 6:</td>
            <td id = "IP" className = "chooseCardsTable IP"><img src = "" /></td>
            <td id = "Quietus" className = "chooseCardsTable Quietus"><img src = "" /></td>
            <td className = "level">Level 7:</td>
            <td id = "CO" className = "chooseCardsTable CO"><img src = "" /></td>
            <td id = "DT" className = "chooseCardsTable DT"><img src = "" /></td>
          </tr>
          <tr>
            <td className="enhancement-label"></td>
            <td id="enhancement24" className="enhancement"></td>
            <td id="enhancement25" className="enhancement"></td>
            <td></td>
            <td id="enhancement26" className="enhancement"></td>
            <td id="enhancement27" className="enhancement"></td>
          </tr>
          <tr id = "level-8-9">
            <td className = "level">Level 8:</td>
            <td id = "FO" className = "chooseCardsTable FO" ><img src = "" /></td>
            <td id = "SR" className = "chooseCardsTable SR"><img src = "" /></td>
            <td className = "level">Level 9:</td>
            <td id = "FYE" className = "chooseCardsTable FYE"><img src ="" /></td>
            <td id = "KotH" className = "chooseCardsTable KotH"><img src = "" /></td>
          </tr>
          <tr>
            <td className="enhancement-label"></td>
            <td id="enhancement28" className="enhancement"></td>
            <td id="enhancement29" className="enhancement"></td>
            <td></td>
            <td id="enhancement30" className="enhancement"></td>
            <td id="enhancement31" className="enhancement"></td>
          </tr>
        </table>
      </div> */
