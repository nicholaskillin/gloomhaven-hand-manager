////////////////////////////////////////////////////////////////////////////////////////////////////
// This code had major spoilers. Please don't look at the code if you don't want anything spoiled.//
////////////////////////////////////////////////////////////////////////////////////////////////////

//Section for enabling use of cookies

console.log('JS Version 1.15')

//characters
let brute = document.getElementById('brute')
let cragheart = document.getElementById('cragheart')
let mindthief = document.getElementById('mindthief')
let spellweaver = document.getElementById('spellweaver')
let scoundrel = document.getElementById('scoundrel')
let tinkerer = document.getElementById('tinkerer')
let beastTyrant = document.getElementById('beastTyrant')
let doomStalker = document.getElementById('doomStalker')
let nightshroud = document.getElementById('nightshroud')
let quartermaster = document.getElementById('quartermaster')
let elementalist = document.getElementById('elementalist')
let sunkeeper = document.getElementById('sunkeeper')
let summoner = document.getElementById('summoner')
let berserker = document.getElementById('berserker')
let soothsinger = document.getElementById('soothsinger')
let sawbones = document.getElementById('sawbones')
let plagueherald = document.getElementById('plagueherald')

let beastTyrantStaff = document.getElementById('beastTyrantStaff')
let beastTyrantStaffLabel = document.getElementById('beastTyrantStaffLabel')

function setCookie(cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  var expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

function getCookie(cname) {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function checkCookie() {
  var characterSelection = getCookie('character')
  var currentLevel = getCookie('level')
  var perk1 = getCookie('perk1')
  var perk2 = getCookie('perk2')
  var perk3 = getCookie('perk3')
  var perk4 = getCookie('perk4')
  var perk5 = getCookie('perk5')
  var perk6 = getCookie('perk6')
  var perk7 = getCookie('perk7')
  var perk8 = getCookie('perk8')
  var perk9 = getCookie('perk9')
  var perk10 = getCookie('perk10')
  var perk11 = getCookie('perk11')
  var perk12 = getCookie('perk12')
  var perk13 = getCookie('perk13')
  var perk14 = getCookie('perk14')
  var perk15 = getCookie('perk15')
  let perks = [
    perk1,
    perk2,
    perk3,
    perk4,
    perk5,
    perk6,
    perk7,
    perk8,
    perk9,
    perk10,
    perk11,
    perk12,
    perk13,
    perk14,
    perk15,
  ]
  let bladeswarm = getCookie('bladeswarmUnlocked')
  if (bladeswarm) {
    unlockBladswarm()
  }
  switch (currentLevel) {
    case '1':
      levelCount = 1
      break
    case '2':
      levelCount = 2
      levelCounter.innerHTML = 'Level: ' + levelCount
      levelDown.classList.remove('at-min')
      break
    case '3':
      levelCount = 3
      levelCounter.innerHTML = 'Level: ' + levelCount
      levelDown.classList.remove('at-min')
      break
    case '4':
      levelCount = 4
      levelCounter.innerHTML = 'Level: ' + levelCount
      levelDown.classList.remove('at-min')
      break
    case '5':
      levelCount = 5
      levelCounter.innerHTML = 'Level: ' + levelCount
      levelDown.classList.remove('at-min')
      break
    case '6':
      levelCount = 6
      levelCounter.innerHTML = 'Level: ' + levelCount
      levelDown.classList.remove('at-min')
      break
    case '7':
      levelCount = 7
      levelCounter.innerHTML = 'Level: ' + levelCount
      levelDown.classList.remove('at-min')
      break
    case '8':
      levelCount = 8
      levelCounter.innerHTML = 'Level: ' + levelCount
      levelDown.classList.remove('at-min')
      break
    case '9':
      levelCount = 9
      levelCounter.innerHTML = 'Level: ' + levelCount
      levelDown.classList.remove('at-min')
      levelUp.classList.add('at-max;')
      break
    default:
      levelCount = 1
      break
  }
  if (characterSelection) {
    setCharacterFromCookie(characterSelection, perks)
  }
}

//flipped card path
let flippedCard = ''

//cards in hand
let handSize = 0
let cardHand1 = document.getElementById('card1')
let cardHand2 = document.getElementById('card2')
let cardHand3 = document.getElementById('card3')
let cardHand4 = document.getElementById('card4')
let cardHand5 = document.getElementById('card5')
let cardHand6 = document.getElementById('card6')
let cardHand7 = document.getElementById('card7')
let cardHand8 = document.getElementById('card8')
let cardHand9 = document.getElementById('card9')
let cardHand10 = document.getElementById('card10')
let cardHand11 = document.getElementById('card11')
let cardHand12 = document.getElementById('card12')

//cards that are discarded, lost, or active
let discard1 = document.getElementById('discard1')
let discard2 = document.getElementById('discard2')
let discard3 = document.getElementById('discard3')
let discard4 = document.getElementById('discard4')
let discard5 = document.getElementById('discard5')
let discard6 = document.getElementById('discard6')
let discard7 = document.getElementById('discard7')
let discard8 = document.getElementById('discard8')
let discard9 = document.getElementById('discard9')
let discard10 = document.getElementById('discard10')
let discard11 = document.getElementById('discard11')
let discard12 = document.getElementById('discard12')
let lost1 = document.getElementById('lost1')
let lost2 = document.getElementById('lost2')
let lost3 = document.getElementById('lost3')
let lost4 = document.getElementById('lost4')
let lost5 = document.getElementById('lost5')
let lost6 = document.getElementById('lost6')
let lost7 = document.getElementById('lost7')
let lost8 = document.getElementById('lost8')
let lost9 = document.getElementById('lost9')
let lost10 = document.getElementById('lost10')
let lost11 = document.getElementById('lost11')
let lost12 = document.getElementById('lost12')
let active1 = document.getElementById('active1')
let active2 = document.getElementById('active2')
let active3 = document.getElementById('active3')
let active4 = document.getElementById('active4')
let active5 = document.getElementById('active5')
let active6 = document.getElementById('active6')

//buttons for play
let playCardsButton = document.getElementById('play-cards-button')
let playExtraCardButton = document.getElementById('play-third-card')
let discardButton = document.getElementById('discard-button')
let loseButton = document.getElementById('lose-button')
let activateButton = document.getElementById('activate-button')
let recoverDiscardButton = document.getElementById('recover-discard-button')
let shortRestButton = document.getElementById('short-rest-button')
let longRestButton = document.getElementById('long-rest-button')
let discardActiveCardButton = document.getElementById('discard-active-card')
let loseActiveCardButton = document.getElementById('lose-active-card')
let recoverLostCardButton = document.getElementById('recover-lost')
let loseCardFromRestButton = document.getElementById('lose-discard-button')
let rerollShortRestButton = document.getElementById('reroll-random-card-button')
let confirmCharacterButton = document.getElementById('confirm-character-button')
let togglePoison = document.getElementById('toggle-poison')
let toggleWounded = document.getElementById('toggle-wounded')
let toggleImmobilized = document.getElementById('toggle-immobilized')
let toggleDisarmed = document.getElementById('toggle-disarmed')
let toggleStunned = document.getElementById('toggle-stunned')
let toggleMuddled = document.getElementById('toggle-muddled')
let toggleInvisible = document.getElementById('toggle-invisible')
let toggleStrengthened = document.getElementById('toggle-strengthened')
let toggleBearPoison = document.getElementById('toggle-bear-poison')
let toggleBearWounded = document.getElementById('toggle-bear-wounded')
let toggleBearImmobilized = document.getElementById('toggle-bear-immobilized')
let toggleBearDisarmed = document.getElementById('toggle-bear-disarmed')
let toggleBearStunned = document.getElementById('toggle-bear-stunned')
let toggleBearMuddled = document.getElementById('toggle-bear-muddled')
let toggleBearInvisible = document.getElementById('toggle-bear-invisible')
let toggleBearStrengthened = document.getElementById('toggle-bear-strengthened')
let xpUp = document.getElementById('xp-up')
let xpDown = document.getElementById('xp-down')
let healButton = document.getElementById('heal')
let damageButton = document.getElementById('damage')
let lootUp = document.getElementById('loot-up')
let lootDown = document.getElementById('loot-down')
let levelUp = document.getElementById('level-up')
let levelDown = document.getElementById('level-down')
let confirmLevel = document.getElementById('confirm-level')
let goBack = document.getElementById('go-back1')
let goBack2 = document.getElementById('go-back2')
let loseHandCard = document.getElementById('lose-hand-card')
let loseDiscardButton = document.getElementById('lose-discard-button2')
//play cards variables

let playCard1 = ''
let playCard2 = ''
let playCard3 = ''

//counters
let cardCount = 0
let discardCount = 0
let cardCounter = document.getElementById('card-counter')
let cardsInPlayCounter = 0
let chooseCardsNumber = document.getElementById('choose-cards-number')
let health = 0
let xpCount = 0
let maxHealth = 0
let levelCounter = document.getElementById('level-counter')
let levelCount = 1
let trackerSize = 1
let trackerSizeCounter = document.getElementById('tracker-size')
let card1TrackerCounter = 0
let card2TrackerCounter = 0
let card3TrackerCounter = 0
let card4TrackerCounter = 0
let card5TrackerCounter = 0
let card6TrackerCounter = 0
let numberOfActiveCards = 0
let bearHealth = 0
let bearMaxHealth = 0
let lootCount = 0

//status effects
let poisoned = false
let poisonedToken = document.getElementById('poisoned')
let wounded = false
let woundedToken = document.getElementById('wounded')
let disarmed = false
let disarmedToken = document.getElementById('disarmed')
let immobilized = false
let immobilizedToken = document.getElementById('immobilized')
let stunned = false
let stunnedToken = document.getElementById('stunned')
let muddled = false
let muddledToken = document.getElementById('muddled')
let strengthened = false
let strengthenedToken = document.getElementById('strengthened')
let invisible = false
let invisibleToken = document.getElementById('invisible')
let bearPoisoned = false
let bearPoisonedToken = document.getElementById('bear-poisoned')
let bearWounded = false
let bearWoundedToken = document.getElementById('bear-wounded')
let bearDisarmed = false
let bearDisarmedToken = document.getElementById('bear-disarmed')
let bearImmobilized = false
let bearImmobilizedToken = document.getElementById('bear-immobilized')
let bearStunned = false
let bearStunnedToken = document.getElementById('bear-stunned')
let bearMuddled = false
let bearMuddledToken = document.getElementById('bear-muddled')
let bearStrengthened = false
let bearStrengthenedToken = document.getElementById('bear-strengthened')
let bearInvisible = false
let bearInvisibleToken = document.getElementById('bear-invisible')

let characterSelected = false

function setCharacterFromCookie(character, perks) {
  character = getCharacter(character)
  console.log(`We found the ${character.name} in your cookie.`)
  let characterToSelect = eval(character.name)
  characterToSelect.classList.add('character-selected')
  characterSelected = true
  confirmCharacterButton.classList.remove('not-without-more-selected')
  perks.forEach(updatePerk, i)
  function updatePerk(perk, index) {
    let perkToUpdate = eval(`${character.initials}Perk${index + 1}`)
    if (perk === `${character.initials}chosen`) {
      perkToUpdate.classList.add('checked')
    } else {
      perkToUpdate.classList.remove('checked')
    }
  }
}

var characterPortraits = document.querySelectorAll('.character.active')
for (var i = 0; i < characterPortraits.length; i++) {
  ;(function () {
    var characterPortrait = characterPortraits[i]
    characterPortrait.onclick = () => {
      if (!isSelected(characterPortrait) && !characterSelected) {
        characterSelected = true
        characterPortrait.classList.add('character-selected')
        confirmCharacterButton.classList.remove('not-without-more-selected')
      } else if (!isSelected(characterPortrait) && characterSelected) {
        var charactersSelected = document.querySelectorAll(
          '.character-selected'
        )
        var selectedCharacter = charactersSelected[0]
        selectedCharacter.classList.remove('character-selected')
        characterPortrait.classList.add('character-selected')
      } else if (isSelected(characterPortrait) && characterSelected) {
        characterSelected = false
        characterPortrait.classList.remove('character-selected')
        confirmCharacterButton.classList.add('not-without-more-selected')
      }
      if (beastTyrant.classList.contains('character-selected')) {
        beastTyrantStaff.classList.remove('hiding')
        beastTyrantStaffLabel.classList.remove('hiding')
        beastTyrantStaffLabel.classList.add('solo-scenario-label')
      } else {
        if (!beastTyrantStaff.classList.contains('hiding')) {
          beastTyrantStaff.classList.add('hiding')
          beastTyrantStaffLabel.classList.add('hiding')
          beastTyrantStaffLabel.classList.remove('solo-scenario-label')
        }
      }
    }
  }.call(this, i))
}

var beastTyrantSoloCheckbox = document.getElementById('beastTyrantSolo')

let playThirdCardOption = false
beastTyrantSoloCheckbox.onclick = (e) => {
  if (e.target.checked) {
    playThirdCardOption = true
  } else {
    playThirdCardOption = false
  }
}

function confirmCharacter() {
  let lastCharacter = getCookie('character')
  let currentCharacter = document.querySelectorAll('.character-selected')[0].id
  if (currentCharacter === lastCharacter) {
    console.log(`You didn't change characters`)
  } else {
    console.log('We should wipe out your hand cards.')
  }
  if (characterSelected) {
    if (cragheart.classList.contains('character-selected')) {
      character = getCharacter('cragheart')
      setupCharacter(character)
    } else if (brute.classList.contains('character-selected')) {
      character = getCharacter('brute')
      setupCharacter(character)
    } else if (mindthief.classList.contains('character-selected')) {
      character = getCharacter('mindthief')
      setupCharacter(character)
    } else if (spellweaver.classList.contains('character-selected')) {
      character = getCharacter('spellweaver')
      setupCharacter(character)
    } else if (scoundrel.classList.contains('character-selected')) {
      character = getCharacter('scoundrel')
      setupCharacter(character)
    } else if (tinkerer.classList.contains('character-selected')) {
      character = getCharacter('tinkerer')
      setupCharacter(character)
    } else if (doomStalker.classList.contains('character-selected')) {
      character = getCharacter('doomstalker')
      setupCharacter(character)
    } else if (beastTyrant.classList.contains('character-selected')) {
      character = getCharacter('beasttyrant')
      setupCharacter(character)
    } else if (nightshroud.classList.contains('character-selected')) {
      character = getCharacter('nightshroud')
      setupCharacter(character)
    } else if (quartermaster.classList.contains('character-selected')) {
      character = getCharacter('quartermaster')
      setupCharacter(character)
    } else if (elementalist.classList.contains('character-selected')) {
      character = getCharacter('elementalist')
      setupCharacter(character)
    } else if (sunkeeper.classList.contains('character-selected')) {
      character = getCharacter('sunkeeper')
      setupCharacter(character)
    } else if (summoner.classList.contains('character-selected')) {
      character = getCharacter('summoner')
      setupCharacter(character)
    } else if (berserker.classList.contains('character-selected')) {
      character = getCharacter('berserker')
      setupCharacter(character)
    } else if (soothsinger.classList.contains('character-selected')) {
      character = getCharacter('soothsinger')
      setupCharacter(character)
    } else if (sawbones.classList.contains('character-selected')) {
      character = getCharacter('sawbones')
      setupCharacter(character)
    } else if (plagueherald.classList.contains('character-selected')) {
      character = getCharacter('plagueherald')
      setupCharacter(character)
    } else if (bladeswarm.classList.contains('character-selected')) {
      character = getCharacter('bladeswarm')
      setupCharacter(character)
    }
  }
  goBack.classList.remove('hiding')
  document.getElementById('select-class-section').classList.add('hiding')
  document.getElementById('level-selection').classList.add('hiding')
  document.getElementById('perk-section').classList.remove('hiding')
  setCookie('level', `${levelCount}`, 365)
}

function setupCharacter(character) {
  // Set character variables needed
  handSize = character.handSize
  setCookie('character', character.name, 365)

  document.getElementById(`${character.name}-perks`).classList.remove('hiding')
  flippedCard = `<img class="card flipped" src="images/character-ability-cards/${character.initials}/${character.initials}-back.png" />`

  // Hide the cards not needed on hand selection page
  for (var i = character.handSize + 1; i < 13; i++) {
    card = document.getElementById(`card${i}`)
    card.classList.add('hiding')
  }

  // Displays the character cards to choose from
  var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
  var c = 0 // variable used in the for loop below to only increment to the next card in the character deck if the last card was actually displayed.
  for (var i = 0; i < cardsToChooseFrom.length; i++) {
    ;(function () {
      var cardToChooseFrom = cardsToChooseFrom[i]
      if (
        (i < character.startingCards || i > 14) &&
        character.cards[c].level <= levelCount
      ) {
        cardToChooseFrom.innerHTML = `<img id ="${cardToChooseFrom.id}" class = "chooseCards ${character.cards[c].title}" src = "./images/character-ability-cards/${character.initials}/${character.cards[c].title}.png" />`
        cardToChooseFrom.id = character.cards[c].title
        if (character.cards[c].enhancementSpots > 0) {
          for (var j = 0; j < character.cards[c].enhancementSpots; j++) {
            enhancementArea = document.getElementById(`enhancement${i + 1}`)
            enhancementArea.innerHTML += `<div class="enhancement-row"><label class="enhancement" for="${
              character.cards[c].title
            }-enhancement-${j + 1}">Enhancement:</label><select id="${
              character.cards[c].title
            }-enhancement-${j + 1}" onChange="updateCardEnhancement('${
              character.cards[c].title
            }', ${j + 1}, '${character.cards[c].title}-enhancement-${j + 1}')">
              <option value="none">None</option>
              <option value="plusOne">+1</option>
              <option value="fly">Fly/Leap</option>
              <option value="wind">Wind</option>
              <option value="ice">Ice</option>
              <option value="fire">Fire</option>
              <option value="leaf">Leaf</option>
              <option value="sun">Sun</option>
              <option value="moon">Moon</option>
              <option value="wildElement">Wild Element</option>
              <option value="bless">Bless</option>
              <option value="curse">Curse</option>
              <option value="disarm">Disarm</option>
              <option value="immobilize">Immobilize</option>
              <option value="wound">Wound</option>
              <option value="muddle">Muddle</option>
              <option value="poison">Poison</option>
              <option value="strengthen">Strengthen</option>
              <option value="area">Area</option>
            </select></div>`
          }
        }
        c++
      } else {
        cardToChooseFrom.innerHTML = ''
      }
    }.call(this, i))
  }

  // Adds the back of the card to the hand slots
  var hand = document.querySelectorAll('.hand')
  for (var j = 0; j < hand.length; j++) {
    ;(function () {
      var handCardBack = hand[j]
      handCardBack.innerHTML = flippedCard
    }.call(this, j))
  }

  switch (levelCount) {
    case 1:
      var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
      for (var i = 15; i < cardsToChooseFrom.length; i++) {
        var cardToChooseFrom = cardsToChooseFrom[i]
        cardToChooseFrom.innerHTML = ''
      }
      var levelTitles = document.querySelectorAll('.level')
      for (var j = 3; j < levelTitles.length; j++) {
        var levelTitle = levelTitles[j]
        levelTitle.classList.add('hiding')
      }
      break
    case 2:
      var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
      for (var i = 17; i < cardsToChooseFrom.length; i++) {
        var cardToChooseFrom = cardsToChooseFrom[i]
        cardToChooseFrom.innerHTML = ''
      }
      var levelTitles = document.querySelectorAll('.level')
      for (var j = 4; j < levelTitles.length; j++) {
        var levelTitle = levelTitles[j]
        levelTitle.classList.add('hiding')
      }
      break
    case 3:
      var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
      for (var i = 19; i < cardsToChooseFrom.length; i++) {
        var cardToChooseFrom = cardsToChooseFrom[i]
        cardToChooseFrom.innerHTML = ''
      }
      var levelTitles = document.querySelectorAll('.level')
      for (var j = 5; j < levelTitles.length; j++) {
        var levelTitle = levelTitles[j]
        levelTitle.classList.add('hiding')
      }
      break
    case 4:
      var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
      for (var i = 21; i < cardsToChooseFrom.length; i++) {
        var cardToChooseFrom = cardsToChooseFrom[i]
        cardToChooseFrom.innerHTML = ''
      }
      var levelTitles = document.querySelectorAll('.level')
      for (var j = 6; j < levelTitles.length; j++) {
        var levelTitle = levelTitles[j]
        levelTitle.classList.add('hiding')
      }
      break
    case 5:
      var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
      for (var i = 23; i < cardsToChooseFrom.length; i++) {
        var cardToChooseFrom = cardsToChooseFrom[i]
        cardToChooseFrom.innerHTML = ''
      }
      var levelTitles = document.querySelectorAll('.level')
      for (var j = 7; j < levelTitles.length; j++) {
        var levelTitle = levelTitles[j]
        levelTitle.classList.add('hiding')
      }
      break
    case 6:
      var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
      for (var i = 25; i < cardsToChooseFrom.length; i++) {
        var cardToChooseFrom = cardsToChooseFrom[i]
        cardToChooseFrom.innerHTML = ''
      }
      var levelTitles = document.querySelectorAll('.level')
      for (var j = 8; j < levelTitles.length; j++) {
        var levelTitle = levelTitles[j]
        levelTitle.classList.add('hiding')
      }
      break
    case 7:
      var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
      for (var i = 27; i < cardsToChooseFrom.length; i++) {
        var cardToChooseFrom = cardsToChooseFrom[i]
        cardToChooseFrom.innerHTML = ''
      }
      var levelTitles = document.querySelectorAll('.level')
      for (var j = 9; j < levelTitles.length; j++) {
        var levelTitle = levelTitles[j]
        levelTitle.classList.add('hiding')
      }
      break
    case 8:
      var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
      for (var i = 29; i < cardsToChooseFrom.length; i++) {
        var cardToChooseFrom = cardsToChooseFrom[i]
        cardToChooseFrom.innerHTML = ''
      }
      var levelTitles = document.querySelectorAll('.level')
      for (var j = 10; j < levelTitles.length; j++) {
        var levelTitle = levelTitles[j]
        levelTitle.classList.add('hiding')
      }
      break
    case 9:
      break
  }
}

function updateCardEnhancement(cardSelected, enhancementArea, selectID) {
  let enhancementSelected = document.getElementById(`${selectID}`).value

  // Prep card for enhancement
  let cardDetails = character.cards.find(
    (card) => card.title == `${cardSelected}`
  )
  let cardToUpdate = document.getElementById(cardSelected)
  cardToUpdate.classList.add('enhanced-card')

  // Display Enhancement
  if (enhancementSelected == 'none') {
    let element = document.getElementById(
      `${cardDetails.title}-enhancementIcon-${enhancementArea}`
    )
    element.parentNode.removeChild(element)
  } else {
    let enhancement = `<img id="${
      cardDetails.title
    }-enhancementIcon-${enhancementArea}" class="enhancement-icon" src="images/enhancements/${enhancementSelected}.png" style="top: ${
      cardDetails.enchancements[enhancementArea - 1].top
    }px; left: ${cardDetails.enchancements[enhancementArea - 1].left}px;" >`
    if (
      document.getElementById(
        `${cardDetails.title}-enhancementIcon-${enhancementArea}`
      )
    ) {
      document.getElementById(
        `${cardDetails.title}-enhancementIcon-${enhancementArea}`
      ).src = `images/enhancements/${enhancementSelected}.png`
    } else {
      cardToUpdate.innerHTML += enhancement
    }
  }
}

confirmCharacterButton.onclick = () => {
  confirmCharacter()
}

function addCardToHand(spotInHand, cardSelected) {
  spotInHand.innerHTML = cardSelected.innerHTML
  spotInHand.firstChild.classList.remove('add-border')
  spotInHand.classList.add(`${cardSelected.id}`)
  spotInHand.classList.remove('empty-hand')
  setCookie(spotInHand.id, cardSelected.id, 365)
}

function removeCardFromHand(spotInHand, cardDeselected) {
  flipCard(spotInHand)
  spotInHand.classList.add('empty-hand')
  // spotInHand.classList.remove('hiding')
  confirmHandButton.classList.add('not-without-more-selected')
  setCookie(spotInHand.id, '', 365)
}

//card selecting functions
var cards = document.querySelectorAll('.chooseCardsTable')
for (var i = 0; i < cards.length; i++) {
  ;(function () {
    var card = cards[i]
    card.onclick = function () {
      if (!isSelected(card.firstChild) && cardCount < handSize) {
        card.firstChild.classList.add('add-border')
        cardCount++
        cardCounter.innerHTML = cardCount + '/' + handSize

        if (cardCount === handSize) {
          confirmHandButton.classList.remove('not-without-more-selected')
        }

        // Add card to hand when selected from the card table
        let emptyHandSpots = document.querySelectorAll('.empty-hand')
        addCardToHand(emptyHandSpots[0], card)
      } else {
        card.firstChild.classList.remove('add-border')
        let handSpotToRemove = document.getElementsByClassName(
          `hand ${this.id}`
        )
        removeCardFromHand(handSpotToRemove[0], card)
      }
    }
  }.call(this, i))
}

const isSelected = (card) => {
  if (
    card.classList.contains('add-border') ||
    card.classList.contains('discard-selected') ||
    card.classList.contains('lost-selected') ||
    card.classList.contains('active-selected') ||
    card.classList.contains('character-selected')
  ) {
    return true
  } else {
    return false
  }
}

const isFlipped = (card) => {
  if (card.firstChild.classList.contains('flipped')) {
    return true
  } else {
    return false
  }
}

const flipCard = (card) => {
  card.innerHTML = flippedCard
  if (!handChosen) {
    card.classList.forEach((classListItem) => {
      if (classListItem !== 'hand') {
        card.classList.remove(classListItem)
      }
    })
    cardCount--
    cardCounter.innerHTML = cardCount + '/' + handSize
  } else {
    card.className = ''
    card.classList.add('flipped')
    card.classList.add('hand')
    card.classList.add('hiding')
  }
}

const getCard1 = (card) => {
  playCard1 = card.innerHTML
  flipCard(card)
}

const getCard2 = (card) => {
  playCard2 = card.innerHTML
  flipCard(card)
}

const getCard3 = (card) => {
  playCard3 = card.innerHTML
  flipCard(card)
}

const flipChosenCard = (card) => {
  card.innerHTML = flippedCard
  card.className = ''
  card.classList.add('flipped')
  card.classList.add('card-in-play')
}

const flipDiscard = (card) => {
  card.innerHTML = ''
  card.className = ''
  card.classList.add('flipped')
  card.classList.add('discarded')
  card.classList.add('hiding')
}

const flipActive = (card) => {
  let images = card.querySelectorAll('img')
  console.log(images)
  images.forEach((i) => {
    i.parentNode.removeChild(i)
  })
  card.className = ''
  card.classList.add('flipped')
  card.classList.add('active-card')
  card.classList.add('hiding')
}

const flipLost = (card) => {
  card.innerHTML = flippedCard
  card.className = ''
  card.classList.add('flipped')
  card.classList.add('lost')
  card.classList.add('hiding')
}

//Confirm button variables and function
let confirmHandButton = document.getElementById('confirm-hand')
let initialTable = document.getElementById('initial-table')
let handChosen = false
let blessesInDeck = document.getElementById('blessesInDeck')
let cursesInDeck = document.getElementById('cursesInDeck')

confirmHandButton.onclick = () => {
  if (cardCount === handSize) {
    initialTable.parentNode.removeChild(initialTable)
    document.getElementById('play-game').className = 'visible'
    document
      .getElementById('chosen-cards-title')
      .setAttribute('style', 'border: 1px solid white; text-align:center')
    document
      .getElementById('active-cards-title')
      .setAttribute('style', 'border: 1px solid white; text-align:center')
    document
      .getElementById('discarded-cards-title')
      .setAttribute('style', 'border: 1px solid white; text-align:center')
    document
      .getElementById('lost-cards-title')
      .setAttribute('style', 'border: 1px solid white; text-align:center')
    confirmHandButton.classList.add('hiding')
    goBack.classList.add('hiding')
    goBack2.classList.add('hiding')
    playCardsButton.classList.remove('hiding')
    playCardsButton.classList.add('hand-button')
    cardCount = 0
    handChosen = true
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    longRestButton.classList.add('not-without-more-cards')
    shortRestButton.classList.add('not-without-more-cards')
    discardButton.classList.add('not-without-more-selected')
    loseButton.classList.add('not-without-more-selected')
    activateButton.classList.add('not-without-more-selected')
    loseCardFromRestButton.classList.add('not-unless-resting')
    rerollShortRestButton.classList.add('not-unless-resting')
    recoverDiscardButton.classList.add('not-without-more-selected')
    recoverLostCardButton.classList.add('not-without-more-selected')
    playCardsButton.classList.add('not-without-more-cards')
    discardActiveCardButton.classList.add('not-without-more-selected')
    loseActiveCardButton.classList.add('not-without-more-selected')
    createActiveTracker.classList.add('not-without-more-selected')
    healButton.classList.add('at-max')
    xpDown.classList.add('at-min')
    decreaseTrackerSize.classList.add('at-min')
    loseHandCard.classList.remove('hiding')
    if (playThirdCardOption) {
      playExtraCardButton.classList.remove('hiding')
      playExtraCardButton.classList.add('hand-button')
    }
    shuffleDeck()
  }
}

//function for clicking Hand
var hand = document.querySelectorAll('.hand')
for (var i = 0; i < hand.length; i++) {
  ;(function () {
    var handCard = hand[i]
    handCard.onclick = function () {
      if (
        isFlipped(chosenCard1) &&
        isFlipped(chosenCard2) &&
        mustLoseCount < 1
      ) {
        if (
          !isSelected(handCard) &&
          handChosen === true &&
          cardCount < 2 &&
          !isFlipped(handCard)
        ) {
          handCard.classList.add('add-border')
          cardCount++
          if (cardCount === 2) {
            playCardsButton.classList.remove('not-without-more-cards')
            loseHandCard.classList.add('not-without-more-selected')
          } else if (cardCount === 1) {
            loseHandCard.classList.remove('not-without-more-selected')
          }
        } else if (isSelected(handCard)) {
          handCard.classList.remove('add-border')
          cardCount--
          playCardsButton.classList.add('not-without-more-cards')
          if (cardCount === 1) {
            loseHandCard.classList.remove('not-without-more-selected')
          } else if (cardCount === 0) {
            loseHandCard.classList.add('not-without-more-selected')
          }
        }
      } else {
        if (
          !isSelected(handCard) &&
          handChosen === true &&
          cardCount < 1 &&
          !isFlipped(handCard)
        ) {
          handCard.classList.add('add-border')
          cardCount++
          loseHandCard.classList.remove('not-without-more-selected')
          playExtraCardButton.classList.remove('not-without-more-selected')
        } else if (
          !isSelected(handCard) &&
          handChosen === true &&
          cardCount === 1
        ) {
          for (var j = 0; j < hand.length; j++) {
            if (hand[j].classList.contains('add-border')) {
              hand[j].classList.remove('add-border')
              j = hand.length
            }
          }
          handCard.classList.add('add-border')
        } else if (isSelected(handCard)) {
          handCard.classList.remove('add-border')
          cardCount--
          loseHandCard.classList.add('not-without-more-selected')
          playExtraCardButton.classList.add('not-without-more-selected')
        }
      }
    }
  }.call(this, i))
}

playCardsButton.onclick = () => {
  //document.getElementById("hand-cards").style.backgroundColor = "red";
  if (cardCount === 2 && mustLoseCount < 1 && !shortResting && !longResting) {
    if (cardHand1.classList.contains('add-border')) {
      getCard1(cardHand1)
    } else if (cardHand2.classList.contains('add-border')) {
      getCard1(cardHand2)
    } else if (cardHand3.classList.contains('add-border')) {
      getCard1(cardHand3)
    } else if (cardHand4.classList.contains('add-border')) {
      getCard1(cardHand4)
    } else if (cardHand5.classList.contains('add-border')) {
      getCard1(cardHand5)
    } else if (cardHand6.classList.contains('add-border')) {
      getCard1(cardHand6)
    } else if (cardHand7.classList.contains('add-border')) {
      getCard1(cardHand7)
    } else if (cardHand8.classList.contains('add-border')) {
      getCard1(cardHand8)
    } else if (cardHand9.classList.contains('add-border')) {
      getCard1(cardHand9)
    } else if (cardHand10.classList.contains('add-border')) {
      getCard1(cardHand10)
    } else if (cardHand11.classList.contains('add-border')) {
      getCard1(cardHand11)
    }
    if (cardHand2.classList.contains('add-border')) {
      getCard2(cardHand2)
    } else if (cardHand3.classList.contains('add-border')) {
      getCard2(cardHand3)
    } else if (cardHand4.classList.contains('add-border')) {
      getCard2(cardHand4)
    } else if (cardHand5.classList.contains('add-border')) {
      getCard2(cardHand5)
    } else if (cardHand6.classList.contains('add-border')) {
      getCard2(cardHand6)
    } else if (cardHand7.classList.contains('add-border')) {
      getCard2(cardHand7)
    } else if (cardHand8.classList.contains('add-border')) {
      getCard2(cardHand8)
    } else if (cardHand9.classList.contains('add-border')) {
      getCard2(cardHand9)
    } else if (cardHand10.classList.contains('add-border')) {
      getCard2(cardHand10)
    } else if (cardHand11.classList.contains('add-border')) {
      getCard2(cardHand11)
    } else if (cardHand12.classList.contains('add-border')) {
      getCard2(cardHand12)
    }
    cardCount = 0
    chosenCard1.innerHTML = playCard1
    chosenCard1.classList.remove('flipped')
    chosenCard2.innerHTML = playCard2
    chosenCard2.classList.remove('flipped')
    cardsInPlayCounter = 2
    shortRestButton.classList.add('not-while-in-play')
    longRestButton.classList.add('not-while-in-play')
    loseCardFromRestButton.classList.add('not-while-in-play')
    rerollShortRestButton.classList.add('not-while-in-play')
    playCardsButton.classList.add('not-without-more-cards')
  }
}

playExtraCardButton.onclick = () => {
  let cardSelected = document.getElementsByClassName('hand add-border')[0]
  getCard3(cardSelected)
  chosenCard3.innerHTML = playCard3
  chosenCard3.classList.remove('hiding')
  playExtraCardButton.classList.add('not-without-more-selected')
  loseHandCard.classList.add('not-without-more-selected')
  cardsInPlayCounter++
  cardCount--
}

let chosenCard1 = document.getElementById('chosen-card-1')
let chosenCard2 = document.getElementById('chosen-card-2')
let chosenCard3 = document.getElementById('chosen-card-3')
let chosenCounter = 0
chosenCard1.onclick = () => {
  if (
    chosenCounter < 1 &&
    !isSelected(chosenCard1) &&
    !isFlipped(chosenCard1) &&
    mustLoseCount < 1
  ) {
    chosenCard1.classList.add('add-border')
    chosenCounter++
    discardButton.classList.remove('not-without-more-selected')
    loseButton.classList.remove('not-without-more-selected')
    activateButton.classList.remove('not-without-more-selected')
  } else if (chosenCounter === 1 && isSelected(chosenCard1)) {
    chosenCard1.classList.remove('add-border')
    chosenCounter--
    discardButton.classList.add('not-without-more-selected')
    loseButton.classList.add('not-without-more-selected')
    activateButton.classList.add('not-without-more-selected')
  } else if (
    chosenCounter == 1 &&
    !isSelected(chosenCard1) &&
    !isFlipped(chosenCard1)
  ) {
    chosenCard2.classList.remove('add-border')
    chosenCard1.classList.add('add-border')
    chosenCard3.classList.remove('add-border')
  }
}

chosenCard2.onclick = () => {
  if (
    chosenCounter < 1 &&
    !isSelected(chosenCard2) &&
    !isFlipped(chosenCard2) &&
    mustLoseCount < 1
  ) {
    chosenCard2.classList.add('add-border')
    chosenCounter++
    discardButton.classList.remove('not-without-more-selected')
    loseButton.classList.remove('not-without-more-selected')
    activateButton.classList.remove('not-without-more-selected')
  } else if (chosenCounter == 1 && isSelected(chosenCard2)) {
    chosenCard2.classList.remove('add-border')
    chosenCounter--
    discardButton.classList.add('not-without-more-selected')
    loseButton.classList.add('not-without-more-selected')
    activateButton.classList.add('not-without-more-selected')
  } else if (
    chosenCounter == 1 &&
    !isSelected(chosenCard2) &&
    !isFlipped(chosenCard2)
  ) {
    chosenCard1.classList.remove('add-border')
    chosenCard2.classList.add('add-border')
    chosenCard3.classList.remove('add-border')
  }
}

chosenCard3.onclick = () => {
  if (
    chosenCounter < 1 &&
    !isSelected(chosenCard3) &&
    !isFlipped(chosenCard3) &&
    mustLoseCount < 1
  ) {
    chosenCard3.classList.add('add-border')
    chosenCounter++
    discardButton.classList.remove('not-without-more-selected')
    loseButton.classList.remove('not-without-more-selected')
    activateButton.classList.remove('not-without-more-selected')
  } else if (chosenCounter === 1 && isSelected(chosenCard3)) {
    chosenCard3.classList.remove('add-border')
    chosenCounter--
    discardButton.classList.add('not-without-more-selected')
    loseButton.classList.add('not-without-more-selected')
    activateButton.classList.add('not-without-more-selected')
  } else if (
    chosenCounter == 1 &&
    !isSelected(chosenCard3) &&
    !isFlipped(chosenCard3)
  ) {
    chosenCard1.classList.remove('add-border')
    chosenCard2.classList.remove('add-border')
    chosenCard3.classList.add('add-border')
  }
}

discardButton.onclick = () => {
  if (chosenCard1.classList.contains('add-border') && mustLoseCount < 1) {
    if (discard1.classList.contains('flipped')) {
      discard1.innerHTML = chosenCard1.innerHTML
      discard1.classList.remove('hiding')
      discard1.classList.remove('flipped')
    } else if (discard2.classList.contains('flipped')) {
      discard2.innerHTML = chosenCard1.innerHTML
      discard2.classList.remove('hiding')
      discard2.classList.remove('flipped')
    } else if (discard3.classList.contains('flipped')) {
      discard3.innerHTML = chosenCard1.innerHTML
      discard3.classList.remove('hiding')
      discard3.classList.remove('flipped')
    } else if (discard4.classList.contains('flipped')) {
      discard4.innerHTML = chosenCard1.innerHTML
      discard4.classList.remove('hiding')
      discard4.classList.remove('flipped')
    } else if (discard5.classList.contains('flipped')) {
      discard5.innerHTML = chosenCard1.innerHTML
      discard5.classList.remove('hiding')
      discard5.classList.remove('flipped')
    } else if (discard6.classList.contains('flipped')) {
      discard6.innerHTML = chosenCard1.innerHTML
      discard6.classList.remove('hiding')
      discard6.classList.remove('flipped')
    } else if (discard7.classList.contains('flipped')) {
      discard7.innerHTML = chosenCard1.innerHTML
      discard7.classList.remove('hiding')
      discard7.classList.remove('flipped')
    } else if (discard8.classList.contains('flipped')) {
      discard8.innerHTML = chosenCard1.innerHTML
      discard8.classList.remove('hiding')
      discard8.classList.remove('flipped')
    } else if (discard9.classList.contains('flipped')) {
      discard9.innerHTML = chosenCard1.innerHTML
      discard9.classList.remove('hiding')
      discard9.classList.remove('flipped')
    } else if (discard10.classList.contains('flipped')) {
      discard10.innerHTML = chosenCard1.innerHTML
      discard10.classList.remove('hiding')
      discard10.classList.remove('flipped')
    } else if (discard11.classList.contains('flipped')) {
      discard11.innerHTML = chosenCard1.innerHTML
      discard11.classList.remove('hiding')
      discard11.classList.remove('flipped')
    } else if (discard12.classList.contains('flipped')) {
      discard12.innerHTML = chosenCard1.innerHTML
      discard12.classList.remove('hiding')
      discard12.classList.remove('flipped')
    }
    flipChosenCard(chosenCard1)
    chosenCounter--
    discardCount++
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
      discardButton.classList.add('not-without-more-selected')
      loseButton.classList.add('not-without-more-selected')
      activateButton.classList.add('not-without-more-selected')
    }
    if (discardCount > 1) {
      shortRestButton.classList.remove('not-without-more-cards')
      longRestButton.classList.remove('not-without-more-cards')
    }
    discardButton.classList.add('not-without-more-selected')
    loseButton.classList.add('not-without-more-selected')
    activateButton.classList.add('not-without-more-selected')
  }
  if (chosenCard2.classList.contains('add-border') && mustLoseCount < 1) {
    if (discard1.classList.contains('flipped')) {
      discard1.innerHTML = chosenCard2.innerHTML
      discard1.classList.remove('hiding')
      discard1.classList.remove('flipped')
    } else if (discard2.classList.contains('flipped')) {
      discard2.innerHTML = chosenCard2.innerHTML
      discard2.classList.remove('hiding')
      discard2.classList.remove('flipped')
    } else if (discard3.classList.contains('flipped')) {
      discard3.innerHTML = chosenCard2.innerHTML
      discard3.classList.remove('hiding')
      discard3.classList.remove('flipped')
    } else if (discard4.classList.contains('flipped')) {
      discard4.innerHTML = chosenCard2.innerHTML
      discard4.classList.remove('hiding')
      discard4.classList.remove('flipped')
    } else if (discard5.classList.contains('flipped')) {
      discard5.innerHTML = chosenCard2.innerHTML
      discard5.classList.remove('hiding')
      discard5.classList.remove('flipped')
    } else if (discard6.classList.contains('flipped')) {
      discard6.innerHTML = chosenCard2.innerHTML
      discard6.classList.remove('hiding')
      discard6.classList.remove('flipped')
    } else if (discard7.classList.contains('flipped')) {
      discard7.innerHTML = chosenCard2.innerHTML
      discard7.classList.remove('hiding')
      discard7.classList.remove('flipped')
    } else if (discard8.classList.contains('flipped')) {
      discard8.innerHTML = chosenCard2.innerHTML
      discard8.classList.remove('hiding')
      discard8.classList.remove('flipped')
    } else if (discard9.classList.contains('flipped')) {
      discard9.innerHTML = chosenCard2.innerHTML
      discard9.classList.remove('hiding')
      discard9.classList.remove('flipped')
    } else if (discard10.classList.contains('flipped')) {
      discard10.innerHTML = chosenCard2.innerHTML
      discard10.classList.remove('hiding')
      discard10.classList.remove('flipped')
    } else if (discard11.classList.contains('flipped')) {
      discard11.innerHTML = chosenCard2.innerHTML
      discard11.classList.remove('hiding')
      discard11.classList.remove('flipped')
    } else if (discard12.classList.contains('flipped')) {
      discard12.innerHTML = chosenCard2.innerHTML
      discard12.classList.remove('hiding')
      discard12.classList.remove('flipped')
    }
    flipChosenCard(chosenCard2)
    chosenCounter--
    discardCount++
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
    }
    if (discardCount > 1) {
      shortRestButton.classList.remove('not-without-more-cards')
      longRestButton.classList.remove('not-without-more-cards')
    }
    discardButton.classList.add('not-without-more-selected')
    loseButton.classList.add('not-without-more-selected')
    activateButton.classList.add('not-without-more-selected')
  }
  if (chosenCard3.classList.contains('add-border') && mustLoseCount < 1) {
    if (discard1.classList.contains('flipped')) {
      discard1.innerHTML = chosenCard3.innerHTML
      discard1.classList.remove('hiding')
      discard1.classList.remove('flipped')
    } else if (discard2.classList.contains('flipped')) {
      discard2.innerHTML = chosenCard3.innerHTML
      discard2.classList.remove('hiding')
      discard2.classList.remove('flipped')
    } else if (discard3.classList.contains('flipped')) {
      discard3.innerHTML = chosenCard3.innerHTML
      discard3.classList.remove('hiding')
      discard3.classList.remove('flipped')
    } else if (discard4.classList.contains('flipped')) {
      discard4.innerHTML = chosenCard3.innerHTML
      discard4.classList.remove('hiding')
      discard4.classList.remove('flipped')
    } else if (discard5.classList.contains('flipped')) {
      discard5.innerHTML = chosenCard3.innerHTML
      discard5.classList.remove('hiding')
      discard5.classList.remove('flipped')
    } else if (discard6.classList.contains('flipped')) {
      discard6.innerHTML = chosenCard3.innerHTML
      discard6.classList.remove('hiding')
      discard6.classList.remove('flipped')
    } else if (discard7.classList.contains('flipped')) {
      discard7.innerHTML = chosenCard3.innerHTML
      discard7.classList.remove('hiding')
      discard7.classList.remove('flipped')
    } else if (discard8.classList.contains('flipped')) {
      discard8.innerHTML = chosenCard3.innerHTML
      discard8.classList.remove('hiding')
      discard8.classList.remove('flipped')
    } else if (discard9.classList.contains('flipped')) {
      discard9.innerHTML = chosenCard3.innerHTML
      discard9.classList.remove('hiding')
      discard9.classList.remove('flipped')
    } else if (discard10.classList.contains('flipped')) {
      discard10.innerHTML = chosenCard3.innerHTML
      discard10.classList.remove('hiding')
      discard10.classList.remove('flipped')
    } else if (discard11.classList.contains('flipped')) {
      discard11.innerHTML = chosenCard3.innerHTML
      discard11.classList.remove('hiding')
      discard11.classList.remove('flipped')
    } else if (discard12.classList.contains('flipped')) {
      discard12.innerHTML = chosenCard3.innerHTML
      discard12.classList.remove('hiding')
      discard12.classList.remove('flipped')
    }
    chosenCard3.innerHTML = ''
    chosenCard3.classList.remove('add-border')
    chosenCard3.classList.add('hiding')
    chosenCounter--
    discardCount++
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
    }
    if (discardCount > 1) {
      shortRestButton.classList.remove('not-without-more-cards')
      longRestButton.classList.remove('not-without-more-cards')
    }
    discardButton.classList.add('not-without-more-selected')
    loseButton.classList.add('not-without-more-selected')
    activateButton.classList.add('not-without-more-selected')
  }
}

loseButton.onclick = () => {
  if (chosenCard1.classList.contains('add-border') && mustLoseCount < 1) {
    if (lost1.classList.contains('flipped')) {
      lost1.innerHTML = chosenCard1.innerHTML
      lost1.classList.remove('hiding')
      lost1.classList.remove('flipped')
    } else if (lost2.classList.contains('flipped')) {
      lost2.innerHTML = chosenCard1.innerHTML
      lost2.classList.remove('hiding')
      lost2.classList.remove('flipped')
    } else if (lost3.classList.contains('flipped')) {
      lost3.innerHTML = chosenCard1.innerHTML
      lost3.classList.remove('hiding')
      lost3.classList.remove('flipped')
    } else if (lost4.classList.contains('flipped')) {
      lost4.innerHTML = chosenCard1.innerHTML
      lost4.classList.remove('hiding')
      lost4.classList.remove('flipped')
    } else if (lost5.classList.contains('flipped')) {
      lost5.innerHTML = chosenCard1.innerHTML
      lost5.classList.remove('hiding')
      lost5.classList.remove('flipped')
    } else if (lost6.classList.contains('flipped')) {
      lost6.innerHTML = chosenCard1.innerHTML
      lost6.classList.remove('hiding')
      lost6.classList.remove('flipped')
    } else if (lost7.classList.contains('flipped')) {
      lost7.innerHTML = chosenCard1.innerHTML
      lost7.classList.remove('hiding')
      lost7.classList.remove('flipped')
    } else if (lost8.classList.contains('flipped')) {
      lost8.innerHTML = chosenCard1.innerHTML
      lost8.classList.remove('hiding')
      lost8.classList.remove('flipped')
    } else if (lost9.classList.contains('flipped')) {
      lost9.innerHTML = chosenCard1.innerHTML
      lost9.classList.remove('hiding')
      lost9.classList.remove('flipped')
    } else if (lost10.classList.contains('flipped')) {
      lost10.innerHTML = chosenCard1.innerHTML
      lost10.classList.remove('hiding')
      lost10.classList.remove('flipped')
    } else if (lost11.classList.contains('flipped')) {
      lost11.innerHTML = chosenCard1.innerHTML
      lost11.classList.remove('hiding')
      lost11.classList.remove('flipped')
    } else if (lost12.classList.contains('flipped')) {
      lost12.innerHTML = chosenCard1.innerHTML
      lost12.classList.remove('hiding')
      lost12.classList.remove('flipped')
    }
    flipChosenCard(chosenCard1)
    chosenCounter--
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
      discardButton.classList.add('not-without-more-selected')
      loseButton.classList.add('not-without-more-selected')
      activateButton.classList.add('not-without-more-selected')
    }
  }
  if (chosenCard2.classList.contains('add-border') && mustLoseCount < 1) {
    if (lost1.classList.contains('flipped')) {
      lost1.innerHTML = chosenCard2.innerHTML
      lost1.classList.remove('hiding')
      lost1.classList.remove('flipped')
    } else if (lost2.classList.contains('flipped')) {
      lost2.innerHTML = chosenCard2.innerHTML
      lost2.classList.remove('hiding')
      lost2.classList.remove('flipped')
    } else if (lost3.classList.contains('flipped')) {
      lost3.innerHTML = chosenCard2.innerHTML
      lost3.classList.remove('hiding')
      lost3.classList.remove('flipped')
    } else if (lost4.classList.contains('flipped')) {
      lost4.innerHTML = chosenCard2.innerHTML
      lost4.classList.remove('hiding')
      lost4.classList.remove('flipped')
    } else if (lost5.classList.contains('flipped')) {
      lost5.innerHTML = chosenCard2.innerHTML
      lost5.classList.remove('hiding')
      lost5.classList.remove('flipped')
    } else if (lost6.classList.contains('flipped')) {
      lost6.innerHTML = chosenCard2.innerHTML
      lost6.classList.remove('hiding')
      lost6.classList.remove('flipped')
    } else if (lost7.classList.contains('flipped')) {
      lost7.innerHTML = chosenCard2.innerHTML
      lost7.classList.remove('hiding')
      lost7.classList.remove('flipped')
    } else if (lost8.classList.contains('flipped')) {
      lost8.innerHTML = chosenCard2.innerHTML
      lost8.classList.remove('hiding')
      lost8.classList.remove('flipped')
    } else if (lost9.classList.contains('flipped')) {
      lost9.innerHTML = chosenCard2.innerHTML
      lost9.classList.remove('hiding')
      lost9.classList.remove('flipped')
    } else if (lost10.classList.contains('flipped')) {
      lost10.innerHTML = chosenCard2.innerHTML
      lost10.classList.remove('hiding')
      lost10.classList.remove('flipped')
    } else if (lost11.classList.contains('flipped')) {
      lost11.innerHTML = chosenCard2.innerHTML
      lost11.classList.remove('hiding')
      lost11.classList.remove('flipped')
    } else if (lost12.classList.contains('flipped')) {
      lost12.innerHTML = chosenCard2.innerHTML
      lost12.classList.remove('hiding')
      lost12.classList.remove('flipped')
    }
    flipChosenCard(chosenCard2)
    chosenCounter--
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
      discardButton.classList.add('not-without-more-selected')
      loseButton.classList.add('not-without-more-selected')
      activateButton.classList.add('not-without-more-selected')
    }
  }
  if (chosenCard3.classList.contains('add-border') && mustLoseCount < 1) {
    if (lost1.classList.contains('flipped')) {
      lost1.innerHTML = chosenCard3.innerHTML
      lost1.classList.remove('hiding')
      lost1.classList.remove('flipped')
    } else if (lost2.classList.contains('flipped')) {
      lost2.innerHTML = chosenCard3.innerHTML
      lost2.classList.remove('hiding')
      lost2.classList.remove('flipped')
    } else if (lost3.classList.contains('flipped')) {
      lost3.innerHTML = chosenCard3.innerHTML
      lost3.classList.remove('hiding')
      lost3.classList.remove('flipped')
    } else if (lost4.classList.contains('flipped')) {
      lost4.innerHTML = chosenCard3.innerHTML
      lost4.classList.remove('hiding')
      lost4.classList.remove('flipped')
    } else if (lost5.classList.contains('flipped')) {
      lost5.innerHTML = chosenCard3.innerHTML
      lost5.classList.remove('hiding')
      lost5.classList.remove('flipped')
    } else if (lost6.classList.contains('flipped')) {
      lost6.innerHTML = chosenCard3.innerHTML
      lost6.classList.remove('hiding')
      lost6.classList.remove('flipped')
    } else if (lost7.classList.contains('flipped')) {
      lost7.innerHTML = chosenCard3.innerHTML
      lost7.classList.remove('hiding')
      lost7.classList.remove('flipped')
    } else if (lost8.classList.contains('flipped')) {
      lost8.innerHTML = chosenCard3.innerHTML
      lost8.classList.remove('hiding')
      lost8.classList.remove('flipped')
    } else if (lost9.classList.contains('flipped')) {
      lost9.innerHTML = chosenCard3.innerHTML
      lost9.classList.remove('hiding')
      lost9.classList.remove('flipped')
    } else if (lost10.classList.contains('flipped')) {
      lost10.innerHTML = chosenCard3.innerHTML
      lost10.classList.remove('hiding')
      lost10.classList.remove('flipped')
    } else if (lost11.classList.contains('flipped')) {
      lost11.innerHTML = chosenCard3.innerHTML
      lost11.classList.remove('hiding')
      lost11.classList.remove('flipped')
    } else if (lost12.classList.contains('flipped')) {
      lost12.innerHTML = chosenCard3.innerHTML
      lost12.classList.remove('hiding')
      lost12.classList.remove('flipped')
    }
    chosenCard3.innerHTML = ''
    chosenCard3.classList.remove('add-border')
    chosenCard3.classList.add('hiding')
    chosenCounter--
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
      discardButton.classList.add('not-without-more-selected')
      loseButton.classList.add('not-without-more-selected')
      activateButton.classList.add('not-without-more-selected')
    }
  }
}

activateButton.onclick = () => {
  if (
    chosenCard1.classList.contains('add-border') &&
    mustLoseCount < 1 &&
    numberOfActiveCards < 6
  ) {
    if (active1.classList.contains('flipped')) {
      let elements = chosenCard1.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active1.prepend(element)
      }
      active1.classList.remove('hiding')
      active1.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active2.classList.contains('flipped')) {
      let elements = chosenCard1.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active2.prepend(element)
      }
      active2.classList.remove('hiding')
      active2.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active3.classList.contains('flipped')) {
      let elements = chosenCard1.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active3.prepend(element)
      }
      active3.classList.remove('hiding')
      active3.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active4.classList.contains('flipped')) {
      let elements = chosenCard1.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active4.prepend(element)
      }
      active4.classList.remove('hiding')
      active4.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active5.classList.contains('flipped')) {
      let elements = chosenCard1.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active5.prepend(element)
      }
      active5.classList.remove('hiding')
      active5.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active6.classList.contains('flipped')) {
      let elements = chosenCard1.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active6.prepend(element)
      }
      active6.classList.remove('hiding')
      active6.classList.remove('flipped')
      numberOfActiveCards++
    }
    flipChosenCard(chosenCard1)
    chosenCounter--
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
      discardButton.classList.add('not-without-more-selected')
      loseButton.classList.add('not-without-more-selected')
      activateButton.classList.add('not-without-more-selected')
    }
  }
  if (
    chosenCard2.classList.contains('add-border') &&
    mustLoseCount < 1 &&
    numberOfActiveCards < 6
  ) {
    if (active1.classList.contains('flipped')) {
      let elements = chosenCard2.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active1.prepend(element)
      }
      active1.classList.remove('hiding')
      active1.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active2.classList.contains('flipped')) {
      let elements = chosenCard2.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active2.prepend(element)
      }
      active2.classList.remove('hiding')
      active2.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active3.classList.contains('flipped')) {
      let elements = chosenCard2.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active3.prepend(element)
      }
      active3.classList.remove('hiding')
      active3.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active4.classList.contains('flipped')) {
      let elements = chosenCard2.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active4.prepend(element)
      }
      active4.classList.remove('hiding')
      active4.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active5.classList.contains('flipped')) {
      let elements = chosenCard2.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active5.prepend(element)
      }
      active5.classList.remove('hiding')
      active5.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active6.classList.contains('flipped')) {
      let elements = chosenCard2.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active6.prepend(element)
      }
      active6.classList.remove('hiding')
      active6.classList.remove('flipped')
      numberOfActiveCards++
    }
    flipChosenCard(chosenCard2)
    chosenCounter--
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
      discardButton.classList.add('not-without-more-selected')
      loseButton.classList.add('not-without-more-selected')
      activateButton.classList.add('not-without-more-selected')
    }
  }
  if (
    chosenCard3.classList.contains('add-border') &&
    mustLoseCount < 1 &&
    numberOfActiveCards < 6
  ) {
    if (active1.classList.contains('flipped')) {
      let elements = chosenCard3.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active1.prepend(element)
      }
      active1.classList.remove('hiding')
      active1.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active2.classList.contains('flipped')) {
      let elements = chosenCard3.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active2.prepend(element)
      }
      active2.classList.remove('hiding')
      active2.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active3.classList.contains('flipped')) {
      let elements = chosenCard3.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active3.prepend(element)
      }
      active3.classList.remove('hiding')
      active3.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active4.classList.contains('flipped')) {
      let elements = chosenCard3.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active4.prepend(element)
      }
      active4.classList.remove('hiding')
      active4.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active5.classList.contains('flipped')) {
      let elements = chosenCard3.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active5.prepend(element)
      }
      active5.classList.remove('hiding')
      active5.classList.remove('flipped')
      numberOfActiveCards++
    } else if (active6.classList.contains('flipped')) {
      let elements = chosenCard3.childNodes
      elementsArray = Array.from(elements)
      while (elementsArray.length > 0) {
        let element = elementsArray.pop()
        active6.prepend(element)
      }
      active6.classList.remove('hiding')
      active6.classList.remove('flipped')
      numberOfActiveCards++
    }
    chosenCard3.innerHTML = ''
    chosenCard3.classList.remove('add-border')
    chosenCard3.classList.add('hiding')
    chosenCounter--
    cardsInPlayCounter--
    if (cardsInPlayCounter === 0) {
      shortRestButton.classList.remove('not-while-in-play')
      longRestButton.classList.remove('not-while-in-play')
      loseCardFromRestButton.classList.remove('not-while-in-play')
      rerollShortRestButton.classList.remove('not-while-in-play')
      discardButton.classList.add('not-without-more-selected')
      loseButton.classList.add('not-without-more-selected')
      activateButton.classList.add('not-without-more-selected')
    }
  }
}

let discardsSelected = 0
var discards = document.querySelectorAll('.discarded')
for (var i = 0; i < discards.length; i++) {
  ;(function () {
    var discardedCard = discards[i]
    discardedCard.onclick = function () {
      if (
        !isSelected(discardedCard) &&
        mustLoseCount < 1 &&
        discardsSelected === 0
      ) {
        discardedCard.classList.add('discard-selected')
        discardsSelected++
        loseDiscardButton.classList.remove('not-without-more-selected')
        if (longResting) {
          loseCardFromRestButton.classList.remove('not-unless-resting')
        } else {
          recoverDiscardButton.classList.remove('not-without-more-selected')
        }
      } else if (!isSelected(discardedCard) && discardsSelected === 1) {
        var selectedDiscardedCards = document.querySelectorAll(
          '.discard-selected'
        )
        var selectedDiscardedCard = selectedDiscardedCards[0]
        selectedDiscardedCard.classList.remove('discard-selected')
        discardedCard.classList.add('discard-selected')
      } else if (isSelected(discardedCard) && discardsSelected === 1) {
        discardedCard.classList.remove('discard-selected')
        discardsSelected--
        loseDiscardButton.classList.add('not-without-more-selected')
        if (longResting) {
          loseCardFromRestButton.classList.add('not-unless-resting')
        } else {
          recoverDiscardButton.classList.add('not-without-more-selected')
        }
      }
    }
  }.call(this, i))
}

let lostSelectedCounter = 0
var lostCards = document.querySelectorAll('.lost')
for (var i = 0; i < lostCards.length; i++) {
  ;(function () {
    var lostCard = lostCards[i]
    lostCard.onclick = function () {
      if (!isSelected(lostCard) && lostSelectedCounter === 0) {
        lostCard.classList.add('lost-selected')
        lostSelectedCounter++
        recoverLostCardButton.classList.remove('not-without-more-selected')
      } else if (!isSelected(lostCard) && lostSelectedCounter === 1) {
        var selectedLostCards = document.querySelectorAll('.lost-selected')
        var selectedLostCard = selectedLostCards[0]
        selectedLostCard.classList.remove('lost-selected')
        lostCard.classList.add('lost-selected')
      } else {
        lostCard.classList.remove('lost-selected')
        lostSelectedCounter--
        recoverLostCardButton.classList.add('not-without-more-selected')
      }
    }
  }.call(this, i))
}

let activesSelected = 0
var actives = document.querySelectorAll('.active-card')
for (var i = 0; i < actives.length; i++) {
  ;(function () {
    var activeCard = actives[i]
    activeCard.onclick = function () {
      if (!isSelected(activeCard) && activesSelected === 0) {
        activeCard.classList.add('active-selected')
        activesSelected++
        discardActiveCardButton.className = 'button'
        loseActiveCardButton.className = 'button'
        createActiveTracker.className = 'button'
        if (activeCard.classList.contains('has-tracker')) {
          createActiveTracker.classList.add('not-without-more-selected')
        }
      } else if (!isSelected(activeCard) && activesSelected === 1) {
        var activeCardsSelected = document.querySelectorAll('.active-selected')
        var activeCardSelected = activeCardsSelected[0]
        activeCard.classList.add('active-selected')
        activeCardSelected.classList.remove('active-selected')
        discardActiveCardButton.classList.remove('not-without-more-selected')
        loseActiveCardButton.classList.remove('not-without-more-selected')
        createActiveTracker.classList.remove('not-without-more-selected')
        if (activeCard.classList.contains('has-tracker')) {
          createActiveTracker.classList.add('not-without-more-selected')
        }
      } else {
        activeCard.classList.remove('active-selected')
        activesSelected--
        discardActiveCardButton.classList.add('not-without-more-selected')
        loseActiveCardButton.classList.add('not-without-more-selected')
        createActiveTracker.classList.add('not-without-more-selected')
      }
    }
  }.call(this, i))
}

const shortRestLoop = (card) => {
  if (!card.classList.contains('flipped')) {
    card.classList.add('must-lose')
    card.insertAdjacentHTML(
      'afterend',
      "<br/><p class='must-lose'>Must Lose</p>"
    )
    mustLoseCount++
  }
}

let mustLose = false
let shortResting = false
let mustLoseCount = 0
shortRestButton.onclick = () => {
  if (
    mustLoseCount === 0 &&
    discardCount > 1 &&
    cardsInPlayCounter === 0 &&
    !longResting &&
    !shortResting
  ) {
    playCardsButton.classList.add('not-while-resting')
    shortRestButton.classList.add('not-while-resting')
    longRestButton.classList.add('not-while-resting')
    loseCardFromRestButton.classList.remove('not-unless-resting')
    rerollShortRestButton.classList.remove('not-unless-resting')
    recoverDiscardButton.classList.add('not-without-more-selected')
    loseDiscardButton.classList.add('not-without-more-selected')
    mustLose = true
    shortResting = true

    // Make sure that no discarded cards are selected
    // TODO: Refactor this
    var discardedCards = document.querySelectorAll('.discarded')
    for (var i = 0; i < discardedCards.length; i++) {
      var discardedCard = discardedCards[i]
      ;(function () {
        discardedCard.classList.remove('discard-selected')
      }.call(this, i))
    }

    // TODO: Refactor this
    // Select a random card
    let randomCard = Math.floor(Math.random() * discardCount)
    switch (randomCard) {
      case 0:
        for (var i = 0; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 1:
        for (var i = 1; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 2:
        for (var i = 2; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 3:
        for (var i = 3; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 4:
        for (var i = 4; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 5:
        for (var i = 5; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 6:
        for (var i = 6; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 7:
        for (var i = 7; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 8:
        for (var i = 8; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 9:
        for (var i = 9; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 10:
        for (var i = 10; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 11:
        for (var i = 11; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
    }
  }
  let afterShortRest = document.querySelectorAll('.discarded')
  console.log(afterShortRest)
}

loseCardFromRestButton.onclick = () => {
  if (mustLoseCount > 0 && mustLose && shortResting) {
    playCardsButton.classList.remove('not-while-resting')
    shortRestButton.classList.remove('not-while-resting')
    longRestButton.classList.remove('not-while-resting')
    loseCardFromRestButton.classList.add('not-unless-resting')
    rerollShortRestButton.classList.remove('can-only-do-once')
    shortRestButton.classList.add('not-without-more-cards')
    longRestButton.classList.add('not-without-more-cards')
    rerollShortRestButton.classList.add('not-unless-resting')
    loseDiscardButton.classList.add('not-without-more-selected')
    mustLose = false
    shortResting = false
    var mustLoseCards = document.querySelectorAll('.must-lose')
    var mustLoseCard = mustLoseCards[0]
    ;(function () {
      for (var i = 0; i < lostCards.length; i++) {
        var lostCard1 = lostCards[i]
        if (lostCard1.classList.contains('flipped')) {
          lostCard1.classList.remove('flipped')
          lostCard1.classList.remove('hiding')
          lostCard1.innerHTML = mustLoseCard.innerHTML
          i = lostCards.length
        }
      }
    }.call(this, i))
    mustLoseCount = 0
    discardCount = 0
    discardsSelected = 0
    mustLoseCard.nextSibling.remove()
    mustLoseCard.nextSibling.remove()
    flipDiscard(mustLoseCard)
    // Move the rest of the Discarded Cards to the Hand
    let discardedCards = document.querySelectorAll('.discarded:not(.flipped)')
    discardedCards.forEach((c) => {
      let emptyHandSpots = document.getElementsByClassName(
        'hand flipped hiding'
      )
      let spotForCard = emptyHandSpots[0]
      spotForCard.innerHTML = c.innerHTML
      spotForCard.classList.remove('flipped', 'hiding')
      flipDiscard(c)
    })
  } else if (longResting && discardsSelected === 1) {
    playCardsButton.classList.remove('not-while-resting')
    shortRestButton.classList.remove('not-while-resting')
    longRestButton.classList.remove('not-while-resting')
    loseCardFromRestButton.classList.add('not-unless-resting')
    shortRestButton.classList.add('not-without-more-cards')
    longRestButton.classList.add('not-without-more-cards')
    loseDiscardButton.classList.add('not-without-more-selected')
    longResting = false
    mustLose = false
    var selectedDiscards = document.querySelectorAll('.discard-selected')
    var selectedDiscard = selectedDiscards[0]
    selectedDiscard.classList.remove('discard-selected')
    discardsSelected = 0
    ;(function () {
      for (var i = 0; i < lostCards.length; i++) {
        var lostCard1 = lostCards[i]
        if (lostCard1.classList.contains('flipped')) {
          lostCard1.classList.remove('flipped')
          lostCard1.classList.remove('hiding')
          lostCard1.innerHTML = selectedDiscard.innerHTML
          i = lostCards.length
        }
      }
    }.call(this, i))
    discardCount = 0
    Element.prototype.remove = function () {
      this.parentElement.removeChild(this)
    }
    document.getElementById('choose-to-lose').remove()
    flipDiscard(selectedDiscard)
    var discardedCards = document.querySelectorAll('.discarded:not(.flipped)')
    discardedCards.forEach((c) => {
      let emptyHandSpots = document.getElementsByClassName(
        'hand flipped hiding'
      )
      let spotForCard = emptyHandSpots[0]
      spotForCard.innerHTML = c.innerHTML
      spotForCard.classList.remove('flipped', 'hiding')
      flipDiscard(c)
    })
    if (poisoned) {
      poisoned = false
      poisonedToken.classList.add('hiding')
      healButton.classList.remove('poisoned')
      wounded = false
      woundedToken.classList.add('hiding')
    } else if (health < maxHealth) {
      health = health + 2
      healthCounter.innerHTML = health + '/' + maxHealth
      wounded = false
      woundedToken.classList.add('hiding')
      if (health > maxHealth) {
        health = maxHealth
        healthCounter.innerHTML = health + '/' + maxHealth
      }
    }
  }
}

rerollShortRestButton.onclick = () => {
  if (mustLoseCount === 1) {
    rerollShortRestButton.classList.add('can-only-do-once')
    // health--
    // healButton.classList.remove('at-max')
    // healthCounter.innerHTML = health + '/' + maxHealth
    var discardedCards = document.querySelectorAll('.discarded')
    for (var i = 0; i < discardedCards.length; i++) {
      var discardedCard = discardedCards[i]
      ;(function () {
        discardedCard.classList.remove('discard-selected')
        if (discardedCard.classList.contains('must-lose')) {
          discardedCard.classList.add('unloseable')
          i = discardedCards.length
          discardedCard.classList.remove('must-lose')
          discardedCard.nextSibling.remove()
          discardedCard.nextSibling.remove()
        }
      }.call(this, i))
    }
    var randomCard2 = Math.floor(Math.random() * discardCount)
    var unloseable = document.querySelectorAll('.unloseable')
    var unloseableCard = unloseable[0]
    unloseableCard.classList.remove('unloseable')
    while (unloseableCard === discardedCards[randomCard2]) {
      randomCard2 = Math.floor(Math.random() * discardCount)
    }
    switch (randomCard2) {
      case 0:
        for (var i = 0; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 1:
        for (var i = 1; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 2:
        for (var i = 2; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 3:
        for (var i = 3; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 4:
        for (var i = 4; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 5:
        for (var i = 5; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 6:
        for (var i = 6; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 7:
        for (var i = 7; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 8:
        for (var i = 8; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 9:
        for (var i = 9; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 10:
        for (var i = 10; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
      case 11:
        for (var i = 11; i < discardedCards.length; i++) {
          var discardedCard = discardedCards[i]
          shortRestLoop(discardedCard)
          i = discardedCards.length
        }
        break
    }
  }
}

let longResting = false
longRestButton.onclick = () => {
  if (
    discardCount > 1 &&
    mustLoseCount === 0 &&
    cardsInPlayCounter === 0 &&
    !shortResting &&
    !longResting
  ) {
    document
      .getElementById('discard-table')
      .insertAdjacentHTML(
        'beforebegin',
        "<p id = 'choose-to-lose'>Choose One Card to Lose</p><br/>"
      )
    playCardsButton.classList.add('not-while-resting')
    shortRestButton.classList.add('not-while-resting')
    longRestButton.classList.add('not-while-resting')
    recoverDiscardButton.classList.add('not-without-more-selected')
    mustLose = true
    longResting = true
    if (discardsSelected === 1) {
      loseCardFromRestButton.classList.remove('not-unless-resting')
    }
  }
}

recoverDiscardButton.onclick = () => {
  if (!shortResting && !longResting && !mustLose && discardsSelected > 0) {
    discardsSelected = 0
    discardCount--
    recoverDiscardButton.classList.add('not-without-more-selected')
    loseDiscardButton.classList.add('not-without-more-selected')
    var selectedDiscards = document.querySelectorAll('.discard-selected')
    var selectedDiscard = selectedDiscards[0]
    selectedDiscard.classList.remove('discard-selected')
    var cardsInHand = document.querySelectorAll('.hand')
    for (var i = 0; i < cardsInHand.length; i++) {
      ;(function () {
        var cardInHand = cardsInHand[i]
        if (cardInHand.classList.contains('flipped')) {
          cardInHand.innerHTML = selectedDiscard.innerHTML
          cardInHand.classList.remove('flipped')
          cardInHand.classList.remove('hiding')
          flipDiscard(selectedDiscard)
          i = cardsInHand.length
        }
      }.call(this, i))
    }
    if (discardCount < 2) {
      shortRestButton.classList.add('not-without-more-cards')
      longRestButton.classList.add('not-without-more-cards')
    }
  }
}

discardActiveCardButton.onclick = () => {
  if (!mustLose && activesSelected === 1) {
    var activeCardsSelected = document.querySelectorAll('.active-selected')
    var activeCardSelected = activeCardsSelected[0]
    for (var i = 0; i < discards.length; i++) {
      var discardedCard = discards[i]
      if (discardedCard.classList.contains('flipped')) {
        let activeElements = activeCardSelected.getElementsByTagName('img')
        let activeElementsArray = Array.from(activeElements)
        while (activeElementsArray.length > 0) {
          let element = activeElementsArray.pop()
          discardedCard.prepend(element)
        }
        discardedCard.classList.remove('flipped')
        discardedCard.classList.remove('hiding')
        i = discards.length
        flipActive(activeCardSelected)
        activesSelected = 0
        numberOfActiveCards--
        discardCount++
      }
    }
    if (discardCount > 1) {
      shortRestButton.classList.remove('not-without-more-cards')
      longRestButton.classList.remove('not-without-more-cards')
    }
    discardActiveCardButton.classList.add('not-without-more-selected')
    loseActiveCardButton.classList.add('not-without-more-selected')
    createActiveTracker.classList.add('not-without-more-selected')
  }
}

loseActiveCardButton.onclick = () => {
  if (activesSelected === 1) {
    var activeCardsSelected = document.querySelectorAll('.active-selected')
    var activeCardSelected = activeCardsSelected[0]
    for (var i = 0; i < lostCards.length; i++) {
      var lostCard = lostCards[i]
      if (lostCard.classList.contains('flipped')) {
        let activeElements = activeCardSelected.getElementsByTagName('img')
        let activeElementsArray = Array.from(activeElements)
        while (activeElementsArray.length > 0) {
          let element = activeElementsArray.pop()
          lostCard.prepend(element)
        }
        console.log(lostCard)
        console.log(activeCardSelected)
        lostCard.classList.remove('flipped')
        lostCard.classList.remove('hiding')
        i = lostCards.length
        flipActive(activeCardSelected)
        activesSelected = 0
        numberOfActiveCards--
      }
    }
    discardActiveCardButton.classList.add('not-without-more-selected')
    loseActiveCardButton.classList.add('not-without-more-selected')
    createActiveTracker.classList.add('not-without-more-selected')
  }
}

recoverLostCardButton.onclick = () => {
  if (!shortResting && !longResting && !mustLose && lostSelectedCounter > 0) {
    lostSelectedCounter = 0
    var selectedLostCards = document.querySelectorAll('.lost-selected')
    var selectedLostCard = selectedLostCards[0]
    recoverLostCardButton.classList.add('not-without-more-selected')
    selectedLostCard.classList.remove('lost-selected')
    var cardsInHand = document.querySelectorAll('.hand')
    for (var i = 0; i < cardsInHand.length; i++) {
      ;(function () {
        var cardInHand = cardsInHand[i]
        if (cardInHand.classList.contains('flipped')) {
          cardInHand.innerHTML = selectedLostCard.innerHTML
          cardInHand.classList.remove('flipped')
          cardInHand.classList.remove('hiding')
          flipLost(selectedLostCard)
          i = cardsInHand.length
        }
      }.call(this, i))
    }
  }
}

togglePoison.onclick = () => {
  if (!poisoned) {
    poisoned = true
    poisonedToken.classList.remove('hiding')
    healButton.classList.add('poisoned')
  } else {
    poisoned = false
    poisonedToken.classList.add('hiding')
    healButton.classList.remove('poisoned')
  }
}

toggleBearPoison.onclick = () => {
  if (!bearPoisoned) {
    bearPoisoned = true
    bearPoisonedToken.classList.remove('hiding')
    healBearButton.classList.add('poisoned')
  } else {
    bearPoisoned = false
    bearPoisonedToken.classList.add('hiding')
    healBearButton.classList.remove('poisoned')
  }
}

toggleWounded.onclick = () => {
  if (!wounded) {
    wounded = true
    woundedToken.classList.remove('hiding')
  } else {
    wounded = false
    woundedToken.classList.add('hiding')
  }
}

toggleBearWounded.onclick = () => {
  if (!bearWounded) {
    bearWounded = true
    bearWoundedToken.classList.remove('hiding')
  } else {
    bearWounded = false
    bearWoundedToken.classList.add('hiding')
  }
}

toggleImmobilized.onclick = () => {
  if (!immobilized) {
    immobilized = true
    immobilizedToken.classList.remove('hiding')
  } else {
    immobilized = false
    immobilizedToken.classList.add('hiding')
  }
}

toggleBearImmobilized.onclick = () => {
  if (!bearImmobilized) {
    bearImmobilized = true
    bearImmobilizedToken.classList.remove('hiding')
  } else {
    bearImmobilized = false
    bearImmobilizedToken.classList.add('hiding')
  }
}

toggleDisarmed.onclick = () => {
  if (!disarmed) {
    disarmed = true
    disarmedToken.classList.remove('hiding')
  } else {
    disarmed = false
    disarmedToken.classList.add('hiding')
  }
}

toggleBearDisarmed.onclick = () => {
  if (!bearDisarmed) {
    bearDisarmed = true
    bearDisarmedToken.classList.remove('hiding')
  } else {
    bearDisarmed = false
    bearDisarmedToken.classList.add('hiding')
  }
}

toggleStunned.onclick = () => {
  if (!stunned) {
    stunned = true
    stunnedToken.classList.remove('hiding')
  } else {
    stunned = false
    stunnedToken.classList.add('hiding')
  }
}

toggleBearStunned.onclick = () => {
  if (!bearStunned) {
    bearStunned = true
    bearStunnedToken.classList.remove('hiding')
  } else {
    bearStunned = false
    bearStunnedToken.classList.add('hiding')
  }
}

toggleMuddled.onclick = () => {
  if (!muddled) {
    muddled = true
    muddledToken.classList.remove('hiding')
  } else {
    muddled = false
    muddledToken.classList.add('hiding')
  }
}

toggleBearMuddled.onclick = () => {
  if (!bearMuddled) {
    bearMuddled = true
    bearMuddledToken.classList.remove('hiding')
  } else {
    bearMuddled = false
    bearMuddledToken.classList.add('hiding')
  }
}

toggleInvisible.onclick = () => {
  if (!invisible) {
    invisible = true
    invisibleToken.classList.remove('hiding')
  } else {
    invisible = false
    invisibleToken.classList.add('hiding')
  }
}

toggleBearInvisible.onclick = () => {
  if (!bearInvisible) {
    bearInvisible = true
    bearInvisibleToken.classList.remove('hiding')
  } else {
    bearInvisible = false
    bearInvisibleToken.classList.add('hiding')
  }
}

toggleStrengthened.onclick = () => {
  if (!strengthened) {
    strengthened = true
    strengthenedToken.classList.remove('hiding')
  } else {
    strengthened = false
    strengthenedToken.classList.add('hiding')
  }
}

toggleBearStrengthened.onclick = () => {
  if (!bearStrengthened) {
    bearStrengthened = true
    bearStrengthenedToken.classList.remove('hiding')
  } else {
    bearStrengthened = false
    bearStrengthenedToken.classList.add('hiding')
  }
}

let healthCounter = document.getElementById('health-counter')
let xpCounter = document.getElementById('xp-counter')
let bearHealthCounter = document.getElementById('bear-health-counter')
let lootCounter = document.getElementById('loot-counter')

xpUp.onclick = () => {
  xpCount++
  xpCounter.innerHTML = xpCount
  xpDown.classList.remove('at-min')
}

xpDown.onclick = () => {
  if (xpCount > 0) {
    xpCount--
    xpCounter.innerHTML = xpCount
    if (xpCount === 0) {
      xpDown.classList.add('at-min')
    }
  }
}

lootUp.onclick = () => {
  lootCount++
  lootCounter.innerHTML = lootCount
  lootDown.classList.remove('at-min')
}

lootDown.onclick = () => {
  if (lootCount > 0) {
    lootCount--
    lootCounter.innerHTML = lootCount
    if (lootCount === 0) {
      lootDown.classList.add('at-min')
    }
  }
}

healButton.onclick = () => {
  if (!poisoned && health < maxHealth) {
    health++
    healthCounter.innerHTML = health + '/' + maxHealth
    damageButton.classList.remove('at-min')
    wounded = false
    woundedToken.classList.add('hiding')
    if (health === maxHealth) {
      healButton.classList.add('at-max')
    }
  }
}

damageButton.onclick = () => {
  if (health > 0) {
    health--
    healthCounter.innerHTML = health + '/' + maxHealth
    healButton.classList.remove('at-max')
    if (health === 0) {
      damageButton.classList.add('at-min')
    }
  }
}

let healBearButton = document.getElementById('heal-bear')
let damageBearButton = document.getElementById('damage-bear')

healBearButton.onclick = () => {
  if (!poisoned && bearHealth < bearMaxHealth) {
    bearHealth++
    bearHealthCounter.innerHTML =
      'Bear Health<br/>' + bearHealth + '/' + bearMaxHealth
    damageBearButton.classList.remove('at-min')
    bearWounded = false
    bearWoundedToken.classList.add('hiding')
    if (bearHealth === bearMaxHealth) {
      healBearButton.classList.add('at-max')
    }
  }
}

damageBearButton.onclick = () => {
  if (bearHealth > 0) {
    bearHealth--
    bearHealthCounter.innerHTML =
      'Bear Health<br/>' + bearHealth + '/' + bearMaxHealth
    healBearButton.classList.remove('at-max')
    if (bearHealth === 0) {
      damageBearButton.classList.add('at-min')
    }
  }
}

levelUp.onclick = () => {
  if (levelCount < 9) {
    levelCount++
    levelCounter.innerHTML = 'Level: ' + levelCount
    levelDown.classList.remove('at-min')
    if (levelCount === 9) {
      levelUp.classList.add('at-max')
    }
  }
}

levelDown.onclick = () => {
  if (levelCount > 1) {
    levelCount--
    levelCounter.innerHTML = 'Level: ' + levelCount
    levelUp.classList.remove('at-max')
    if (levelCount === 1) {
      levelDown.classList.add('at-min')
    }
  }
}

let createActiveTracker = document.getElementById('create-active-tracker')
let increaseTrackerSize = document.getElementById('increase-tracker-size')
let decreaseTrackerSize = document.getElementById('decrease-tracker-size')
let tracker11 = document.getElementById('tracker1-1')
let tracker12 = document.getElementById('tracker1-2')
let tracker13 = document.getElementById('tracker1-3')
let tracker14 = document.getElementById('tracker1-4')
let tracker15 = document.getElementById('tracker1-5')
let tracker16 = document.getElementById('tracker1-6')
let tracker21 = document.getElementById('tracker2-1')
let tracker22 = document.getElementById('tracker2-2')
let tracker23 = document.getElementById('tracker2-3')
let tracker24 = document.getElementById('tracker2-4')
let tracker25 = document.getElementById('tracker2-5')
let tracker26 = document.getElementById('tracker2-6')
let tracker31 = document.getElementById('tracker3-1')
let tracker32 = document.getElementById('tracker3-2')
let tracker33 = document.getElementById('tracker3-3')
let tracker34 = document.getElementById('tracker3-4')
let tracker35 = document.getElementById('tracker3-5')
let tracker36 = document.getElementById('tracker3-6')
let tracker41 = document.getElementById('tracker4-1')
let tracker42 = document.getElementById('tracker4-2')
let tracker43 = document.getElementById('tracker4-3')
let tracker44 = document.getElementById('tracker4-4')
let tracker45 = document.getElementById('tracker4-5')
let tracker46 = document.getElementById('tracker4-6')
let tracker51 = document.getElementById('tracker5-1')
let tracker52 = document.getElementById('tracker5-2')
let tracker53 = document.getElementById('tracker5-3')
let tracker54 = document.getElementById('tracker5-4')
let tracker55 = document.getElementById('tracker5-5')
let tracker56 = document.getElementById('tracker5-6')
let tracker61 = document.getElementById('tracker6-1')
let tracker62 = document.getElementById('tracker6-2')
let tracker63 = document.getElementById('tracker6-3')
let tracker64 = document.getElementById('tracker6-4')
let tracker65 = document.getElementById('tracker6-5')
let tracker66 = document.getElementById('tracker6-6')

increaseTrackerSize.onclick = () => {
  if (trackerSize < 6) {
    trackerSize++
    trackerSizeCounter.innerHTML = 'Tracker Size: ' + trackerSize
    decreaseTrackerSize.classList.remove('at-min')
    if (trackerSize === 6) {
      increaseTrackerSize.classList.add('at-max')
    }
  }
}

decreaseTrackerSize.onclick = () => {
  if (trackerSize > 1) {
    trackerSize--
    trackerSizeCounter.innerHTML = 'Tracker Size: ' + trackerSize
    increaseTrackerSize.classList.remove('at-max')
    if (trackerSize === 1) {
      decreaseTrackerSize.classList.add('at-min')
    }
  }
}

createActiveTracker.onclick = () => {
  var activeCardsWithBorder = document.querySelectorAll('.active-selected')
  activeCardWithBorder = activeCardsWithBorder[0]
  if (!activeCardWithBorder.classList.contains('has-tracker')) {
    switch (trackerSize) {
      case 1:
        var activeCards = document.querySelectorAll('.active-card')
        for (var i = 0; i < activeCards.length; i++) {
          ;(function () {
            var activeCard = activeCards[i]
            if (
              activeCard.classList.contains('active-selected') &&
              !activeCard.classList.contains('has-tracker')
            ) {
              activeCard.classList.remove('active-selected')
              activeCard.classList.add('has-tracker')
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    '.tracker-button1'
                  )
                  var card1Tracker1 = card1Trackers[0]
                  card1Tracker1.classList.remove('invisible')
                  card1TrackerCounter = 1
                  break
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    '.tracker-button2'
                  )
                  var card2Tracker1 = card2Trackers[0]
                  card2Tracker1.classList.remove('invisible')
                  card2TrackerCounter = 1
                  break
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    '.tracker-button3'
                  )
                  var card3Tracker1 = card3Trackers[0]
                  card3Tracker1.classList.remove('invisible')
                  card3TrackerCounter = 1
                  break
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    '.tracker-button4'
                  )
                  var card4Tracker1 = card4Trackers[0]
                  card4Tracker1.classList.remove('invisible')
                  card4TrackerCounter = 1
                  break
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    '.tracker-button5'
                  )
                  var card5Tracker1 = card5Trackers[0]
                  card5Tracker1.classList.remove('invisible')
                  card5TrackerCounter = 1
                  break
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    '.tracker-button6'
                  )
                  var card6Tracker1 = card6Trackers[0]
                  card6Tracker1.classList.remove('invisible')
                  card6TrackerCounter = 1
                  break
              }
            }
          }.call(this, i))
        }
        break
      case 2:
        var activeCards = document.querySelectorAll('.active-card')
        for (var i = 0; i < activeCards.length; i++) {
          ;(function () {
            var activeCard = activeCards[i]
            if (
              activeCard.classList.contains('active-selected') &&
              !activeCard.classList.contains('has-tracker')
            ) {
              activeCard.classList.remove('active-selected')
              activeCard.classList.add('has-tracker')
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    '.tracker-button1'
                  )
                  for (var j = 0; j < card1Trackers.length; j++) {
                    ;(function () {
                      var card1Tracker = card1Trackers[j]
                      if (j < 2) {
                        card1Tracker.classList.remove('invisible')
                        card1TrackerCounter = 2
                      }
                    }.call(this, j))
                  }
                  break
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    '.tracker-button2'
                  )
                  for (var j = 0; j < card2Trackers.length; j++) {
                    ;(function () {
                      var card2Tracker = card2Trackers[j]
                      if (j < 2) {
                        card2Tracker.classList.remove('invisible')
                        card2TrackerCounter = 2
                      }
                    }.call(this, j))
                  }
                  break
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    '.tracker-button3'
                  )
                  for (var j = 0; j < card3Trackers.length; j++) {
                    ;(function () {
                      var card3Tracker = card3Trackers[j]
                      if (j < 2) {
                        card3Tracker.classList.remove('invisible')
                        card3TrackerCounter = 2
                      }
                    }.call(this, j))
                  }
                  break
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    '.tracker-button4'
                  )
                  for (var j = 0; j < card4Trackers.length; j++) {
                    ;(function () {
                      var card4Tracker = card4Trackers[j]
                      if (j < 2) {
                        card4Tracker.classList.remove('invisible')
                        card4TrackerCounter = 2
                      }
                    }.call(this, j))
                  }
                  break
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    '.tracker-button5'
                  )
                  for (var j = 0; j < card5Trackers.length; j++) {
                    ;(function () {
                      var card5Tracker = card5Trackers[j]
                      if (j < 2) {
                        card5Tracker.classList.remove('invisible')
                        card5TrackerCounter = 2
                      }
                    }.call(this, j))
                  }
                  break
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    '.tracker-button6'
                  )
                  for (var j = 0; j < card6Trackers.length; j++) {
                    ;(function () {
                      var card6Tracker = card6Trackers[j]
                      if (j < 2) {
                        card6Tracker.classList.remove('invisible')
                        card6TrackerCounter = 2
                      }
                    }.call(this, j))
                  }
                  break
              }
            }
          }.call(this, i))
        }
        break
      case 3:
        var activeCards = document.querySelectorAll('.active-card')
        for (var i = 0; i < activeCards.length; i++) {
          ;(function () {
            var activeCard = activeCards[i]
            if (
              activeCard.classList.contains('active-selected') &&
              !activeCard.classList.contains('has-tracker')
            ) {
              activeCard.classList.remove('active-selected')
              activeCard.classList.add('has-tracker')
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    '.tracker-button1'
                  )
                  for (var j = 0; j < card1Trackers.length; j++) {
                    ;(function () {
                      var card1Tracker = card1Trackers[j]
                      if (j < 3) {
                        card1Tracker.classList.remove('invisible')
                        card1TrackerCounter = 3
                      }
                    }.call(this, j))
                  }
                  break
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    '.tracker-button2'
                  )
                  for (var j = 0; j < card2Trackers.length; j++) {
                    ;(function () {
                      var card2Tracker = card2Trackers[j]
                      if (j < 3) {
                        card2Tracker.classList.remove('invisible')
                        card2TrackerCounter = 3
                      }
                    }.call(this, j))
                  }
                  break
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    '.tracker-button3'
                  )
                  for (var j = 0; j < card3Trackers.length; j++) {
                    ;(function () {
                      var card3Tracker = card3Trackers[j]
                      if (j < 3) {
                        card3Tracker.classList.remove('invisible')
                        card3TrackerCounter = 3
                      }
                    }.call(this, j))
                  }
                  break
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    '.tracker-button4'
                  )
                  for (var j = 0; j < card4Trackers.length; j++) {
                    ;(function () {
                      var card4Tracker = card4Trackers[j]
                      if (j < 3) {
                        card4Tracker.classList.remove('invisible')
                        card4TrackerCounter = 3
                      }
                    }.call(this, j))
                  }
                  break
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    '.tracker-button5'
                  )
                  for (var j = 0; j < card5Trackers.length; j++) {
                    ;(function () {
                      var card5Tracker = card5Trackers[j]
                      if (j < 3) {
                        card5Tracker.classList.remove('invisible')
                        card5TrackerCounter = 3
                      }
                    }.call(this, j))
                  }
                  break
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    '.tracker-button6'
                  )
                  for (var j = 0; j < card6Trackers.length; j++) {
                    ;(function () {
                      var card6Tracker = card6Trackers[j]
                      if (j < 3) {
                        card6Tracker.classList.remove('invisible')
                        card6TrackerCounter = 3
                      }
                    }.call(this, j))
                  }
                  break
              }
            }
          }.call(this, i))
        }
        break
      case 4:
        var activeCards = document.querySelectorAll('.active-card')
        for (var i = 0; i < activeCards.length; i++) {
          ;(function () {
            var activeCard = activeCards[i]
            if (
              activeCard.classList.contains('active-selected') &&
              !activeCard.classList.contains('has-tracker')
            ) {
              activeCard.classList.remove('active-selected')
              activeCard.classList.add('has-tracker')
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    '.tracker-button1'
                  )
                  for (var j = 0; j < card1Trackers.length; j++) {
                    ;(function () {
                      var card1Tracker = card1Trackers[j]
                      if (j < 4) {
                        card1Tracker.classList.remove('invisible')
                        card1TrackerCounter = 4
                      }
                    }.call(this, j))
                  }
                  break
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    '.tracker-button2'
                  )
                  for (var j = 0; j < card2Trackers.length; j++) {
                    ;(function () {
                      var card2Tracker = card2Trackers[j]
                      if (j < 4) {
                        card2Tracker.classList.remove('invisible')
                        card2TrackerCounter = 4
                      }
                    }.call(this, j))
                  }
                  break
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    '.tracker-button3'
                  )
                  for (var j = 0; j < card3Trackers.length; j++) {
                    ;(function () {
                      var card3Tracker = card3Trackers[j]
                      if (j < 4) {
                        card3Tracker.classList.remove('invisible')
                        card3TrackerCounter = 4
                      }
                    }.call(this, j))
                  }
                  break
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    '.tracker-button4'
                  )
                  for (var j = 0; j < card4Trackers.length; j++) {
                    ;(function () {
                      var card4Tracker = card4Trackers[j]
                      if (j < 4) {
                        card4Tracker.classList.remove('invisible')
                        card4TrackerCounter = 4
                      }
                    }.call(this, j))
                  }
                  break
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    '.tracker-button5'
                  )
                  for (var j = 0; j < card5Trackers.length; j++) {
                    ;(function () {
                      var card5Tracker = card5Trackers[j]
                      if (j < 4) {
                        card5Tracker.classList.remove('invisible')
                        card5TrackerCounter = 4
                      }
                    }.call(this, j))
                  }
                  break
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    '.tracker-button6'
                  )
                  for (var j = 0; j < card6Trackers.length; j++) {
                    ;(function () {
                      var card6Tracker = card6Trackers[j]
                      if (j < 4) {
                        card6Tracker.classList.remove('invisible')
                        card6TrackerCounter = 4
                      }
                    }.call(this, j))
                  }
                  break
              }
            }
          }.call(this, i))
        }
        break
      case 5:
        var activeCards = document.querySelectorAll('.active-card')
        for (var i = 0; i < activeCards.length; i++) {
          ;(function () {
            var activeCard = activeCards[i]
            if (
              activeCard.classList.contains('active-selected') &&
              !activeCard.classList.contains('has-tracker')
            ) {
              activeCard.classList.remove('active-selected')
              activeCard.classList.add('has-tracker')
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    '.tracker-button1'
                  )
                  for (var j = 0; j < card1Trackers.length; j++) {
                    ;(function () {
                      var card1Tracker = card1Trackers[j]
                      if (j < 5) {
                        card1Tracker.classList.remove('invisible')
                        card1TrackerCounter = 5
                      }
                    }.call(this, j))
                  }
                  break
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    '.tracker-button2'
                  )
                  for (var j = 0; j < card2Trackers.length; j++) {
                    ;(function () {
                      var card2Tracker = card2Trackers[j]
                      if (j < 5) {
                        card2Tracker.classList.remove('invisible')
                        card2TrackerCounter = 5
                      }
                    }.call(this, j))
                  }
                  break
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    '.tracker-button3'
                  )
                  for (var j = 0; j < card3Trackers.length; j++) {
                    ;(function () {
                      var card3Tracker = card3Trackers[j]
                      if (j < 5) {
                        card3Tracker.classList.remove('invisible')
                        card3TrackerCounter = 5
                      }
                    }.call(this, j))
                  }
                  break
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    '.tracker-button4'
                  )
                  for (var j = 0; j < card4Trackers.length; j++) {
                    ;(function () {
                      var card4Tracker = card4Trackers[j]
                      if (j < 5) {
                        card4Tracker.classList.remove('invisible')
                        card4TrackerCounter = 5
                      }
                    }.call(this, j))
                  }
                  break
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    '.tracker-button5'
                  )
                  for (var j = 0; j < card5Trackers.length; j++) {
                    ;(function () {
                      var card5Tracker = card5Trackers[j]
                      if (j < 5) {
                        card5Tracker.classList.remove('invisible')
                        card5TrackerCounter = 5
                      }
                    }.call(this, j))
                  }
                  break
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    '.tracker-button6'
                  )
                  for (var j = 0; j < card6Trackers.length; j++) {
                    ;(function () {
                      var card6Tracker = card6Trackers[j]
                      if (j < 5) {
                        card6Tracker.classList.remove('invisible')
                        card6TrackerCounter = 5
                      }
                    }.call(this, j))
                  }
                  break
              }
            }
          }.call(this, i))
        }
        break
      case 6:
        var activeCards = document.querySelectorAll('.active-card')
        for (var i = 0; i < activeCards.length; i++) {
          ;(function () {
            var activeCard = activeCards[i]
            if (
              activeCard.classList.contains('active-selected') &&
              !activeCard.classList.contains('has-tracker')
            ) {
              activeCard.classList.remove('active-selected')
              activeCard.classList.add('has-tracker')
              switch (i) {
                case 0:
                  var card1Trackers = document.querySelectorAll(
                    '.tracker-button1'
                  )
                  for (var j = 0; j < card1Trackers.length; j++) {
                    ;(function () {
                      var card1Tracker = card1Trackers[j]
                      if (j < 6) {
                        card1Tracker.classList.remove('invisible')
                        card1TrackerCounter = 6
                      }
                    }.call(this, j))
                  }
                  break
                case 1:
                  var card2Trackers = document.querySelectorAll(
                    '.tracker-button2'
                  )
                  for (var j = 0; j < card2Trackers.length; j++) {
                    ;(function () {
                      var card2Tracker = card2Trackers[j]
                      if (j < 6) {
                        card2Tracker.classList.remove('invisible')
                        card2TrackerCounter = 6
                      }
                    }.call(this, j))
                  }
                  break
                case 2:
                  var card3Trackers = document.querySelectorAll(
                    '.tracker-button3'
                  )
                  for (var j = 0; j < card3Trackers.length; j++) {
                    ;(function () {
                      var card3Tracker = card3Trackers[j]
                      if (j < 6) {
                        card3Tracker.classList.remove('invisible')
                        card3TrackerCounter = 6
                      }
                    }.call(this, j))
                  }
                  break
                case 3:
                  var card4Trackers = document.querySelectorAll(
                    '.tracker-button4'
                  )
                  for (var j = 0; j < card4Trackers.length; j++) {
                    ;(function () {
                      var card4Tracker = card4Trackers[j]
                      if (j < 6) {
                        card4Tracker.classList.remove('invisible')
                        card4TrackerCounter = 6
                      }
                    }.call(this, j))
                  }
                  break
                case 4:
                  var card5Trackers = document.querySelectorAll(
                    '.tracker-button5'
                  )
                  for (var j = 0; j < card5Trackers.length; j++) {
                    ;(function () {
                      var card5Tracker = card5Trackers[j]
                      if (j < 6) {
                        card5Tracker.classList.remove('invisible')
                        card5TrackerCounter = 6
                      }
                    }.call(this, j))
                  }
                  break
                case 5:
                  var card6Trackers = document.querySelectorAll(
                    '.tracker-button6'
                  )
                  for (var j = 0; j < card6Trackers.length; j++) {
                    ;(function () {
                      var card6Tracker = card6Trackers[j]
                      if (j < 6) {
                        card6Tracker.classList.remove('invisible')
                        card6TrackerCounter = 6
                      }
                    }.call(this, j))
                  }
                  break
              }
            }
          }.call(this, i))
        }
        break
    }
    discardActiveCardButton.classList.add('not-without-more-selected')
    loseActiveCardButton.classList.add('not-without-more-selected')
    createActiveTracker.classList.add('not-without-more-selected')
    activesSelected = 0
  }
}

var trackerUseButtons1 = document.querySelectorAll('.tracker-button1')
for (var i = 0; i < trackerUseButtons1.length; i++) {
  ;(function () {
    var trackerUseButton1 = trackerUseButtons1[i]
    trackerUseButton1.onclick = () => {
      if (trackerUseButton1 === trackerUseButtons1[0]) {
        trackerUseButton1.classList.add('invisible')
      } else if (
        trackerUseButton1.previousSibling.classList.contains('invisible')
      ) {
        trackerUseButton1.classList.add('invisible')
      }
      if (
        card1TrackerCounter === 1 &&
        trackerUseButton1 === trackerUseButtons1[0]
      ) {
        active1.classList.remove('has-tracker')
        if (active1.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card1TrackerCounter === 2 &&
        trackerUseButton1 === trackerUseButtons1[1]
      ) {
        active1.classList.remove('has-tracker')
        if (active1.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card1TrackerCounter === 3 &&
        trackerUseButton1 === trackerUseButtons1[2]
      ) {
        active1.classList.remove('has-tracker')
        if (active1.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card1TrackerCounter === 4 &&
        trackerUseButton1 === trackerUseButtons1[3]
      ) {
        active1.classList.remove('has-tracker')
        if (active1.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card1TrackerCounter === 5 &&
        trackerUseButton1 === trackerUseButtons1[4]
      ) {
        active1.classList.remove('has-tracker')
        if (active1.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card1TrackerCounter === 6 &&
        trackerUseButton1 === trackerUseButtons1[5]
      ) {
        active1.classList.remove('has-tracker')
        if (active1.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      }
    }
  }.call(this, i))
}

var trackerUseButtons2 = document.querySelectorAll('.tracker-button2')
for (var i = 0; i < trackerUseButtons2.length; i++) {
  ;(function () {
    var trackerUseButton2 = trackerUseButtons2[i]
    trackerUseButton2.onclick = () => {
      if (trackerUseButton2 === trackerUseButtons2[0]) {
        trackerUseButton2.classList.add('invisible')
      } else if (
        trackerUseButton2.previousSibling.classList.contains('invisible')
      ) {
        trackerUseButton2.classList.add('invisible')
      }
      if (
        card2TrackerCounter === 1 &&
        trackerUseButton2 === trackerUseButtons2[0]
      ) {
        active2.classList.remove('has-tracker')
        if (active2.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card2TrackerCounter === 2 &&
        trackerUseButton2 === trackerUseButtons2[1]
      ) {
        active2.classList.remove('has-tracker')
        if (active2.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card2TrackerCounter === 3 &&
        trackerUseButton2 === trackerUseButtons2[2]
      ) {
        active2.classList.remove('has-tracker')
        if (active2.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card2TrackerCounter === 4 &&
        trackerUseButton2 === trackerUseButtons2[3]
      ) {
        active2.classList.remove('has-tracker')
        if (active2.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card2TrackerCounter === 5 &&
        trackerUseButton2 === trackerUseButtons2[4]
      ) {
        active2.classList.remove('has-tracker')
        if (active2.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card2TrackerCounter === 6 &&
        trackerUseButton2 === trackerUseButtons2[5]
      ) {
        active2.classList.remove('has-tracker')
        if (active2.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      }
    }
  }.call(this, i))
}

var trackerUseButtons3 = document.querySelectorAll('.tracker-button3')
for (var i = 0; i < trackerUseButtons3.length; i++) {
  ;(function () {
    var trackerUseButton3 = trackerUseButtons3[i]
    trackerUseButton3.onclick = () => {
      if (trackerUseButton3 === trackerUseButtons3[0]) {
        trackerUseButton3.classList.add('invisible')
      } else if (
        trackerUseButton3.previousSibling.classList.contains('invisible')
      ) {
        trackerUseButton3.classList.add('invisible')
      }
      if (
        card3TrackerCounter === 1 &&
        trackerUseButton3 === trackerUseButtons3[0]
      ) {
        active3.classList.remove('has-tracker')
        if (active3.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card3TrackerCounter === 2 &&
        trackerUseButton3 === trackerUseButtons3[1]
      ) {
        active3.classList.remove('has-tracker')
        if (active3.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card3TrackerCounter === 3 &&
        trackerUseButton3 === trackerUseButtons3[2]
      ) {
        active3.classList.remove('has-tracker')
        if (active3.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card3TrackerCounter === 4 &&
        trackerUseButton3 === trackerUseButtons3[3]
      ) {
        active3.classList.remove('has-tracker')
        if (active3.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card3TrackerCounter === 5 &&
        trackerUseButton3 === trackerUseButtons3[4]
      ) {
        active3.classList.remove('has-tracker')
        if (active3.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card3TrackerCounter === 6 &&
        trackerUseButton3 === trackerUseButtons3[5]
      ) {
        active3.classList.remove('has-tracker')
        if (active3.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      }
    }
  }.call(this, i))
}

var trackerUseButtons4 = document.querySelectorAll('.tracker-button4')
for (var i = 0; i < trackerUseButtons4.length; i++) {
  ;(function () {
    var trackerUseButton4 = trackerUseButtons4[i]
    trackerUseButton4.onclick = () => {
      if (trackerUseButton4 === trackerUseButtons4[0]) {
        trackerUseButton4.classList.add('invisible')
      } else if (
        trackerUseButton4.previousSibling.classList.contains('invisible')
      ) {
        trackerUseButton4.classList.add('invisible')
      }
      if (
        card4TrackerCounter === 1 &&
        trackerUseButton4 === trackerUseButtons4[0]
      ) {
        active4.classList.remove('has-tracker')
        if (active4.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card4TrackerCounter === 2 &&
        trackerUseButton4 === trackerUseButtons4[1]
      ) {
        active4.classList.remove('has-tracker')
        if (active4.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card4TrackerCounter === 3 &&
        trackerUseButton4 === trackerUseButtons4[2]
      ) {
        active4.classList.remove('has-tracker')
        if (active4.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card4TrackerCounter === 4 &&
        trackerUseButton4 === trackerUseButtons4[3]
      ) {
        active4.classList.remove('has-tracker')
        if (active4.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card4TrackerCounter === 5 &&
        trackerUseButton4 === trackerUseButtons4[4]
      ) {
        active4.classList.remove('has-tracker')
        if (active4.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card4TrackerCounter === 6 &&
        trackerUseButton4 === trackerUseButtons4[5]
      ) {
        active4.classList.remove('has-tracker')
        if (active4.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      }
    }
  }.call(this, i))
}

var trackerUseButtons5 = document.querySelectorAll('.tracker-button5')
for (var i = 0; i < trackerUseButtons5.length; i++) {
  ;(function () {
    var trackerUseButton5 = trackerUseButtons5[i]
    trackerUseButton5.onclick = () => {
      if (trackerUseButton5 === trackerUseButtons5[0]) {
        trackerUseButton5.classList.add('invisible')
      } else if (
        trackerUseButton5.previousSibling.classList.contains('invisible')
      ) {
        trackerUseButton5.classList.add('invisible')
      }
      if (
        card5TrackerCounter === 1 &&
        trackerUseButton5 === trackerUseButtons5[0]
      ) {
        active5.classList.remove('has-tracker')
        if (active5.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card5TrackerCounter === 2 &&
        trackerUseButton5 === trackerUseButtons5[1]
      ) {
        active5.classList.remove('has-tracker')
        if (active5.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card5TrackerCounter === 3 &&
        trackerUseButton5 === trackerUseButtons5[2]
      ) {
        active5.classList.remove('has-tracker')
        if (active5.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card5TrackerCounter === 4 &&
        trackerUseButton5 === trackerUseButtons5[3]
      ) {
        active5.classList.remove('has-tracker')
        if (active5.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card5TrackerCounter === 5 &&
        trackerUseButton5 === trackerUseButtons5[4]
      ) {
        active5.classList.remove('has-tracker')
        if (active5.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card5TrackerCounter === 6 &&
        trackerUseButton5 === trackerUseButtons5[5]
      ) {
        active5.classList.remove('has-tracker')
        if (active5.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      }
    }
  }.call(this, i))
}

var trackerUseButtons6 = document.querySelectorAll('.tracker-button6')
for (var i = 0; i < trackerUseButtons6.length; i++) {
  ;(function () {
    var trackerUseButton6 = trackerUseButtons6[i]
    trackerUseButton6.onclick = () => {
      if (trackerUseButton6 === trackerUseButtons6[0]) {
        trackerUseButton6.classList.add('invisible')
      } else if (
        trackerUseButton6.previousSibling.classList.contains('invisible')
      ) {
        trackerUseButton6.classList.add('invisible')
      }
      if (
        card6TrackerCounter === 1 &&
        trackerUseButton6 === trackerUseButtons6[0]
      ) {
        active6.classList.remove('has-tracker')
        if (active6.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card6TrackerCounter === 2 &&
        trackerUseButton6 === trackerUseButtons6[1]
      ) {
        active6.classList.remove('has-tracker')
        if (active6.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card6TrackerCounter === 3 &&
        trackerUseButton6 === trackerUseButtons6[2]
      ) {
        active6.classList.remove('has-tracker')
        if (active6.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card6TrackerCounter === 4 &&
        trackerUseButton6 === trackerUseButtons6[3]
      ) {
        active6.classList.remove('has-tracker')
        if (active6.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card6TrackerCounter === 5 &&
        trackerUseButton6 === trackerUseButtons6[4]
      ) {
        active6.classList.remove('has-tracker')
        if (active6.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      } else if (
        card6TrackerCounter === 6 &&
        trackerUseButton6 === trackerUseButtons6[5]
      ) {
        active6.classList.remove('has-tracker')
        if (active6.classList.contains('active-selected')) {
          createActiveTracker.classList.remove('not-without-more-selected')
        }
      }
    }
  }.call(this, i))
}

goBack.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
  var handCards = document.querySelectorAll('.hand')
  document.getElementById('select-class-section').classList.remove('hiding')
  document.getElementById('level-selection').classList.remove('hiding')
  confirmHandButton.classList.add('not-without-more-selected')
  modDeckArray = [
    mod1,
    mod2,
    mod3,
    mod4,
    mod5,
    mod6,
    mod7,
    mod8,
    mod9,
    mod10,
    mod11,
    mod12,
    mod13,
    mod14,
    mod15,
    mod16,
    mod17,
    mod18,
    mod19,
    mod20,
  ]
  var perkLists = document.querySelectorAll('.perks')
  for (var j = 0; j < perkLists.length; j++) {
    var perkList = perkLists[j]
    perkList.classList.add('hiding')
  }
  goBack.classList.add('hiding')
  goBack2.classList.add('hiding')
  document.getElementById('perk-section').classList.add('hiding')
  document.getElementById('bear-health').classList.add('hiding')
  document.getElementById('bear-health-counter').classList.add('hiding')
  document.getElementById('damage-bear').classList.add('hiding')
  document.getElementById('heal-bear').classList.add('hiding')
  document.getElementById('bear-status-effects').classList.add('hiding')
  flipCard(cardHand1)
  flipCard(cardHand2)
  flipCard(cardHand3)
  flipCard(cardHand4)
  flipCard(cardHand5)
  flipCard(cardHand6)
  flipCard(cardHand7)
  flipCard(cardHand8)
  flipCard(cardHand9)
  flipCard(cardHand10)
  flipCard(cardHand11)
  flipCard(cardHand12)
  cardHand1.classList.remove('hiding')
  cardHand2.classList.remove('hiding')
  cardHand3.classList.remove('hiding')
  cardHand4.classList.remove('hiding')
  cardHand5.classList.remove('hiding')
  cardHand6.classList.remove('hiding')
  cardHand7.classList.remove('hiding')
  cardHand8.classList.remove('hiding')
  cardHand9.classList.remove('hiding')
  cardHand10.classList.remove('hiding')
  cardHand11.classList.remove('hiding')
  cardHand12.classList.remove('hiding')
  cardCount = 0
  cardCounter.innerHTML = cardCount + '/' + handSize
  var levelTitles = document.querySelectorAll('.level')
  for (var k = 3; k < levelTitles.length; k++) {
    var levelTitle = levelTitles[k]
    levelTitle.classList.remove('hiding')
  }
  for (var i = 0; i < cardsToChooseFrom.length; i++) {
    ;(function () {
      var card = cardsToChooseFrom[i]
      card.firstChild.classList.remove('add-border')
    }.call(this, i))
  }
}

goBack2.onclick = () => {
  var cardsToChooseFrom = document.querySelectorAll('.chooseCardsTable')
  var handCards = document.querySelectorAll('.hand')
  document.getElementById('initial-table').classList.add('hiding')
  document.getElementById('hand-cards').classList.add('hiding')
  document.getElementById('confirm-buttons').classList.add('hiding')
  confirmHandButton.classList.add('not-without-more-selected')
  modDeckArray = [
    mod1,
    mod2,
    mod3,
    mod4,
    mod5,
    mod6,
    mod7,
    mod8,
    mod9,
    mod10,
    mod11,
    mod12,
    mod13,
    mod14,
    mod15,
    mod16,
    mod17,
    mod18,
    mod19,
    mod20,
  ]
  goBack.classList.remove('hiding')
  goBack2.classList.add('hiding')
  document.getElementById('perk-section').classList.remove('hiding')
  flipCard(cardHand1)
  flipCard(cardHand2)
  flipCard(cardHand3)
  flipCard(cardHand4)
  flipCard(cardHand5)
  flipCard(cardHand6)
  flipCard(cardHand7)
  flipCard(cardHand8)
  flipCard(cardHand9)
  flipCard(cardHand10)
  flipCard(cardHand11)
  flipCard(cardHand12)
  for (var j = 0; j < 12; j++) {
    var eachCardInHand = handCards[j]
    eachCardInHand.classList.add('hiding')
  }
  cardCount = 0
  cardCounter.innerHTML = cardCount + '/' + handSize
  var levelTitles = document.querySelectorAll('.level')
  for (var k = levelCount + 3; k < levelTitles.length; k++) {
    var levelTitle = levelTitles[k]
    levelTitle.classList.add('hiding')
  }
  for (var i = 0; i < cardsToChooseFrom.length; i++) {
    ;(function () {
      var card = cardsToChooseFrom[i]
      card.firstChild.classList.remove('add-border')
    }.call(this, i))
  }
}

loseDiscardButton.onclick = () => {
  var selectedDiscards = document.querySelectorAll('.discard-selected')
  if (discardsSelected === 1) {
    for (var i = 0; i < lostCards.length; i++) {
      var lostCard = lostCards[i]
      if (lostCard.classList.contains('flipped')) {
        lostCard.innerHTML = selectedDiscards[0].innerHTML
        lostCard.classList.remove('flipped')
        lostCard.classList.remove('hiding')
        i = lostCards.length
        flipDiscard(selectedDiscards[0])
        discardsSelected--
        discardCount--
        recoverDiscardButton.classList.add('not-without-more-selected')
        loseDiscardButton.classList.add('not-without-more-selected')
        loseCardFromRestButton.classList.add('not-unless-resting')
      }
    }
  }
  if (discardCount === 0 && longResting) {
    longResting = false
    mustLose = false
    playCardsButton.classList.remove('not-while-resting')
    shortRestButton.classList.remove('not-while-resting')
    longRestButton.classList.remove('not-while-resting')
    loseCardFromRestButton.classList.add('not-unless-resting')
    shortRestButton.classList.add('not-without-more-cards')
    longRestButton.classList.add('not-without-more-cards')
    loseDiscardButton.classList.add('not-without-more-selected')
    Element.prototype.remove = function () {
      this.parentElement.removeChild(this)
    }
    document.getElementById('choose-to-lose').remove()
  }
}

loseHandCard.onclick = () => {
  if (cardCount === 1) {
    var cardsInHand = document.querySelectorAll('.hand')
    for (var j = 0; j < cardsInHand.length; j++) {
      var cardInHand = cardsInHand[j]
      if (cardInHand.classList.contains('add-border')) {
        for (var i = 0; i < lostCards.length; i++) {
          var lostCard = lostCards[i]
          if (lostCard.classList.contains('flipped')) {
            lostCard.innerHTML = cardInHand.innerHTML
            lostCard.classList.remove('flipped')
            lostCard.classList.remove('hiding')
            i = lostCards.length
            flipCard(cardInHand)
            cardCount--
            loseHandCard.classList.add('not-without-more-selected')
          }
        }
      }
    }
  }
}

//attack modifiers
let modifierDeck = document.getElementById('amDeck')
let playedModifiers = document.getElementById('playedModifiers')
let mod1 = './images/modifier-deck/plus0.png'
let mod2 = './images/modifier-deck/plus0.png'
let mod3 = './images/modifier-deck/plus0.png'
let mod4 = './images/modifier-deck/plus0.png'
let mod5 = './images/modifier-deck/plus0.png'
let mod6 = './images/modifier-deck/plus0.png'
let mod7 = './images/modifier-deck/plus1.png'
let mod8 = './images/modifier-deck/plus1.png'
let mod9 = './images/modifier-deck/plus1.png'
let mod10 = './images/modifier-deck/plus1.png'
let mod11 = './images/modifier-deck/plus1.png'
let mod12 = './images/modifier-deck/minus1.png'
let mod13 = './images/modifier-deck/minus1.png'
let mod14 = './images/modifier-deck/minus1.png'
let mod15 = './images/modifier-deck/minus1.png'
let mod16 = './images/modifier-deck/minus1.png'
let mod17 = './images/modifier-deck/minus2.png'
let mod18 = './images/modifier-deck/plus2.png'
let mod19 = './images/modifier-deck/noDamage.png'
let mod20 = './images/modifier-deck/criticalHit.png'
let blessCard = './images/modifier-deck/bless.png'
let curseCard = './images/modifier-deck/curse.png'
let minus1 = './images/modifier-deck/newMinus1.png'
let modDeckArray = [
  mod1,
  mod2,
  mod3,
  mod4,
  mod5,
  mod6,
  mod7,
  mod8,
  mod9,
  mod10,
  mod11,
  mod12,
  mod13,
  mod14,
  mod15,
  mod16,
  mod17,
  mod18,
  mod19,
  mod20,
]
let defaultDeckArray = []
let playedModifierArray = []
let mustShuffle = document.getElementById('mustShuffle')
let blessButton = document.getElementById('bless')
let curseButton = document.getElementById('curse')
let shuffleModsButton = document.getElementById('shuffleMods')
let numOfCurses = 0
let numOfBlesses = 0
let addMinusOne = document.getElementById('add-minus-1')
let cardsInDeckText = document.getElementById('cardsInDeck')
let resetDeckButton = document.getElementById('reset-deck')
let usedMods = document.getElementById('used-modifier-cards')

modifierDeck.onclick = () => {
  if (modDeckArray.length > 0) {
    playedModifierArray.push(modDeckArray[0])
    var DOM_img = document.createElement('img')
    DOM_img.src = playedModifierArray[playedModifierArray.length - 1]
    usedMods.appendChild(DOM_img)
    playedModifiers.classList.remove('hiding')
    playedModifiers.src = playedModifierArray[playedModifierArray.length - 1]
    playedModifiers.classList.add(`${modDeckArray[0]}`)
    modDeckArray.splice(0, 1)
    if (modDeckArray.length === 0) {
      modifierDeck.classList.add('hiding')
    }
    if (
      playedModifiers.classList.contains(
        './images/modifier-deck/noDamage.png'
      ) ||
      playedModifiers.classList.contains(
        './images/modifier-deck/criticalHit.png'
      )
    ) {
      mustShuffle.classList.remove('invisible')
    }
    if (
      playedModifiers.classList.contains('./images/modifier-deck/curse.png')
    ) {
      numOfCurses--
      cursesInDeck.innerHTML = 'Extra Curses in Deck: ' + numOfCurses
    }
    if (
      playedModifiers.classList.contains('./images/modifier-deck/bless.png')
    ) {
      numOfBlesses--
      blessesInDeck.innerHTML = 'Extra Blesses in Deck: ' + numOfBlesses
    }
    if (
      playedModifiers.classList.contains('./images/modifier-deck/bless.png') ||
      playedModifiers.classList.contains('./images/modifier-deck/curse.png')
    ) {
      playedModifierArray.splice(playedModifierArray.length - 1, 1)
      playedModifiers.classList.remove('./images/modifier-deck/bless.png')
      playedModifiers.classList.remove('./images/modifier-deck/curse.png')
    }
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
  }
}

function shuffleModifierDeck() {
  while (playedModifierArray.length > 0) {
    modDeckArray.push(playedModifierArray[playedModifierArray.length - 1])
    playedModifierArray.pop()
    playedModifiers.src = ''
    modifierDeck.src = './images/modifier-deck/cardBack.png'
    mustShuffle.classList.add('invisible')
    playedModifiers.className = 'attack-modifier'
    playedModifiers.classList.add('hiding')
    modifierDeck.classList.remove('hiding')
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    usedMods.innerHTML = ''
    shuffleDeck()
  }
}

function shuffleDeck() {
  var deckCopy = modDeckArray.slice()
  modDeckArray = []
  while (deckCopy.length > 0) {
    var randomNumber = Math.floor(Math.random() * deckCopy.length)
    modDeckArray.push(deckCopy[randomNumber])
    deckCopy.splice(randomNumber, 1)
  }
}

shuffleModsButton.onclick = () => {
  shuffleModifierDeck()
}

function blessDeck() {
  if (numOfBlesses < 10) {
    modDeckArray.push(blessCard)
    modifierDeck.classList.remove('hiding')
    numOfBlesses++
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    shuffleDeck()
    blessesInDeck.innerHTML = 'Extra Blesses in Deck: ' + numOfBlesses
  }
}

blessButton.onclick = () => {
  blessDeck()
}

function curseDeck() {
  if (numOfCurses < 10) {
    modDeckArray.push(curseCard)
    modifierDeck.classList.remove('hiding')
    numOfCurses++
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    shuffleDeck()
    cursesInDeck.innerHTML = 'Extra Curses in Deck: ' + numOfCurses
  }
}

curseButton.onclick = () => {
  curseDeck()
}

function addMinus1() {
  modDeckArray.push(minus1)
  cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
}

addMinusOne.onclick = () => {
  addMinus1()
}

function resetDeck() {
  shuffleModifierDeck()
  modDeckArray = defaultDeckArray.slice()
  numOfCurses = 0
  numOfBlesses = 0
  cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
  blessesInDeck.innerHTML = 'Extra Blesses in Deck: ' + numOfBlesses
  cursesInDeck.innerHTML = 'Extra Curses in Deck: ' + numOfCurses
  shuffleDeck()
}

resetDeckButton.onclick = () => {
  resetDeck()
}

// Perks

// Confirm Perks Function
function confirmPerks() {
  document.getElementById('initial-table').classList.remove('hiding')
  document.getElementById('hand-cards').classList.remove('hiding')
  let revealedCards = document.querySelectorAll('.hand')
  for (let i = 0; i < handSize; i++) {
    let revealedCard = revealedCards[i]
    revealedCard.classList.remove('hiding')
  }
  document.getElementById('confirm-buttons').classList.remove('hiding')
  chooseCardsNumber.innerHTML = 'Choose ' + handSize + ' Cards'
  cardCounter.innerHTML = '0/' + handSize
  healthCounter.innerHTML = health + '/' + maxHealth
  bearHealthCounter.innerHTML =
    'Bear Health<br/>' + bearHealth + '/' + bearMaxHealth
  xpCounter.innerHTML = xpCount
  chosenCard1.innerHTML = flippedCard
  chosenCard2.innerHTML = flippedCard
  trackerSizeCounter.innerHTML = 'Tracker Size: ' + trackerSize
  document.getElementById('perk-section').classList.add('hiding')
  goBack2.classList.remove('hiding')
}

// Checking and unchecking boxes
var checkboxes = document.querySelectorAll('.checkbox')
for (var i = 0; i < checkboxes.length; i++) {
  ;(function () {
    var checkbox = checkboxes[i]
    checkbox.onclick = () => {
      if (!checkbox.classList.contains('checked')) {
        checkbox.classList.add('checked')
      } else {
        checkbox.classList.remove('checked')
      }
    }
  }.call(this, i))
}

// Confirm Perk Buttons
let brConfirmPerksButton = document.getElementById('brConfirmPerksButton')
let btConfirmPerksButton = document.getElementById('btConfirmPerksButton')
let chConfirmPerksButton = document.getElementById('chConfirmPerksButton')
let swConfirmPerksButton = document.getElementById('swConfirmPerksButton')
let scConfirmPerksButton = document.getElementById('scConfirmPerksButton')
let tiConfirmPerksButton = document.getElementById('tiConfirmPerksButton')
let nsConfirmPerksButton = document.getElementById('nsConfirmPerksButton')
let qmConfirmPerksButton = document.getElementById('qmConfirmPerksButton')
let elConfirmPerksButton = document.getElementById('elConfirmPerksButton')
let skConfirmPerksButton = document.getElementById('skConfirmPerksButton')
let suConfirmPerksButton = document.getElementById('suConfirmPerksButton')
let beConfirmPerksButton = document.getElementById('beConfirmPerksButton')
let ssConfirmPerksButton = document.getElementById('ssConfirmPerksButton')
let sbConfirmPerksButton = document.getElementById('sbConfirmPerksButton')
let phConfirmPerksButton = document.getElementById('phConfirmPerksButton')
let bsConfirmPerksButton = document.getElementById('bsConfirmPerksButton')

//Doomstalker Perks
let dsConfirmPerksButton = document.getElementById('dsConfirmPerksButton')
let dsPerk1 = document.getElementById('dsRemove2minus1-1')
let dsPerk2 = document.getElementById('dsRemove2minus1-2')
let dsPerk3 = document.getElementById('dsReplacePlus0withPlus1-1')
let dsPerk4 = document.getElementById('dsReplacePlus0withPlus1-2')
let dsPerk5 = document.getElementById('dsReplacePlus0withPlus1-3')
let dsPerk6 = document.getElementById('dsAddRollingPlus1-1')
let dsPerk7 = document.getElementById('dsAddRollingPlus1-2')
let dsPerk8 = document.getElementById('dsAddPlus2Muddle')
let dsPerk9 = document.getElementById('dsAddPlus1Poison')
let dsPerk10 = document.getElementById('dsAddPlus1Wound')
let dsPerk11 = document.getElementById('dsAddPlus1Immobilize')
let dsPerk12 = document.getElementById('dsAddPlus0Stun')
let dsPerk13 = document.getElementById('dsAddRollingAddTarget-1')
let dsPerk14 = document.getElementById('dsAddRollingAddTarget-2')
let dsPerk15 = document.getElementById('dsIgnoreNegEffects')

dsConfirmPerksButton.onclick = () => {
  if (dsPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'dschosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (dsPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod14) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'dschosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (dsPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 2)
        let newCard = 'images/attack-modifiers/ds/am-ds-Plus1.png'
        modDeckArray.push(newCard)
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'dschosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (dsPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod3) {
        modDeckArray.splice(i, 2)
        let newCard = 'images/attack-modifiers/ds/am-ds-Plus1.png'
        modDeckArray.push(newCard)
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk4', 'dschosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (dsPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod5) {
        modDeckArray.splice(i, 2)
        let newCard = 'images/attack-modifiers/ds/am-ds-Plus1.png'
        modDeckArray.push(newCard)
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk5', 'dschosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (dsPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk6', 'dschosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (dsPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk7', 'dschosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (dsPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-Plus2Muddle.png'
    modDeckArray.push(newCard)
    setCookie('perk8', 'dschosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (dsPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-Plus1Poison.png'
    modDeckArray.push(newCard)
    setCookie('perk9', 'dschosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (dsPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-Plus1Wound.png'
    modDeckArray.push(newCard)
    setCookie('perk10', 'dschosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (dsPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    setCookie('perk11', 'dschosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (dsPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-Stun.png'
    modDeckArray.push(newCard)
    setCookie('perk12', 'dschosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (dsPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-RollingAddTarget.png'
    modDeckArray.push(newCard)
    setCookie('perk13', 'dschosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (dsPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ds/am-ds-RollingAddTarget.png'
    modDeckArray.push(newCard)
    setCookie('perk14', 'dschosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (dsPerk15.classList.contains('checked')) {
    setCookie('perk15', 'dschosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}
//Mindthief perks

let mtConfirmPerksButton = document.getElementById('mtConfirmPerksButton')
let mtPerk1 = document.getElementById('mtRemove2minus1-1')
let mtPerk2 = document.getElementById('mtRemove2minus1-2')
let mtPerk3 = document.getElementById('mtRemove4Plus0')
let mtPerk4 = document.getElementById('mtReplaceTwoPlus1WithTwoPlus2')
let mtPerk5 = document.getElementById('mtReplaceMinus2WithPlus0')
let mtPerk6 = document.getElementById('mtPlus2Frost1')
let mtPerk7 = document.getElementById('mtPlus2Frost2')
let mtPerk8 = document.getElementById('mtAddTwoRollingPlus11')
let mtPerk9 = document.getElementById('mtAddTwoRollingPlus12')
let mtPerk10 = document.getElementById('mtAddRollingPull1')
let mtPerk11 = document.getElementById('mtAddRollingMuddle')
let mtPerk12 = document.getElementById('mtAddRollingImmobilize')
let mtPerk13 = document.getElementById('mtAddRollingStun')
let mtPerk14 = document.getElementById('mtAddRollingDisarmAndMuddle')
let mtPerk15 = document.getElementById('mtIgnoreNegEffects')

mtConfirmPerksButton.onclick = () => {
  if (mtPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'mtchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (mtPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod14) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'mtchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (mtPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'mtchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (mtPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod7) {
        modDeckArray.splice(i, 2)
        let newCard = 'images/attack-modifiers/mt/am-mt-Plus2.png'
        modDeckArray.push(newCard)
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk4', 'mtchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (mtPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod17) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/mt/am-mt-Plus0.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk5', 'mtchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (mtPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/mt/am-mt-Plus2Ice.png'
    modDeckArray.push(newCard)
    setCookie('perk6', 'mtchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (mtPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/mt/am-mt-Plus2Ice.png'
    modDeckArray.push(newCard)
    setCookie('perk7', 'mtchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (mtPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/mt/am-mt-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk8', 'mtchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (mtPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/mt/am-mt-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk9', 'mtchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (mtPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/mt/am-mt-RollingPull1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk10', 'mtchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (mtPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/mt/am-mt-RollingMuddle.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk11', 'mtchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (mtPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/mt/am-mt-RollingImmobilize.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk12', 'mtchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (mtPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/mt/am-mt-RollingStun.png'
    modDeckArray.push(newCard)
    setCookie('perk13', 'mtchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (mtPerk14.classList.contains('checked')) {
    let newCard1 = 'images/attack-modifiers/mt/am-mt-RollingDisarm.png'
    let newCard2 = 'images/attack-modifiers/mt/am-mt-RollingMuddle.png'
    modDeckArray.push(newCard1)
    modDeckArray.push(newCard2)
    setCookie('perk14', 'mtchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (mtPerk15.classList.contains('checked')) {
    setCookie('perk15', 'mtchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Cragheart

let chPerk1 = document.getElementById('chPerk1')
let chPerk2 = document.getElementById('chPerk2-1')
let chPerk3 = document.getElementById('chPerk2-2')
let chPerk4 = document.getElementById('chPerk2-3')
let chPerk5 = document.getElementById('chPerk3')
let chPerk6 = document.getElementById('chPerk4-1')
let chPerk7 = document.getElementById('chPerk4-2')
let chPerk8 = document.getElementById('chPerk5-1')
let chPerk9 = document.getElementById('chPerk5-2')
let chPerk10 = document.getElementById('chPerk6')
let chPerk11 = document.getElementById('chPerk7-1')
let chPerk12 = document.getElementById('chPerk7-2')
let chPerk13 = document.getElementById('chPerk8')
let chPerk14 = document.getElementById('chPerk9')
let chPerk15 = document.getElementById('chPerk10')

chConfirmPerksButton.onclick = () => {
  if (chPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'chchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (chPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/ch/am-ch-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'chchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (chPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod13) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/ch/am-ch-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'chchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (chPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod14) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/ch/am-ch-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk4', 'chchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (chPerk5.classList.contains('checked')) {
    let newCard1 = 'images/attack-modifiers/ch/am-ch-Minus2.png'
    let newCard2 = 'images/attack-modifiers/ch/am-ch-Plus2.png'
    modDeckArray.push(newCard1)
    modDeckArray.push(newCard2)
    modDeckArray.push(newCard2)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'chchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (chPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ch/am-ch-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    setCookie('perk6', 'chchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (chPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ch/am-ch-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    setCookie('perk7', 'chchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (chPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ch/am-ch-Plus2Muddle.png'
    modDeckArray.push(newCard)
    setCookie('perk8', 'chchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (chPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ch/am-ch-Plus2Muddle.png'
    modDeckArray.push(newCard)
    setCookie('perk9', 'chchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (chPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ch/am-ch-RollingPush2.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk10', 'chchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (chPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ch/am-ch-RollingLeaf.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk11', 'chchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (chPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ch/am-ch-RollingLeaf.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk12', 'chchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (chPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ch/am-ch-RollingWind.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk13', 'chchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (chPerk14.classList.contains('checked')) {
    setCookie('perk14', 'chchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (chPerk15.classList.contains('checked')) {
    setCookie('perk15', 'chchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Brute
let brPerk1 = document.getElementById('brPerk1')
let brPerk2 = document.getElementById('brPerk2')
let brPerk3 = document.getElementById('brPerk3-1')
let brPerk4 = document.getElementById('brPerk3-2')
let brPerk5 = document.getElementById('brPerk4')
let brPerk6 = document.getElementById('brPerk5-1')
let brPerk7 = document.getElementById('brPerk5-2')
let brPerk8 = document.getElementById('brPerk6')
let brPerk9 = document.getElementById('brPerk7-1')
let brPerk10 = document.getElementById('brPerk7-2')
let brPerk11 = document.getElementById('brPerk8')
let brPerk12 = document.getElementById('brPerk9-1')
let brPerk13 = document.getElementById('brPerk9-2')
let brPerk14 = document.getElementById('brPerk10')
let brPerk15 = document.getElementById('brPerk11')

brConfirmPerksButton.onclick = () => {
  if (brPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'brchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (brPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod14) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/br/am-br-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'brchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (brPerk3.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk3', 'brchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (brPerk4.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'brchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (brPerk5.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-Plus3.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'brchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (brPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-RollingPush1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk6', 'brchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (brPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-RollingPush1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk7', 'brchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (brPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-RollingPierce3.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk8', 'brchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (brPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-RollingStun.png'
    modDeckArray.push(newCard)
    setCookie('perk9', 'brchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (brPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-RollingStun.png'
    modDeckArray.push(newCard)
    setCookie('perk10', 'brchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (brPerk11.classList.contains('checked')) {
    let newCard1 = 'images/attack-modifiers/br/am-br-RollingDisarm.png'
    let newCard2 = 'images/attack-modifiers/br/am-br-RollingMuddle.png'
    modDeckArray.push(newCard1)
    modDeckArray.push(newCard2)
    setCookie('perk11', 'brchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (brPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-RollingAddTarget.png'
    modDeckArray.push(newCard)
    setCookie('perk12', 'brchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (brPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-RollingAddTarget.png'
    modDeckArray.push(newCard)
    setCookie('perk13', 'brchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (brPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-Plus1Sheild1.png'
    modDeckArray.push(newCard)
    setCookie('perk14', 'brchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (brPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/br/am-br-Plus1.png'
    modDeckArray.push(newCard)
    setCookie('perk15', 'brchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//spellweaver

let swPerk1 = document.getElementById('swPerk1')
let swPerk2 = document.getElementById('swPerk2-1')
let swPerk3 = document.getElementById('swPerk2-2')
let swPerk4 = document.getElementById('swPerk3-1')
let swPerk5 = document.getElementById('swPerk3-2')
let swPerk6 = document.getElementById('swPerk4')
let swPerk7 = document.getElementById('swPerk5')
let swPerk8 = document.getElementById('swPerk6')
let swPerk9 = document.getElementById('swPerk7')
let swPerk10 = document.getElementById('swPerk8-1')
let swPerk11 = document.getElementById('swPerk8-2')
let swPerk12 = document.getElementById('swPerk9-1')
let swPerk13 = document.getElementById('swPerk9-2')
let swPerk14 = document.getElementById('swPerk10')
let swPerk15 = document.getElementById('swPerk11')

swConfirmPerksButton.onclick = () => {
  if (swPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'swchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (swPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/sw/am-sw-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'swchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (swPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod13) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/sw/am-sw-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'swchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (swPerk4.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'swchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (swPerk5.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'swchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (swPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Stun.png'
    modDeckArray.push(newCard)
    setCookie('perk6', 'swchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (swPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus1Wound.png'
    modDeckArray.push(newCard)
    setCookie('perk7', 'swchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (swPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    setCookie('perk8', 'swchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (swPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus1Curse.png'
    modDeckArray.push(newCard)
    setCookie('perk9', 'swchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (swPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus2Fire.png'
    modDeckArray.push(newCard)
    setCookie('perk10', 'swchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (swPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus2Fire.png'
    modDeckArray.push(newCard)
    setCookie('perk11', 'swchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (swPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus2Ice.png'
    modDeckArray.push(newCard)
    setCookie('perk12', 'swchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (swPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sw/am-sw-Plus2Ice.png'
    modDeckArray.push(newCard)
    setCookie('perk13', 'swchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (swPerk14.classList.contains('checked')) {
    let newCard1 = 'images/attack-modifiers/sw/am-sw-RollingLeaf.png'
    let newCard2 = 'images/attack-modifiers/sw/am-sw-RollingWind.png'
    modDeckArray.push(newCard1)
    modDeckArray.push(newCard2)
    setCookie('perk14', 'swchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (swPerk15.classList.contains('checked')) {
    let newCard1 = 'images/attack-modifiers/sw/am-sw-RollingSun.png'
    let newCard2 = 'images/attack-modifiers/sw/am-sw-RollingMoon.png'
    modDeckArray.push(newCard1)
    modDeckArray.push(newCard2)
    setCookie('perk15', 'swchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Scoundrel

let scPerk1 = document.getElementById('scPerk1-1')
let scPerk2 = document.getElementById('scPerk1-2')
let scPerk3 = document.getElementById('scPerk2')
let scPerk4 = document.getElementById('scPerk3')
let scPerk5 = document.getElementById('scPerk4')
let scPerk6 = document.getElementById('scPerk5-1')
let scPerk7 = document.getElementById('scPerk5-2')
let scPerk8 = document.getElementById('scPerk6-1')
let scPerk9 = document.getElementById('scPerk6-2')
let scPerk10 = document.getElementById('scPerk7')
let scPerk11 = document.getElementById('scPerk8-1')
let scPerk12 = document.getElementById('scPerk8-2')
let scPerk13 = document.getElementById('scPerk9')
let scPerk14 = document.getElementById('scPerk10')
let scPerk15 = document.getElementById('scPerk11')

scConfirmPerksButton.onclick = () => {
  if (scPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'scchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (scPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod14) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'scchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (scPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'scchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (scPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod17) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/sc/am-sc-Plus0.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk4', 'scchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (scPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod16) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/sc/am-sc-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk5', 'scchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (scPerk6.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod5) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/sc/am-sc-Plus2.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk6', 'scchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (scPerk7.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod6) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/sc/am-sc-Plus2.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk7', 'scchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (scPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sc/am-sc-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk8', 'scchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (scPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sc/am-sc-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk9', 'scchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (scPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sc/am-sc-RollingPierce3.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk10', 'scchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (scPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sc/am-sc-RollingPoison.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk11', 'scchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (scPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sc/am-sc-RollingPoison.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk12', 'scchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (scPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sc/am-sc-RollingMuddle.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk13', 'scchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (scPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sc/am-sc-RollingInvisible.png'
    modDeckArray.push(newCard)
    setCookie('perk14', 'scchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (scPerk15.classList.contains('checked')) {
    setCookie('perk15', 'scchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Tinkerer
let tiPerk1 = document.getElementById('tiPerk1-1')
let tiPerk2 = document.getElementById('tiPerk1-2')
let tiPerk3 = document.getElementById('tiPerk2')
let tiPerk4 = document.getElementById('tiPerk3')
let tiPerk5 = document.getElementById('tiPerk4')
let tiPerk6 = document.getElementById('tiPerk5')
let tiPerk7 = document.getElementById('tiPerk6')
let tiPerk8 = document.getElementById('tiPerk7-1')
let tiPerk9 = document.getElementById('tiPerk7-2')
let tiPerk10 = document.getElementById('tiPerk8-1')
let tiPerk11 = document.getElementById('tiPerk8-2')
let tiPerk12 = document.getElementById('tiPerk9-1')
let tiPerk13 = document.getElementById('tiPerk9-2')
let tiPerk14 = document.getElementById('tiPerk10')
let tiPerk15 = document.getElementById('tiPerk11')

tiConfirmPerksButton.onclick = () => {
  if (tiPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'tichosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (tiPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod14) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'tichosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (tiPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod17) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/ti/am-ti-Plus0.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'tichosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (tiPerk4.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk4', 'tichosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (tiPerk5.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-Plus3.png'
    modDeckArray.push(newCard)
    setCookie('perk5', 'tichosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (tiPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-RollingFire.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk6', 'tichosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (tiPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-RollingMuddle.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk7', 'tichosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (tiPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-Plus1Wound.png'
    modDeckArray.push(newCard)
    setCookie('perk8', 'tichosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (tiPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-Plus1Wound.png'
    modDeckArray.push(newCard)
    setCookie('perk9', 'tichosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (tiPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    setCookie('perk10', 'tichosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (tiPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    setCookie('perk11', 'tichosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (tiPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-Plus1HealSelf2.png'
    modDeckArray.push(newCard)
    setCookie('perk12', 'tichosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (tiPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-Plus1HealSelf2.png'
    modDeckArray.push(newCard)
    setCookie('perk13', 'tichosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (tiPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ti/am-ti-AddTarget.png'
    modDeckArray.push(newCard)
    setCookie('perk14', 'tichosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (tiPerk15.classList.contains('checked')) {
    setCookie('perk15', 'tichosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Beast tyrant
let btPerk1 = document.getElementById('btPerk1')
let btPerk2 = document.getElementById('btPerk2-1')
let btPerk3 = document.getElementById('btPerk2-2')
let btPerk4 = document.getElementById('btPerk2-3')
let btPerk5 = document.getElementById('btPerk3-1')
let btPerk6 = document.getElementById('btPerk3-2')
let btPerk7 = document.getElementById('btPerk4-1')
let btPerk8 = document.getElementById('btPerk4-2')
let btPerk9 = document.getElementById('btPerk5-1')
let btPerk10 = document.getElementById('btPerk5-2')
let btPerk11 = document.getElementById('btPerk6-1')
let btPerk12 = document.getElementById('btPerk6-2')
let btPerk13 = document.getElementById('btPerk6-3')
let btPerk14 = document.getElementById('btPerk7')
let btPerk15 = document.getElementById('btPerk8')

btConfirmPerksButton.onclick = () => {
  if (btPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'btchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (btPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod14) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/bt/am-bt-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'btchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (btPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod15) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/bt/am-bt-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'btchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (btPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod16) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/bt/am-bt-Plus1.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk4', 'btchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (btPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/bt/am-bt-Plus2.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk5', 'btchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (btPerk6.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod2) {
        modDeckArray.splice(i, 1)
        let newCard = 'images/attack-modifiers/bt/am-bt-Plus2.png'
        modDeckArray.push(newCard)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk6', 'btchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (btPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bt/am-bt-Plus1Wound.png'
    modDeckArray.push(newCard)
    setCookie('perk7', 'btchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (btPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bt/am-bt-Plus1Wound.png'
    modDeckArray.push(newCard)
    setCookie('perk8', 'btchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (btPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bt/am-bt-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    setCookie('perk9', 'btchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (btPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bt/am-bt-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    setCookie('perk10', 'btchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (btPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bt/am-bt-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk11', 'btchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (btPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bt/am-bt-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk12', 'btchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (btPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bt/am-bt-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk13', 'btchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (btPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bt/am-bt-RollingLeaf.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk14', 'btchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (btPerk15.classList.contains('checked')) {
    setCookie('perk15', 'btchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//nightshroud

let nsPerk1 = document.getElementById('nsPerk1-1')
let nsPerk2 = document.getElementById('nsPerk1-2')
let nsPerk3 = document.getElementById('nsPerk2')
let nsPerk4 = document.getElementById('nsPerk3-1')
let nsPerk5 = document.getElementById('nsPerk3-2')
let nsPerk6 = document.getElementById('nsPerk4-1')
let nsPerk7 = document.getElementById('nsPerk4-2')
let nsPerk8 = document.getElementById('nsPerk5-1')
let nsPerk9 = document.getElementById('nsPerk5-2')
let nsPerk10 = document.getElementById('nsPerk6-1')
let nsPerk11 = document.getElementById('nsPerk6-2')
let nsPerk12 = document.getElementById('nsPerk7')
let nsPerk13 = document.getElementById('nsPerk8')
let nsPerk14 = document.getElementById('nsPerk9')
let nsPerk15 = document.getElementById('nsPerk10')
let hasMinus1 = 0

nsConfirmPerksButton.onclick = () => {
  if (nsPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'nschosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (nsPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod14) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'nschosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (nsPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'nschosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (nsPerk4.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-Minus1Night.png'
    modDeckArray.push(newCard)
    hasMinus1++
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'nschosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (nsPerk5.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-Minus1Night.png'
    modDeckArray.push(newCard)
    hasMinus1++
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'nschosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (nsPerk6.classList.contains('checked') && hasMinus1 > 0) {
    hasMinus1--
    modDeckArray.pop()
    let newCard = 'images/attack-modifiers/ns/am-ns-Plus1Night.png'
    modDeckArray.unshift(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk6', 'nschosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (nsPerk7.classList.contains('checked') && hasMinus1 > 0) {
    hasMinus1--
    modDeckArray.pop()
    let newCard = 'images/attack-modifiers/ns/am-ns-Plus1Night.png'
    modDeckArray.unshift(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk7', 'nschosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (nsPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-Plus1Invisible.png'
    modDeckArray.push(newCard)
    setCookie('perk8', 'nschosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (nsPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-Plus1Invisible.png'
    modDeckArray.push(newCard)
    setCookie('perk9', 'nschosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (nsPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-RollingMuddle.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk10', 'nschosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (nsPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-RollingMuddle.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk11', 'nschosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (nsPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk12', 'nschosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (nsPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-RollingCurse.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk13', 'nschosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (nsPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-RollingAddTarget.png'
    modDeckArray.push(newCard)
    setCookie('perk14', 'nschosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (nsPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ns/am-ns-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk15', 'nschosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Quartermaster Perks

let qmPerk1 = document.getElementById('qmPerk1-1')
let qmPerk2 = document.getElementById('qmPerk1-2')
let qmPerk3 = document.getElementById('qmPerk2')
let qmPerk4 = document.getElementById('qmPerk3-1')
let qmPerk5 = document.getElementById('qmPerk3-2')
let qmPerk6 = document.getElementById('qmPerk4-1')
let qmPerk7 = document.getElementById('qmPerk4-2')
let qmPerk8 = document.getElementById('qmPerk5')
let qmPerk9 = document.getElementById('qmPerk6')
let qmPerk10 = document.getElementById('qmPerk7')
let qmPerk11 = document.getElementById('qmPerk8')
let qmPerk12 = document.getElementById('qmPerk9-1')
let qmPerk13 = document.getElementById('qmPerk9-2')
let qmPerk14 = document.getElementById('qmPerk9-3')
let qmPerk15 = document.getElementById('qmPerk10')

qmConfirmPerksButton.onclick = () => {
  if (qmPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'qmchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (qmPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'qmchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (qmPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'qmchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (qmPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/qm/am-qm-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'qmchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (qmPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/qm/am-qm-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'qmchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (qmPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk6', 'qmchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (qmPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk7', 'qmchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (qmPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RollingMuddle.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk8', 'qmchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (qmPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RollingPierce3.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk9', 'qmchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (qmPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RollingStun.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk10', 'qmchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (qmPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RollingAddTarget.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk11', 'qmchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (qmPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RefreshItem.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk12', 'qmchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (qmPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RefreshItem.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk13', 'qmchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (qmPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-RefreshItem.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk14', 'qmchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (qmPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/qm/am-qm-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk15', 'qmchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Elementalist Perks

let elPerk1 = document.getElementById('elPerk1-1')
let elPerk2 = document.getElementById('elPerk1-2')
let elPerk3 = document.getElementById('elPerk2')
let elPerk4 = document.getElementById('elPerk3-1')
let elPerk5 = document.getElementById('elPerk3-2')
let elPerk6 = document.getElementById('elPerk4')
let elPerk7 = document.getElementById('elPerk5')
let elPerk8 = document.getElementById('elPerk6')
let elPerk9 = document.getElementById('elPerk7')
let elPerk10 = document.getElementById('elPerk8')
let elPerk11 = document.getElementById('elPerk9')
let elPerk12 = document.getElementById('elPerk10')
let elPerk13 = document.getElementById('elPerk11')
let elPerk14 = document.getElementById('elPerk12')
let elPerk15 = document.getElementById('elPerk13')

elConfirmPerksButton.onclick = () => {
  if (elPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'elchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (elPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'elchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (elPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/el/am-el-Plus1.png'
    modDeckArray.push(newCard)
    setCookie('perk3', 'elchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (elPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/el/am-el-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'elchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (elPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/el/am-el-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'elchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (elPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/el/am-el-Fire.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk6', 'elchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (elPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/el/am-el-Ice.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk7', 'elchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (elPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/el/am-el-Wind.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk8', 'elchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (elPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/el/am-el-Leaf.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk9', 'elchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (elPerk10.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/el/am-el-Fire.png'
    let newCard2 = 'images/attack-modifiers/el/am-el-Leaf.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard2)
    setCookie('perk10', 'elchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (elPerk11.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/el/am-el-Ice.png'
    let newCard2 = 'images/attack-modifiers/el/am-el-Wind.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard2)
    setCookie('perk11', 'elchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (elPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/el/am-el-Plus1Push1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk12', 'elchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (elPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/el/am-el-Plus1Wound.png'
    modDeckArray.push(newCard)
    setCookie('perk13', 'elchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (elPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/el/am-el-Stun.png'
    modDeckArray.push(newCard)
    setCookie('perk14', 'elchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (elPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/el/am-el-AddTarget.png'
    modDeckArray.push(newCard)
    setCookie('perk15', 'elchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Sunkeeper Perks

let skPerk1 = document.getElementById('skPerk1-1')
let skPerk2 = document.getElementById('skPerk1-2')
let skPerk3 = document.getElementById('skPerk2')
let skPerk4 = document.getElementById('skPerk3')
let skPerk5 = document.getElementById('skPerk4')
let skPerk6 = document.getElementById('skPerk5-1')
let skPerk7 = document.getElementById('skPerk5-2')
let skPerk8 = document.getElementById('skPerk6-1')
let skPerk9 = document.getElementById('skPerk6-2')
let skPerk10 = document.getElementById('skPerk7')
let skPerk11 = document.getElementById('skPerk8-1')
let skPerk12 = document.getElementById('skPerk8-2')
let skPerk13 = document.getElementById('skPerk9')
let skPerk14 = document.getElementById('skPerk10')
let skPerk15 = document.getElementById('skPerk11')

skConfirmPerksButton.onclick = () => {
  if (skPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'skchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (skPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'skchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (skPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'skchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (skPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod17) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/sk/am-sk-Plus0.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'skchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (skPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/sk/am-sk-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'skchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (skPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk6', 'skchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (skPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk7', 'skchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (elPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk8', 'skchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (skPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk9', 'skchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (skPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-RollingStun.png'
    modDeckArray.push(newCard)
    setCookie('perk10', 'skchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (skPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-RollingSun.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk11', 'skchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (skPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-RollingSun.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk12', 'skchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (skPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-RollingShield1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk13', 'skchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (skPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sk/am-sk-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    setCookie('perk14', 'skchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (skPerk15.classList.contains('checked')) {
    setCookie('perk15', 'skchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Summoner Perks

let suPerk1 = document.getElementById('suPerk1')
let suPerk2 = document.getElementById('suPerk2')
let suPerk3 = document.getElementById('suPerk3-1')
let suPerk4 = document.getElementById('suPerk3-2')
let suPerk5 = document.getElementById('suPerk3-3')
let suPerk6 = document.getElementById('suPerk4-1')
let suPerk7 = document.getElementById('suPerk4-2')
let suPerk8 = document.getElementById('suPerk5')
let suPerk9 = document.getElementById('suPerk6')
let suPerk10 = document.getElementById('suPerk7-1')
let suPerk11 = document.getElementById('suPerk7-2')
let suPerk12 = document.getElementById('suPerk7-3')
let suPerk13 = document.getElementById('suPerk8')
let suPerk14 = document.getElementById('suPerk9')
let suPerk15 = document.getElementById('suPerk10')

suConfirmPerksButton.onclick = () => {
  if (suPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'suchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (suPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod17) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/su/am-su-Plus0.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk2', 'suchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (suPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/su/am-su-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk3', 'suchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (suPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/su/am-su-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'suchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (suPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/su/am-su-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'suchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (suPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk6', 'suchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (suPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk7', 'suchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (suPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-RollingWound.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk8', 'suchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (suPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-RollingPoison.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk9', 'suchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (suPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk10', 'suchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (suPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk11', 'suchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (suPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk12', 'suchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (suPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-RollingFire.png'
    let newCard2 = 'images/attack-modifiers/su/am-su-RollingWind.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard2)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk13', 'suchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (suPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-RollingMoon.png'
    let newCard2 = 'images/attack-modifiers/su/am-su-RollingLeaf.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard2)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk14', 'suchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (suPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/su/am-su-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk15', 'suchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Berserker Perks

let bePerk1 = document.getElementById('bePerk1')
let bePerk2 = document.getElementById('bePerk2')
let bePerk3 = document.getElementById('bePerk3-1')
let bePerk4 = document.getElementById('bePerk3-2')
let bePerk5 = document.getElementById('bePerk4-1')
let bePerk6 = document.getElementById('bePerk4-2')
let bePerk7 = document.getElementById('bePerk5-1')
let bePerk8 = document.getElementById('bePerk5-2')
let bePerk9 = document.getElementById('bePerk6-1')
let bePerk10 = document.getElementById('bePerk6-2')
let bePerk11 = document.getElementById('bePerk7')
let bePerk12 = document.getElementById('bePerk8')
let bePerk13 = document.getElementById('bePerk9-1')
let bePerk14 = document.getElementById('bePerk9-2')
let bePerk15 = document.getElementById('bePerk10')

beConfirmPerksButton.onclick = () => {
  if (bePerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'bechosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (bePerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'bechosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (bePerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/be/am-be-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk3', 'bechosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (bePerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/be/am-be-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'bechosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (bePerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/be/am-be-RollingPlus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'bechosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (bePerk6.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/be/am-be-RollingPlus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk6', 'bechosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (bePerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/be/am-be-RollingWound.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk7', 'bechosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (bePerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/be/am-be-RollingWound.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk8', 'bechosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (bePerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/be/am-be-RollingStun.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk9', 'bechosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (bePerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/be/am-be-RollingStun.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk10', 'bechosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (bePerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/be/am-be-Rolling+1Disarm.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk11', 'bechosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (bePerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/be/am-be-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk12', 'bechosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (bePerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/be/am-be-Plus2Fire.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk13', 'bechosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (bePerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/be/am-be-Plus2Fire.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk14', 'bechosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (bePerk15.classList.contains('checked')) {
    setCookie('perk15', 'bechosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Soothsinger Perks
let ssPerk1 = document.getElementById('ssPerk1-1')
let ssPerk2 = document.getElementById('ssPerk1-2')
let ssPerk3 = document.getElementById('ssPerk2')
let ssPerk4 = document.getElementById('ssPerk3-1')
let ssPerk5 = document.getElementById('ssPerk3-2')
let ssPerk6 = document.getElementById('ssPerk4')
let ssPerk7 = document.getElementById('ssPerk5')
let ssPerk8 = document.getElementById('ssPerk6')
let ssPerk9 = document.getElementById('ssPerk7')
let ssPerk10 = document.getElementById('ssPerk8')
let ssPerk11 = document.getElementById('ssPerk9')
let ssPerk12 = document.getElementById('ssPerk10')
let ssPerk13 = document.getElementById('ssPerk11')
let ssPerk14 = document.getElementById('ssPerk12-1')
let ssPerk15 = document.getElementById('ssPerk12-2')

ssConfirmPerksButton.onclick = () => {
  if (ssPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'sschosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (ssPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'sschosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (ssPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod17) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'sschosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (ssPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod7) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Plus4.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'sschosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (ssPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod7) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Plus4.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'sschosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (ssPerk6.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk6', 'sschosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (ssPerk7.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Plus1Disarm.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk7', 'sschosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (ssPerk8.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Plus2Wound.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk8', 'sschosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (ssPerk9.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Plus2Poison.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk9', 'sschosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (ssPerk10.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Plus2Curse.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk10', 'sschosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (ssPerk11.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Plus3Muddle.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk11', 'sschosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (ssPerk12.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ss/am-ss-Stun.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk12', 'sschosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (ssPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ss/am-ss-RollingPlus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk13', 'sschosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (ssPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ss/am-ss-RollingCurse.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk14', 'sschosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (ssPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ss/am-ss-RollingCurse.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk15', 'sschosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Sawbones Perks
let sbPerk1 = document.getElementById('sbPerk1-1')
let sbPerk2 = document.getElementById('sbPerk1-2')
let sbPerk3 = document.getElementById('sbPerk2')
let sbPerk4 = document.getElementById('sbPerk3-1')
let sbPerk5 = document.getElementById('sbPerk3-2')
let sbPerk6 = document.getElementById('sbPerk4-1')
let sbPerk7 = document.getElementById('sbPerk4-2')
let sbPerk8 = document.getElementById('sbPerk5-1')
let sbPerk9 = document.getElementById('sbPerk5-2')
let sbPerk10 = document.getElementById('sbPerk6-1')
let sbPerk11 = document.getElementById('sbPerk6-2')
let sbPerk12 = document.getElementById('sbPerk7')
let sbPerk13 = document.getElementById('sbPerk8-1')
let sbPerk14 = document.getElementById('sbPerk8-2')
let sbPerk15 = document.getElementById('sbPerk9')

sbConfirmPerksButton.onclick = () => {
  if (sbPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'sbchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (sbPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 2)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'sbchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (sbPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk3', 'sbchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (sbPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/sb/am-sb-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'sbchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (sbPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/sb/am-sb-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'sbchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (sbPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-RollingPlus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk6', 'sbchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (sbPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-RollingPlus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk7', 'sbchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (sbPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk8', 'sbchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (sbPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-Plus1Immobilize.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk9', 'sbchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (sbPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-RollingWound.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk10', 'sbchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (sbPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-RollingWound.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk11', 'sbchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (sbPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-RollingStun.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk12', 'sbchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (sbPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-RollingHeal3.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk13', 'sbchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (sbPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-RollingHeal3.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk14', 'sbchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (sbPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/sb/am-sb-RefreshItem.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk15', 'sbchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Plagueherald Perks
let phPerk1 = document.getElementById('phPerk1')
let phPerk2 = document.getElementById('phPerk2-1')
let phPerk3 = document.getElementById('phPerk2-2')
let phPerk4 = document.getElementById('phPerk3-1')
let phPerk5 = document.getElementById('phPerk3-2')
let phPerk6 = document.getElementById('phPerk4')
let phPerk7 = document.getElementById('phPerk5-1')
let phPerk8 = document.getElementById('phPerk5-2')
let phPerk9 = document.getElementById('phPerk5-3')
let phPerk10 = document.getElementById('phPerk6')
let phPerk11 = document.getElementById('phPerk7')
let phPerk12 = document.getElementById('phPerk8')
let phPerk13 = document.getElementById('phPerk9-1')
let phPerk14 = document.getElementById('phPerk9-2')
let phPerk15 = document.getElementById('phPerk10')

phConfirmPerksButton.onclick = () => {
  if (phPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod17) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus0.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk1', 'phchosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (phPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk2', 'phchosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (phPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk3', 'phchosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (phPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'phchosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (phPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus2.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'phchosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (phPerk6.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk6', 'phchosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (phPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus1Wind.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk7', 'phchosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (phPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus1Wind.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk8', 'phchosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (phPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus1Wind.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk9', 'phchosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (phPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-RollingPoison.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk10', 'phchosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (phPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-RollingCurse.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk11', 'phchosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (phPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-RollingImmobilize.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk12', 'phchosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (phPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-RollingStun.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk13', 'phchosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (phPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-RollingStun.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk14', 'phchosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (phPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/ph/am-ph-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk15', 'phchosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}

//Bladeswarm Perks
let bsPerk1 = document.getElementById('bsPerk1')
let bsPerk2 = document.getElementById('bsPerk2')
let bsPerk3 = document.getElementById('bsPerk3')
let bsPerk4 = document.getElementById('bsPerk4')
let bsPerk5 = document.getElementById('bsPerk5')
let bsPerk6 = document.getElementById('bsPerk6')
let bsPerk7 = document.getElementById('bsPerk7-1')
let bsPerk8 = document.getElementById('bsPerk7-2')
let bsPerk9 = document.getElementById('bsPerk8-1')
let bsPerk10 = document.getElementById('bsPerk8-2')
let bsPerk11 = document.getElementById('bsPerk9-1')
let bsPerk12 = document.getElementById('bsPerk9-2')
let bsPerk13 = document.getElementById('bsPerk10')
let bsPerk14 = document.getElementById('bsPerk11')
let bsPerk15 = document.getElementById('bsPerk12')

bsConfirmPerksButton.onclick = () => {
  if (bsPerk1.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod17) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk1', 'bschosen', 365)
  } else {
    setCookie('perk1', 'notChosen', 365)
  }
  if (bsPerk2.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod1) {
        modDeckArray.splice(i, 4)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    setCookie('perk2', 'bschosen', 365)
  } else {
    setCookie('perk2', 'notChosen', 365)
  }
  if (bsPerk3.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1Wind.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk3', 'bschosen', 365)
  } else {
    setCookie('perk3', 'notChosen', 365)
  }
  if (bsPerk4.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1Leaf.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk4', 'bschosen', 365)
  } else {
    setCookie('perk4', 'notChosen', 365)
  }
  if (bsPerk5.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1Light.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk5', 'bschosen', 365)
  } else {
    setCookie('perk5', 'notChosen', 365)
  }
  if (bsPerk6.classList.contains('checked')) {
    for (var i = 0; i < modDeckArray.length; i++) {
      if (modDeckArray[i] === mod12) {
        modDeckArray.splice(i, 1)
        i = modDeckArray.length
        cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
      }
    }
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1Dark.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk6', 'bschosen', 365)
  } else {
    setCookie('perk6', 'notChosen', 365)
  }
  if (bsPerk7.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk7', 'bschosen', 365)
  } else {
    setCookie('perk7', 'notChosen', 365)
  }
  if (bsPerk8.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-RollingHeal1.png'
    modDeckArray.push(newCard)
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk8', 'bschosen', 365)
  } else {
    setCookie('perk8', 'notChosen', 365)
  }
  if (bsPerk9.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1Wound.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk9', 'bschosen', 365)
  } else {
    setCookie('perk9', 'notChosen', 365)
  }
  if (bsPerk10.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1Wound.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk10', 'bschosen', 365)
  } else {
    setCookie('perk10', 'notChosen', 365)
  }
  if (bsPerk11.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1Poison.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk11', 'bschosen', 365)
  } else {
    setCookie('perk11', 'notChosen', 365)
  }
  if (bsPerk12.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1Poison.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk12', 'bschosen', 365)
  } else {
    setCookie('perk12', 'notChosen', 365)
  }
  if (bsPerk13.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus2Muddle.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk13', 'bschosen', 365)
  } else {
    setCookie('perk13', 'notChosen', 365)
  }
  if (bsPerk14.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk14', 'bschosen', 365)
  } else {
    setCookie('perk14', 'notChosen', 365)
  }
  if (bsPerk15.classList.contains('checked')) {
    let newCard = 'images/attack-modifiers/bs/am-bs-Plus1.png'
    modDeckArray.push(newCard)
    cardsInDeckText.innerHTML = 'Cards in Deck: ' + modDeckArray.length
    setCookie('perk15', 'bschosen', 365)
  } else {
    setCookie('perk15', 'notChosen', 365)
  }
  defaultDeckArray = modDeckArray.slice()
  confirmPerks()
}
//Modal for showing what is in the played modifier deck

var zoomModal = document.getElementById('zoomModal')
var close = document.getElementsByClassName('close')[0]
playedModifiers.onclick = function () {
  zoomModal.style.display = 'block'
}

close.onclick = function () {
  zoomModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == zoomModal) {
    zoomModal.style.display = 'none'
  }
}

// Secret code
let secret = '3838404037393739666513' //Konami Code
let input = ''
let timer
let mode = false
let showclassName = false

// $(document).ready(function () {
//   $('#flash').hide()
// })

$(document).keyup(function (e) {
  input += e.which
  clearTimeout(timer)
  timer = setTimeout(function () {
    input = ''
  }, 5000)
  check_input()
})

function unlockBladswarm() {
  let bladeswarm = document.getElementById('bladeswarm').parentElement
  bladeswarm.classList.remove('hiding')
}

function check_input() {
  if (input == secret) {
    //the secret code
    unlockBladswarm()
    alert(
      `You've unlocked Bladeswarm! We will remember this so that you don't have to enter that code each time you visit the site.`
    )
    setCookie('bladeswarmUnlocked', true, 365)
  }
}

$(document).ready(function () {
  setInterval(function () {
    $('#info').html('Keystroke: ' + input)
  }, 100)
})
