it('finds all character data', () => {
  const allCharacterData = require('./../gloomhavenCharacterData.json')
  expect(allCharacterData).toBeDefined()
})

it('has a tracker for every card', () => {
  const allCharacterData = require('./../gloomhavenCharacterData.json')
  allCharacterData.forEach((character) => {
    character.cards.forEach((card) => {
      expect(card.tracker).toBeDefined()
    })
  })
})
