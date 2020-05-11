////////////////////////////////////////////////////////////////////////////////////////////////////
// This code had major spoilers. Please don't look at the code if you don't want anything spoiled.//
////////////////////////////////////////////////////////////////////////////////////////////////////

function getCharacter(character) {
  switch (character) {
    case 'plagueherald':
      character = {
        name: 'plagueherald',
        initials: 'ph',
        handSize: 11,
        startingCards: 14,
        cards: [
          {
            title: 'vile-pestilence',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 221,
                left: 137,
              },
            ],
          },
          {
            title: 'grasping-vermin',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'wretched-swarm',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 63,
                left: 105,
              },
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'spread-the-plague',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 217,
                left: 139,
              },
              {
                top: 233,
                left: 131,
              },
            ],
          },
          {
            title: 'biting-gnats',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 65,
                left: 140,
              },
              {
                top: 95,
                left: 129,
              },
              {
                top: 223,
                left: 135,
              },
            ],
          },
          {
            title: 'winged-congregation',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 205,
                left: 136,
              },
              {
                top: 231,
                left: 132,
              },
            ],
          },
          {
            title: 'creeping-curse',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 138,
              },
              {
                top: 206,
                left: 136,
              },
              {
                top: 231,
                left: 138,
              },
            ],
          },
          {
            title: 'gathering-doom',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 78,
                left: 138,
              },
            ],
          },
          {
            title: 'paralyzing-bite',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 67,
                left: 137,
              },
              {
                top: 204,
                left: 135,
              },
            ],
          },
          {
            title: 'foul-wind',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'scattered-terror',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 58,
                left: 138,
              },
              {
                top: 73,
                left: 130,
              },
              {
                top: 87,
                left: 129,
              },
              {
                top: 101,
                left: 132,
              },
            ],
          },
          {
            title: 'epidemic',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 66,
                left: 139,
              },
              {
                top: 96,
                left: 129,
              },
            ],
          },
          {
            title: 'virulent-strain',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'blistering-vortex',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 71,
                left: 106,
              },
              {
                top: 84,
                left: 126,
              },
              {
                top: 194,
                left: 135,
              },
              {
                top: 219,
                left: 135,
              },
            ],
          },
          {
            title: 'under-the-skin',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 67,
                left: 138,
              },
              {
                top: 67,
                left: 155,
              },
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'rot-maggots',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 58,
                left: 138,
              },
              {
                top: 226,
                left: 129,
              },
              {
                top: 240,
                left: 129,
              },
            ],
          },
          {
            title: 'succumb-to-the-gift',
            level: 3,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 221,
                left: 136,
              },
            ],
          },
          {
            title: 'fetid-flurry',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 138,
              },
              {
                top: 213,
                left: 135,
              },
            ],
          },
          {
            title: 'storm-of-wings',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 223,
                left: 137,
              },
            ],
          },
          {
            title: 'nightmarish-affliction',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 52,
                left: 138,
              },
              {
                top: 83,
                left: 129,
              },
              {
                top: 241,
                left: 129,
              },
            ],
          },
          {
            title: 'accelerated-end',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 241,
                left: 129,
              },
            ],
          },
          {
            title: 'willing-sacrifice',
            level: 5,
            enhancementSpots: 0,
          },
          {
            title: 'stinging-cloud',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 194,
                left: 135,
              },
              {
                top: 218,
                left: 135,
              },
            ],
          },
          {
            title: 'black-tides',
            level: 6,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 72,
                left: 138,
              },
              {
                top: 72,
                left: 154,
              },
              {
                top: 87,
                left: 129,
              },
              {
                top: 213,
                left: 135,
              },
            ],
          },
          {
            title: 'airborne-toxin',
            level: 7,
            enhancementSpots: 0,
          },
          {
            title: 'baneful-hex',
            level: 7,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 229,
                left: 138,
              },
            ],
          },
          {
            title: 'spreading-scourge',
            level: 8,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 57,
                left: 129,
              },
              {
                top: 57,
                left: 148,
              },
              {
                top: 225,
                left: 129,
              },
              {
                top: 240,
                left: 129,
              },
            ],
          },
          {
            title: 'grim-bargain',
            level: 8,
            enhancementSpots: 0,
          },
          {
            title: 'mass-extinction',
            level: 9,
            enhancementSpots: 0,
          },
          {
            title: 'convert-the-flock',
            level: 9,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 57,
                left: 138,
              },
              {
                top: 72,
                left: 129,
              },
              {
                top: 87,
                left: 129,
              },
            ],
          },
        ],
      }
      return character
    case 'elementalist':
      character = {
        name: 'elementalist',
        initials: 'el',
        handSize: 10,
        startingCards: 13,
        cards: [
          {
            title: 'raw-enhancement',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 61,
                left: 137,
              },
              {
                top: 200,
                left: 136,
              },
            ],
          },
          {
            title: 'pure-augmentation',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 61,
                left: 137,
              },
              {
                top: 200,
                left: 137,
              },
            ],
          },
          {
            title: 'formless-power',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 61,
                left: 139,
              },
              {
                top: 76,
                left: 130,
              },
            ],
          },
          {
            title: 'shaping-the-ether',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 57,
                left: 138,
              },
            ],
          },
          {
            title: 'stoking-hail',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 75,
                left: 139,
              },
              {
                top: 91,
                left: 129,
              },
              {
                top: 211,
                left: 136,
              },
            ],
          },
          {
            title: 'tremulant-cyclone',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 69,
                left: 109,
              },
              {
                top: 211,
                left: 137,
              },
            ],
          },
          {
            title: 'infernal-vortex',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 138,
              },
              {
                top: 73,
                left: 154,
              },
              {
                top: 211,
                left: 137,
              },
            ],
          },
          {
            title: 'lava-eruption',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 73,
                left: 139,
              },
              {
                top: 211,
                left: 137,
              },
            ],
          },
          {
            title: 'ice-spikes',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 68,
                left: 116,
              },
              {
                top: 86,
                left: 136,
              },
              {
                top: 198,
                left: 139,
              },
              {
                top: 213,
                left: 131,
              },
            ],
          },
          {
            title: 'frigid-torrent',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 76,
                left: 138,
              },
              {
                top: 198,
                left: 110,
              },
              {
                top: 215,
                left: 132,
              },
              {
                top: 227,
                left: 102,
              },
            ],
          },
          {
            title: 'malleable-evocation',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 54,
                left: 138,
              },
              {
                top: 69,
                left: 129,
              },
              {
                top: 194,
                left: 136,
              },
            ],
          },
          {
            title: 'brilliant-flash',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 72,
                left: 133,
              },
              {
                top: 72,
                left: 148,
              },
            ],
          },
          {
            title: 'encompassing-shadow',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 193,
                left: 138,
              },
            ],
          },
          {
            title: 'boiling-arc',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 81,
                left: 110,
              },
              {
                top: 206,
                left: 137,
              },
            ],
          },
          {
            title: 'crystallizing-blast',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 72,
                left: 109,
              },
              {
                top: 88,
                left: 100,
              },
              {
                top: 207,
                left: 136,
              },
            ],
          },
          {
            title: 'burial',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 55,
                left: 117,
              },
              {
                top: 204,
                left: 140,
              },
            ],
          },
          {
            title: 'chain-lightning',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 51,
                left: 141,
              },
              {
                top: 204,
                left: 134,
              },
            ],
          },
          {
            title: 'primal-duality',
            level: 4,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 65,
                left: 138,
              },
              {
                top: 65,
                left: 153,
              },
              {
                top: 95,
                left: 130,
              },
              {
                top: 213,
                left: 138,
              },
            ],
          },
          {
            title: 'gravel-vortex',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 72,
                left: 138,
              },
            ],
          },
          {
            title: 'obsidian-shards',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 66,
                left: 138,
              },
              {
                top: 191,
                left: 135,
              },
            ],
          },
          {
            title: 'winters-edge',
            level: 5,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 72,
                left: 138,
              },
              {
                top: 202,
                left: 134,
              },
              {
                top: 218,
                left: 129,
              },
            ],
          },
          {
            title: 'eye-of-the-hurricane',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 53,
                left: 133,
              },
              {
                top: 85,
                left: 138,
              },
              {
                top: 202,
                left: 137,
              },
            ],
          },
          {
            title: 'simulacrum',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 51,
                left: 139,
              },
              {
                top: 213,
                left: 81,
              },
              {
                top: 213,
                left: 122,
              },
            ],
          },
          {
            title: 'vengeance',
            level: 7,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 86,
                left: 146,
              },
              {
                top: 183,
                left: 136,
              },
              {
                top: 205,
                left: 144,
              },
            ],
          },
          {
            title: 'pragmatic-reinforcement',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 56,
                left: 131,
              },
              {
                top: 191,
                left: 138,
              },
            ],
          },
          {
            title: 'volatile-consumption',
            level: 8,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 186,
                left: 136,
              },
            ],
          },
          {
            title: 'elemental-aegis',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 61,
                left: 135,
              },
              {
                top: 205,
                left: 133,
              },
              {
                top: 205,
                left: 150,
              },
            ],
          },
          {
            title: 'ethereal-manifestation',
            level: 9,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 79,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 122,
              },
            ],
          },
          {
            title: 'eternal-equilibrium',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 62,
                left: 138,
              },
              {
                top: 195,
                left: 134,
              },
            ],
          },
        ],
      }
      return character
    case 'quartermaster':
      character = {
        name: 'quartermaster',
        initials: 'qm',
        handSize: 9,
        startingCards: 12,
        cards: [
          {
            title: 'restock',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 220,
                left: 138,
              },
            ],
          },
          {
            title: 'oversized-pack',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'sharpening-kit',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 71,
                left: 134,
              },
            ],
          },
          {
            title: 'proficiency',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 223,
                left: 136,
              },
            ],
          },
          {
            title: 'iron-bulwark',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 204,
                left: 135,
              },
            ],
          },
          {
            title: 'hastened-step',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 94,
                left: 136,
              },
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'cleaving-axe',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 75,
                left: 119,
              },
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'impaling-spear',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 58,
                left: 157,
              },
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'crippling-bow',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 211,
                left: 138,
              },
            ],
          },
          {
            title: 'crushing-hammer',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 138,
              },
              {
                top: 73,
                left: 155,
              },
              {
                top: 218,
                left: 136,
              },
            ],
          },
          {
            title: 'scroll-of-recall',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 212,
                left: 136,
              },
              {
                top: 242,
                left: 130,
              },
            ],
          },
          {
            title: 'reserved-energy',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'reforge',
            level: 2,
            enhancementSpots: 0,
          },
          {
            title: 'bladed-boomerang',
            level: 2,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 225,
                left: 138,
              },
            ],
          },
          {
            title: 'continual-supply',
            level: 3,
            enhancementSpots: 0,
          },
          {
            title: 'scroll-of-lightning',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 193,
                left: 136,
              },
              {
                top: 215,
                left: 136,
              },
            ],
          },
          {
            title: 'side-pouch',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 213,
                left: 136,
              },
            ],
          },
          {
            title: 'giant-club',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 220,
                left: 139,
              },
            ],
          },
          {
            title: 'reinforced-steel',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'scroll-of-judgment',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 206,
                left: 136,
              },
              {
                top: 229,
                left: 134,
              },
            ],
          },
          {
            title: 'catastrophic-bomb',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 55,
                left: 122,
              },
              {
                top: 55,
                left: 141,
              },
            ],
          },
          {
            title: 'quiver-of-arrows',
            level: 6,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 223,
                left: 137,
              },
            ],
          },
          {
            title: 'scroll-of-blizzards',
            level: 7,
            enhancementSpots: 5,
            enchancements: [
              {
                top: 48,
                left: 142,
              },
              {
                top: 71,
                left: 95,
              },
              {
                top: 134,
                left: 113,
              },
              {
                top: 191,
                left: 153,
              },
              {
                top: 228,
                left: 135,
              },
            ],
          },
          {
            title: 'refreshment',
            level: 7,
            enhancementSpots: 0,
          },
          {
            title: 'portable-ballista',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 54,
                left: 140,
              },
              {
                top: 69,
                left: 115,
              },
              {
                top: 90,
                left: 104,
              },
            ],
          },
          {
            title: 'fortified-position',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 193,
                left: 137,
              },
              {
                top: 215,
                left: 137,
              },
            ],
          },
          {
            title: 'scroll-of-annihilation',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 205,
                left: 137,
              },
              {
                top: 228,
                left: 143,
              },
            ],
          },
          {
            title: 'bag-of-holding',
            level: 9,
            enhancementSpots: 0,
          },
        ],
      }
      return character
    case 'beastTyrant':
      character = {
        name: 'beastTyrant',
        initials: 'bt',
        handSize: 10,
        startingCards: 13,
        cards: [
          {
            title: 'disorienting-roar',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'spirit-swap',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 79,
                left: 136,
              },
              {
                top: 79,
                left: 152,
              },
            ],
          },
          {
            title: 'venomous-ally',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 78,
                left: 80,
              },
              {
                top: 78,
                left: 121,
              },
              {
                top: 97,
                left: 80,
              },
              {
                top: 225,
                left: 130,
              },
            ],
          },
          {
            title: 'relentless-ally',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 78,
                left: 80,
              },
              {
                top: 78,
                left: 121,
              },
              {
                top: 97,
                left: 80,
              },
              {
                top: 223,
                left: 136,
              },
            ],
          },
          {
            title: 'concentrated-rage',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 79,
                left: 139,
              },
              {
                top: 95,
                left: 130,
              },
            ],
          },
          {
            title: 'disappearing-wounds',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 87,
                left: 134,
              },
              {
                top: 212,
                left: 138,
              },
              {
                top: 212,
                left: 154,
              },
            ],
          },
          {
            title: 'patch-fur',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 205,
                left: 133,
              },
              {
                top: 205,
                left: 151,
              },
            ],
          },
          {
            title: 'maul',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 94,
                left: 138,
              },
              {
                top: 94,
                left: 154,
              },
              {
                top: 193,
                left: 137,
              },
            ],
          },
          {
            title: 'forceful-swipe',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 76,
                left: 127,
              },
              {
                top: 85,
                left: 103,
              },
              {
                top: 197,
                left: 137,
              },
              {
                top: 216,
                left: 138,
              },
            ],
          },
          {
            title: 'howling-bolts',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 138,
              },
              {
                top: 107,
                left: 131,
              },
              {
                top: 211,
                left: 136,
              },
            ],
          },
          {
            title: 'soaring-ally',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 80,
              },
              {
                top: 78,
                left: 121,
              },
            ],
          },
          {
            title: 'focused-aggression',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 101,
                left: 129,
              },
              {
                top: 212,
                left: 138,
              },
              {
                top: 212,
                left: 155,
              },
            ],
          },
          {
            title: 'borrowed-essence',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 52,
                left: 138,
              },
              {
                top: 105,
                left: 134,
              },
            ],
          },
          {
            title: 'energizing-strike',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 61,
                left: 138,
              },
              {
                top: 61,
                left: 153,
              },
            ],
          },
          {
            title: 'earthen-spikes',
            level: 2,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 82,
                left: 130,
              },
            ],
          },
          {
            title: 'vicious-ally',
            level: 3,
            enhancementSpots: 5,
            enchancements: [
              {
                top: 78,
                left: 80,
              },
              {
                top: 78,
                left: 121,
              },
              {
                top: 97,
                left: 80,
              },
              {
                top: 205,
                left: 139,
              },
              {
                top: 220,
                left: 131,
              },
            ],
          },
          {
            title: 'unstoppable-beast',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 70,
                left: 134,
              },
              {
                top: 77,
                left: 113,
              },
              {
                top: 220,
                left: 137,
              },
            ],
          },
          {
            title: 'ancient-ward',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 59,
                left: 138,
              },
              {
                top: 90,
                left: 130,
              },
              {
                top: 217,
                left: 134,
              },
            ],
          },
          {
            title: 'punch-through',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 75,
                left: 138,
              },
              {
                top: 90,
                left: 132,
              },
              {
                top: 195,
                left: 137,
              },
            ],
          },
          {
            title: 'rampage',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 75,
                left: 136,
              },
              {
                top: 112,
                left: 136,
              },
            ],
          },
          {
            title: 'stone-sigil',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 221,
                left: 136,
              },
              {
                top: 221,
                left: 153,
              },
            ],
          },
          {
            title: 'primal-blessing',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 95,
                left: 129,
              },
              {
                top: 198,
                left: 137,
              },
              {
                top: 247,
                left: 141,
              },
            ],
          },
          {
            title: 'blood-hunger',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 202,
                left: 139,
              },
              {
                top: 225,
                left: 133,
              },
            ],
          },
          {
            title: 'storm-sigil',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 225,
                left: 138,
              },
              {
                top: 225,
                left: 155,
              },
            ],
          },
          {
            title: 'tyrannical-force',
            level: 7,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 81,
                left: 130,
              },
            ],
          },
          {
            title: 'natural-remedy',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 133,
              },
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'lash-out',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 138,
              },
              {
                top: 198,
                left: 137,
              },
              {
                top: 217,
                left: 137,
              },
            ],
          },
          {
            title: 'tribal-sigil',
            level: 9,
            enhancementSpots: 0,
          },
          {
            title: 'jaws-of-death',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 198,
                left: 139,
              },
              {
                top: 255,
                left: 139,
              },
            ],
          },
        ],
      }
      return character
    case 'tinkerer':
      character = {
        name: 'tinkerer',
        initials: 'ti',
        handSize: 12,
        startingCards: 15,
        cards: [
          {
            title: 'proximity-mine',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'harmless-contraption',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 78,
                left: 80,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 215,
                left: 132,
              },
              {
                top: 231,
                left: 130,
              },
            ],
          },
          {
            title: 'flamethrower',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 69,
                left: 145,
              },
              {
                top: 74,
                left: 106,
              },
              {
                top: 101,
                left: 163,
              },
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'hook-gun',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 94,
                left: 129,
              },
              {
                top: 108,
                left: 129,
              },
            ],
          },
          {
            title: 'ink-bomb',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 60,
                left: 115,
              },
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'net-shooter',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 84,
                left: 126,
              },
              {
                top: 205,
                left: 154,
              },
              {
                top: 243,
                left: 137,
              },
            ],
          },
          {
            title: 'stun-shot',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 137,
              },
              {
                top: 93,
                left: 130,
              },
              {
                top: 221,
                left: 137,
              },
            ],
          },
          {
            title: 'reinvigorating-elixir',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 85,
                left: 133,
              },
              {
                top: 101,
                left: 130,
              },
            ],
          },
          {
            title: 'restorative-mist',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 85,
                left: 133,
              },
              {
                top: 101,
                left: 130,
              },
              {
                top: 204,
                left: 137,
              },
            ],
          },
          {
            title: 'energizing-tonic',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 72,
                left: 133,
              },
              {
                top: 72,
                left: 148,
              },
              {
                top: 211,
                left: 137,
              },
            ],
          },
          {
            title: 'enhancement-field',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 86,
                left: 139,
              },
            ],
          },
          {
            title: 'toxic-bolt',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 80,
                left: 129,
              },
              {
                top: 206,
                left: 138,
              },
              {
                top: 222,
                left: 130,
              },
            ],
          },
          {
            title: 'reviving-shock',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 77,
                left: 139,
              },
              {
                top: 106,
                left: 130,
              },
              {
                top: 205,
                left: 133,
              },
              {
                top: 205,
                left: 149,
              },
            ],
          },
          {
            title: 'volatile-concoction',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'potent-potables',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'stamina-booster',
            level: 2,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 85,
                left: 134,
              },
            ],
          },
          {
            title: 'disorienting-flash',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 81,
                left: 129,
              },
              {
                top: 95,
                left: 129,
              },
              {
                top: 243,
                left: 137,
              },
            ],
          },
          {
            title: 'tinkerers-tools',
            level: 3,
            enhancementSpots: 0,
          },
          {
            title: 'crank-bow',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 72,
                left: 139,
              },
              {
                top: 72,
                left: 154,
              },
              {
                top: 221,
                left: 137,
              },
            ],
          },
          {
            title: 'dangerous-contraption',
            level: 4,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 78,
                left: 80,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 80,
              },
              {
                top: 221,
                left: 136,
              },
            ],
          },
          {
            title: 'micro-bots',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 135,
              },
              {
                top: 73,
                left: 151,
              },
              {
                top: 212,
                left: 137,
              },
            ],
          },
          {
            title: 'noxious-vials',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 197,
                left: 114,
              },
              {
                top: 215,
                left: 124,
              },
            ],
          },
          {
            title: 'disintegration-beam',
            level: 5,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 53,
                left: 168,
              },
              {
                top: 205,
                left: 137,
              },
              {
                top: 230,
                left: 143,
              },
            ],
          },
          {
            title: 'gas-canister',
            level: 6,
            enhancementSpots: 0,
          },
          {
            title: 'auto-turret',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 216,
                left: 134,
              },
              {
                top: 232,
                left: 130,
              },
            ],
          },
          {
            title: 'murderous-contraption',
            level: 7,
            enhancementSpots: 5,
            enchancements: [
              {
                top: 78,
                left: 81,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 81,
              },
              {
                top: 216,
                left: 139,
              },
              {
                top: 232,
                left: 129,
              },
            ],
          },
          {
            title: 'curative-aerosol',
            level: 7,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 68,
                left: 133,
              },
              {
                top: 119,
                left: 133,
              },
              {
                top: 198,
                left: 133,
              },
              {
                top: 227,
                left: 131,
              },
            ],
          },
          {
            title: 'jet-propulsion',
            level: 8,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'harsh-stimulants',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 71,
                left: 139,
              },
              {
                top: 71,
                left: 154,
              },
            ],
          },
          {
            title: 'lethal-injection',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 205,
                left: 136,
              },
            ],
          },
          {
            title: 'chimeric-formula',
            level: 9,
            enhancementSpots: 0,
          },
        ],
      }
      return character
    case 'sunkeeper':
      character = {
        name: 'sunkeeper',
        initials: 'sk',
        handSize: 11,
        startingCards: 14,
        cards: [
          {
            title: 'purifying-aura',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 205,
                left: 158,
              },
            ],
          },
          {
            title: 'cautious-advance',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 71,
                left: 137,
              },
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'brilliant-prayer',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 204,
                left: 134,
              },
              {
                top: 204,
                left: 151,
              },
            ],
          },
          {
            title: 'empowering-command',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 230,
                left: 139,
              },
            ],
          },
          {
            title: 'protective-blessing',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'dazzling-charge',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 74,
                left: 134,
              },
              {
                top: 193,
                left: 137,
              },
              {
                top: 216,
                left: 137,
              },
            ],
          },
          {
            title: 'tactical-order',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 100,
                left: 137,
              },
              {
                top: 224,
                left: 136,
              },
            ],
          },
          {
            title: 'holy-strike',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 86,
                left: 140,
              },
              {
                top: 203,
                left: 139,
              },
              {
                top: 218,
                left: 130,
              },
            ],
          },
          {
            title: 'hammer-blow',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 82,
                left: 140,
              },
              {
                top: 223,
                left: 138,
              },
            ],
          },
          {
            title: 'defensive-stance',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 81,
                left: 139,
              },
              {
                top: 188,
                left: 137,
              },
            ],
          },
          {
            title: 'lay-on-hands',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'daybreak',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 139,
              },
              {
                top: 203,
                left: 137,
              },
              {
                top: 231,
                left: 137,
              },
            ],
          },
          {
            title: 'beacon-of-light',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'glorious-bolt',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 62,
                left: 135,
              },
              {
                top: 62,
                left: 154,
              },
              {
                top: 209,
                left: 138,
              },
            ],
          },
          {
            title: 'practical-plans',
            level: 2,
            enhancementSpots: 0,
          },
          {
            title: 'unwavering-mandate',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 206,
                left: 133,
              },
              {
                top: 221,
                left: 129,
              },
            ],
          },
          {
            title: 'burning-flash',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 65,
                left: 139,
              },
              {
                top: 205,
                left: 133,
              },
              {
                top: 221,
                left: 131,
              },
            ],
          },
          {
            title: 'mobilizing-axiom',
            level: 3,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 81,
                left: 139,
              },
            ],
          },
          {
            title: 'righteous-strength',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 74,
                left: 138,
              },
              {
                top: 194,
                left: 136,
              },
              {
                top: 216,
                left: 135,
              },
            ],
          },
          {
            title: 'engulfing-radiance',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 73,
                left: 135,
              },
            ],
          },
          {
            title: 'path-of-glory',
            level: 5,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 81,
                left: 139,
              },
              {
                top: 81,
                left: 157,
              },
              {
                top: 193,
                left: 136,
              },
            ],
          },
          {
            title: 'scales-of-justice',
            level: 5,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 56,
                left: 144,
              },
              {
                top: 192,
                left: 137,
              },
              {
                top: 241,
                left: 138,
              },
            ],
          },
          {
            title: 'supportive-chant',
            level: 6,
            enhancementSpots: 0,
          },
          {
            title: 'illuminate-the-target',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 61,
                left: 139,
              },
              {
                top: 83,
                left: 159,
              },
              {
                top: 230,
                left: 140,
              },
            ],
          },
          {
            title: 'weapon-of-purity',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 213,
                left: 137,
              },
              {
                top: 236,
                left: 140,
              },
            ],
          },
          {
            title: 'bright-aegis',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 57,
                left: 138,
              },
              {
                top: 90,
                left: 144,
              },
            ],
          },
          {
            title: 'cleansing-force',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 65,
                left: 140,
              },
              {
                top: 65,
                left: 158,
              },
              {
                top: 211,
                left: 138,
              },
            ],
          },
          {
            title: 'inspiring-sanctity',
            level: 8,
            enhancementSpots: 0,
          },
          {
            title: 'angelic-ascension',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 216,
                left: 139,
              },
            ],
          },
          {
            title: 'divine-intervention',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 203,
                left: 137,
              },
            ],
          },
        ],
      }
      return character
    case 'brute':
      character = {
        name: 'brute',
        initials: 'br',
        handSize: 10,
        startingCards: 13,
        cards: [
          {
            title: 'trample',
            level: 1,
            enhancementSpots: 5,
            enchancements: [
              {
                top: 83,
                left: 139,
              },
              {
                top: 102,
                left: 135,
              },
              {
                top: 187,
                left: 139,
              },
              {
                top: 222,
                left: 141,
              },
              {
                top: 222,
                left: 159,
              },
            ],
          },
          {
            title: 'eye-for-an-eye',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 67,
                left: 145,
              },
              {
                top: 202,
                left: 134,
              },
              {
                top: 222,
                left: 150,
              },
            ],
          },
          {
            title: 'sweeping-blow',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 76,
                left: 124,
              },
              {
                top: 92,
                left: 109,
              },
              {
                top: 227,
                left: 141,
              },
            ],
          },
          {
            title: 'provoking-roar',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 84,
                left: 139,
              },
            ],
          },
          {
            title: 'overwhelming-assault',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 139,
              },
              {
                top: 78,
                left: 155,
              },
              {
                top: 227,
                left: 139,
              },
            ],
          },
          {
            title: 'grab-and-go',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 222,
                left: 136,
              },
              {
                top: 222,
                left: 151,
              },
            ],
          },
          {
            title: 'warding-strength',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 86,
                left: 139,
              },
              {
                top: 102,
                left: 132,
              },
            ],
          },
          {
            title: 'shield-bash',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 72,
                left: 139,
              },
              {
                top: 72,
                left: 155,
              },
              {
                top: 203,
                left: 136,
              },
              {
                top: 203,
                left: 151,
              },
            ],
          },
          {
            title: 'leaping-cleave',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 83,
                left: 108,
              },
              {
                top: 118,
                left: 138,
              },
              {
                top: 204,
                left: 138,
              },
            ],
          },
          {
            title: 'spare-dagger',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 72,
                left: 139,
              },
              {
                top: 222,
                left: 139,
              },
            ],
          },
          {
            title: 'skewer',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 52,
                left: 160,
              },
              {
                top: 66,
                left: 108,
              },
              {
                top: 210,
                left: 138,
              },
              {
                top: 210,
                left: 154,
              },
            ],
          },
          {
            title: 'balanced-measure',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'wall-of-doom',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 55,
                left: 144,
              },
              {
                top: 88,
                left: 138,
              },
            ],
          },
          {
            title: 'fatal-advance',
            level: 2,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 223,
                left: 136,
              },
            ],
          },
          {
            title: 'juggernaut',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 81,
                left: 137,
              },
              {
                top: 105,
                left: 139,
              },
            ],
          },
          {
            title: 'hook-and-chain',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 139,
              },
              {
                top: 78,
                left: 155,
              },
            ],
          },
          {
            title: 'brute-force',
            level: 3,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 75,
                left: 127,
              },
              {
                top: 76,
                left: 107,
              },
              {
                top: 108,
                left: 127,
              },
              {
                top: 215,
                left: 137,
              },
            ],
          },
          {
            title: 'unstoppable-charge',
            level: 4,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 80,
                left: 138,
              },
              {
                top: 202,
                left: 137,
              },
            ],
          },
          {
            title: 'devastating-hack',
            level: 4,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 138,
              },
              {
                top: 78,
                left: 154,
              },
            ],
          },
          {
            title: 'whirlwind',
            level: 5,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 139,
              },
              {
                top: 204,
                left: 138,
              },
              {
                top: 229,
                left: 137,
              },
            ],
          },
          {
            title: 'skirmishing-maneuver',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 92,
                left: 144,
              },
              {
                top: 203,
                left: 139,
              },
            ],
          },
          {
            title: 'quietus',
            level: 6,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 199,
                left: 137,
              },
            ],
          },
          {
            title: 'immovable-phalanx',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 62,
                left: 139,
              },
              {
                top: 85,
                left: 136,
              },
            ],
          },
          {
            title: 'defensive-tactics',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 57,
                left: 139,
              },
              {
                top: 87,
                left: 131,
              },
            ],
          },
          {
            title: 'crippling-offensive',
            level: 7,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 64,
                left: 139,
              },
              {
                top: 64,
                left: 153,
              },
              {
                top: 196,
                left: 138,
              },
            ],
          },
          {
            title: 'frenzied-onslaught',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 80,
                left: 139,
              },
              {
                top: 126,
                left: 139,
              },
            ],
          },
          {
            title: 'selfish-retribution',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 137,
              },
              {
                top: 189,
                left: 136,
              },
              {
                top: 213,
                left: 144,
              },
            ],
          },
          {
            title: 'king-of-the-hill',
            level: 9,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 70,
                left: 139,
              },
              {
                top: 70,
                left: 154,
              },
              {
                top: 218,
                left: 136,
              },
            ],
          },
          {
            title: 'face-your-end',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 57,
                left: 139,
              },
              {
                top: 87,
                left: 131,
              },
            ],
          },
        ],
      }
      return character
    case 'cragheart':
      character = {
        name: 'cragheart',
        initials: 'ch',
        handSize: 11,
        startingCards: 14,
        cards: [
          {
            title: 'opposing-strike',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 84,
                left: 100,
              },
              {
                top: 84,
                left: 117,
              },
            ],
          },
          {
            title: 'crushing-grasp',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 75,
                left: 139,
              },
            ],
          },
          {
            title: 'avalanche',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 69,
                left: 101,
              },
              {
                top: 74,
                left: 129,
              },
            ],
          },
          {
            title: 'rumbling-advance',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 72,
                left: 133,
              },
              {
                top: 87,
                left: 129,
              },
              {
                top: 194,
                left: 139,
              },
            ],
          },
          {
            title: 'massive-boulder',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 60,
                left: 138,
              },
              {
                top: 75,
                left: 129,
              },
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'backup-ammunition',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'rock-tunnel',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 186,
                left: 136,
              },
            ],
          },
          {
            title: 'unstable-upheaval',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 52,
                left: 139,
              },
            ],
          },
          {
            title: 'crater',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 72,
                left: 140,
              },
              {
                top: 87,
                left: 130,
              },
              {
                top: 210,
                left: 136,
              },
            ],
          },
          {
            title: 'dirt-tornado',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 61,
                left: 105,
              },
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'earthen-clod',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 75,
                left: 139,
              },
              {
                top: 218,
                left: 135,
              },
              {
                top: 234,
                left: 130,
              },
            ],
          },
          {
            title: 'heaving-swing',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 55,
                left: 139,
              },
              {
                top: 71,
                left: 130,
              },
            ],
          },
          {
            title: 'forceful-storm',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 58,
                left: 116,
              },
              {
                top: 74,
                left: 139,
              },
            ],
          },
          {
            title: 'natures-lift',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 77,
                left: 133,
              },
              {
                top: 92,
                left: 129,
              },
              {
                top: 107,
                left: 129,
              },
            ],
          },
          {
            title: 'explosive-punch',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 138,
              },
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'sentient-growth',
            level: 2,
            enhancementSpots: 5,
            enchancements: [
              {
                top: 60,
                left: 111,
              },
              {
                top: 85,
                left: 133,
              },
              {
                top: 99,
                left: 107,
              },
              {
                top: 210,
                left: 134,
              },
              {
                top: 246,
                left: 138,
              },
            ],
          },
          {
            title: 'clear-the-way',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 87,
                left: 139,
              },
              {
                top: 188,
                left: 135,
              },
              {
                top: 188,
                left: 150,
              },
            ],
          },
          {
            title: 'blunt-force',
            level: 3,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 66,
                left: 138,
              },
              {
                top: 66,
                left: 152,
              },
              {
                top: 192,
                left: 136,
              },
              {
                top: 219,
                left: 143,
              },
            ],
          },
          {
            title: 'rock-slide',
            level: 4,
            enhancementSpots: 0,
          },
          {
            title: 'kinetic-assault',
            level: 4,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 82,
                left: 135,
              },
              {
                top: 105,
                left: 139,
              },
              {
                top: 203,
                left: 143,
              },
              {
                top: 218,
                left: 131,
              },
            ],
          },
          {
            title: 'petrify',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 204,
                left: 137,
              },
            ],
          },
          {
            title: 'stone-pummel',
            level: 5,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 102,
              },
              {
                top: 79,
                left: 162,
              },
              {
                top: 111,
                left: 108,
              },
            ],
          },
          {
            title: 'dig-pit',
            level: 6,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 205,
                left: 138,
              },
            ],
          },
          {
            title: 'cataclysm',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 64,
                left: 105,
              },
              {
                top: 214,
                left: 137,
              },
            ],
          },
          {
            title: 'meteor',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 83,
                left: 138,
              },
              {
                top: 216,
                left: 136,
              },
            ],
          },
          {
            title: 'brutal-momentum',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 62,
                left: 139,
              },
              {
                top: 78,
                left: 129,
              },
            ],
          },
          {
            title: 'rocky-end',
            level: 8,
            enhancementSpots: 0,
          },
          {
            title: 'lumbering-bash',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 70,
                left: 136,
              },
              {
                top: 91,
                left: 138,
              },
            ],
          },
          {
            title: 'blind-destruction',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 80,
                left: 130,
              },
              {
                top: 190,
                left: 137,
              },
            ],
          },
          {
            title: 'pulverize',
            level: 9,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 52,
                left: 138,
              },
              {
                top: 68,
                left: 129,
              },
              {
                top: 186,
                left: 138,
              },
              {
                top: 245,
                left: 137,
              },
            ],
          },
        ],
      }
      return character
    case 'soothsinger':
      character = {
        name: 'soothsinger',
        initials: 'ss',
        handSize: 9,
        startingCards: 12,
        cards: [
          {
            title: 'power-ballad',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 192,
                left: 136,
              },
              {
                top: 217,
                left: 155,
              },
            ],
          },
          {
            title: 'defensive-ditty',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'song-of-speed',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'tuning-the-outcome',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 87,
                left: 135,
              },
              {
                top: 204,
                left: 136,
              },
              {
                top: 230,
                left: 138,
              },
            ],
          },
          {
            title: 'call-to-action',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 230,
                left: 138,
              },
            ],
          },
          {
            title: 'warding-dagger',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 86,
                left: 139,
              },
              {
                top: 190,
                left: 135,
              },
              {
                top: 214,
                left: 136,
              },
            ],
          },
          {
            title: 'throw-voice',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 82,
                left: 126,
              },
              {
                top: 210,
                left: 139,
              },
            ],
          },
          {
            title: 'singing-arrow',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 84,
                left: 126,
              },
              {
                top: 210,
                left: 137,
              },
              {
                top: 226,
                left: 130,
              },
            ],
          },
          {
            title: 'marching-beat',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 101,
                left: 137,
              },
              {
                top: 223,
                left: 136,
              },
            ],
          },
          {
            title: 'wistful-wounding',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 205,
                left: 130,
              },
            ],
          },
          {
            title: 'unending-chant',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 215,
                left: 136,
              },
            ],
          },
          {
            title: 'nimble-knife',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 67,
                left: 138,
              },
              {
                top: 106,
                left: 137,
              },
              {
                top: 221,
                left: 136,
              },
            ],
          },
          {
            title: 'soothing-lullaby',
            level: 2,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 204,
                left: 134,
              },
            ],
          },
          {
            title: 'change-tempo',
            level: 2,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 221,
                left: 137,
              },
            ],
          },
          {
            title: 'echoing-aria',
            level: 3,
            enhancementSpots: 0,
          },
          {
            title: 'crippling-chorus',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 136,
              },
              {
                top: 206,
                left: 137,
              },
              {
                top: 228,
                left: 143,
              },
            ],
          },
          {
            title: 'disorienting-dirge',
            level: 4,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 187,
                left: 139,
              },
              {
                top: 223,
                left: 137,
              },
            ],
          },
          {
            title: 'inspiring-anthem',
            level: 4,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 100,
                left: 136,
              },
              {
                top: 231,
                left: 138,
              },
            ],
          },
          {
            title: 'melody-and-harmony',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 203,
                left: 137,
              },
              {
                top: 229,
                left: 139,
              },
            ],
          },
          {
            title: 'mobilizing-measure',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 211,
                left: 136,
              },
            ],
          },
          {
            title: 'pull-the-strings',
            level: 6,
            enhancementSpots: 0,
          },
          {
            title: 'provoke-terror',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 84,
                left: 125,
              },
              {
                top: 209,
                left: 138,
              },
              {
                top: 238,
                left: 129,
              },
            ],
          },
          {
            title: 'nightmare-serenade',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 198,
                left: 109,
              },
              {
                top: 211,
                left: 126,
              },
            ],
          },
          {
            title: 'booming-proclamation',
            level: 7,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 79,
                left: 138,
              },
              {
                top: 109,
                left: 129,
              },
              {
                top: 219,
                left: 138,
              },
            ],
          },
          {
            title: 'tranquil-trill',
            level: 8,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 204,
                left: 143,
              },
            ],
          },
          {
            title: 'commanding-presence',
            level: 8,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 92,
                left: 140,
              },
            ],
          },
          {
            title: 'captivating-performance',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 198,
                left: 134,
              },
              {
                top: 227,
                left: 130,
              },
            ],
          },
          {
            title: 'shadow-puppets',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 56,
                left: 136,
              },
            ],
          },
        ],
      }
      return character
    case 'mindthief':
      character = {
        name: 'mindthief',
        initials: 'mt',
        handSize: 10,
        startingCards: 13,
        cards: [
          {
            title: 'submissive-affliction',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 64,
                left: 138,
              },
            ],
          },
          {
            title: 'into-the-night',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'fearsome-blade',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 73,
                left: 138,
              },
              {
                top: 88,
                left: 131,
              },
              {
                top: 223,
                left: 138,
              },
              {
                top: 223,
                left: 153,
              },
            ],
          },
          {
            title: 'feedback-loop',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 98,
                left: 138,
              },
              {
                top: 187,
                left: 136,
              },
            ],
          },
          {
            title: 'gnawing-horde',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 78,
                left: 81,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 81,
              },
              {
                top: 224,
                left: 138,
              },
            ],
          },
          {
            title: 'the-minds-weakness',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 98,
                left: 138,
              },
              {
                top: 217,
                left: 138,
              },
            ],
          },
          {
            title: 'parasitic-influence',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 100,
                left: 138,
              },
            ],
          },
          {
            title: 'scurry',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 81,
                left: 137,
              },
              {
                top: 105,
                left: 139,
              },
            ],
          },
          {
            title: 'perverse-edge',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 77,
                left: 139,
              },
              {
                top: 198,
                left: 138,
              },
              {
                top: 214,
                left: 130,
              },
            ],
          },
          {
            title: 'empathetic-assault',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 65,
                left: 139,
              },
              {
                top: 65,
                left: 154,
              },
              {
                top: 203,
                left: 136,
              },
              {
                top: 228,
                left: 134,
              },
            ],
          },
          {
            title: 'withering-claw',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 96,
                left: 138,
              },
            ],
          },
          {
            title: 'possession',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'frigid-apparition',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 83,
                left: 138,
              },
              {
                top: 191,
                left: 137,
              },
            ],
          },
          {
            title: 'wretched-creature',
            level: 2,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 78,
                left: 80,
              },
              {
                top: 78,
                left: 121,
              },
              {
                top: 98,
                left: 80,
              },
              {
                top: 208,
                left: 136,
              },
            ],
          },
          {
            title: 'hostile-takeover',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 64,
                left: 139,
              },
              {
                top: 80,
                left: 130,
              },
            ],
          },
          {
            title: 'brain-leech',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 55,
                left: 138,
              },
              {
                top: 94,
                left: 133,
              },
              {
                top: 205,
                left: 138,
              },
            ],
          },
          {
            title: 'silent-scream',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 99,
                left: 138,
              },
              {
                top: 194,
                left: 136,
              },
              {
                top: 219,
                left: 139,
              },
            ],
          },
          {
            title: 'pilfer',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 189,
                left: 138,
              },
              {
                top: 213,
                left: 136,
              },
              {
                top: 236,
                left: 138,
              },
            ],
          },
          {
            title: 'cranium-overload',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 79,
                left: 139,
              },
              {
                top: 79,
                left: 155,
              },
              {
                top: 225,
                left: 136,
              },
            ],
          },
          {
            title: 'mass-hysteria',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 89,
                left: 130,
              },
            ],
          },
          {
            title: 'frozen-mind',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 99,
                left: 138,
              },
            ],
          },
          {
            title: 'corrupting-embrace',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 67,
                left: 138,
              },
              {
                top: 104,
                left: 138,
              },
              {
                top: 185,
                left: 136,
              },
            ],
          },
          {
            title: 'dark-frenzy',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 71,
                left: 139,
              },
              {
                top: 191,
                left: 136,
              },
              {
                top: 214,
                left: 139,
              },
            ],
          },
          {
            title: 'vicious-blood',
            level: 7,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 100,
                left: 138,
              },
              {
                top: 212,
                left: 136,
              },
              {
                top: 235,
                left: 138,
              },
            ],
          },
          {
            title: 'psychic-projection',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 54,
                left: 133,
              },
              {
                top: 85,
                left: 135,
              },
            ],
          },
          {
            title: 'shared-nightmare',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 53,
                left: 139,
              },
              {
                top: 82,
                left: 130,
              },
              {
                top: 209,
                left: 136,
              },
            ],
          },
          {
            title: 'domination',
            level: 8,
            enhancementSpots: 0,
          },
          {
            title: 'many-as-one',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 81,
              },
              {
                top: 78,
                left: 121,
              },
            ],
          },
          {
            title: 'phantasmal-killer',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 99,
                left: 138,
              },
              {
                top: 184,
                left: 136,
              },
            ],
          },
        ],
      }
      return character
    case 'scoundrel':
      character = {
        name: 'scoundrel',
        initials: 'sc',
        handSize: 9,
        startingCards: 12,
        cards: [
          {
            title: 'single-out',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 77,
                left: 138,
              },
            ],
          },
          {
            title: 'flanking-strike',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 77,
                left: 138,
              },
              {
                top: 223,
                left: 136,
              },
            ],
          },
          {
            title: 'smoke-bomb',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 53,
                left: 147,
              },
              {
                top: 216,
                left: 136,
              },
              {
                top: 232,
                left: 130,
              },
            ],
          },
          {
            title: 'backstab',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 59,
                left: 138,
              },
              {
                top: 59,
                left: 154,
              },
            ],
          },
          {
            title: 'thiefs-knack',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 211,
                left: 139,
              },
            ],
          },
          {
            title: 'venom-shiv',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 73,
                left: 139,
              },
              {
                top: 223,
                left: 137,
              },
            ],
          },
          {
            title: 'throwing-knives',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 82,
                left: 130,
              },
            ],
          },
          {
            title: 'quick-hands',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 82,
                left: 137,
              },
              {
                top: 104,
                left: 138,
              },
            ],
          },
          {
            title: 'special-mixture',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 87,
                left: 134,
              },
              {
                top: 207,
                left: 138,
              },
            ],
          },
          {
            title: 'sinister-opportunity',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 68,
                left: 140,
              },
              {
                top: 190,
                left: 136,
              },
            ],
          },
          {
            title: 'tricksters-reversal',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 67,
                left: 137,
              },
              {
                top: 67,
                left: 153,
              },
            ],
          },
          {
            title: 'swift-bow',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 85,
                left: 138,
              },
              {
                top: 101,
                left: 130,
              },
              {
                top: 211,
                left: 136,
              },
            ],
          },
          {
            title: 'open-wound',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 77,
                left: 139,
              },
              {
                top: 223,
                left: 136,
              },
            ],
          },
          {
            title: 'flintlock',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 204,
                left: 137,
              },
              {
                top: 204,
                left: 152,
              },
              {
                top: 220,
                left: 130,
              },
            ],
          },
          {
            title: 'hidden-daggers',
            level: 3,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 65,
                left: 139,
              },
              {
                top: 80,
                left: 130,
              },
              {
                top: 95,
                left: 130,
              },
              {
                top: 218,
                left: 147,
              },
            ],
          },
          {
            title: 'duelists-advance',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 82,
                left: 136,
              },
              {
                top: 105,
                left: 139,
              },
            ],
          },
          {
            title: 'flurry-of-blades',
            level: 4,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 80,
                left: 131,
              },
              {
                top: 197,
                left: 137,
              },
            ],
          },
          {
            title: 'gruesome-advantage',
            level: 4,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 59,
                left: 138,
              },
              {
                top: 59,
                left: 154,
              },
            ],
          },
          {
            title: 'cull-the-weak',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 74,
                left: 138,
              },
            ],
          },
          {
            title: 'visage-of-the-inevitable',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'crippling-poison',
            level: 6,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 198,
                left: 138,
              },
            ],
          },
          {
            title: 'burning-oil',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 66,
                left: 139,
              },
              {
                top: 82,
                left: 130,
              },
            ],
          },
          {
            title: 'stick-to-the-shadows',
            level: 7,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 137,
              },
              {
                top: 78,
                left: 153,
              },
              {
                top: 227,
                left: 147,
              },
            ],
          },
          {
            title: 'spring-the-trap',
            level: 7,
            enhancementSpots: 0,
          },
          {
            title: 'stiletto-storm',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 81,
                left: 131,
              },
              {
                top: 195,
                left: 136,
              },
              {
                top: 216,
                left: 143,
              },
            ],
          },
          {
            title: 'pains-end',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 133,
              },
              {
                top: 73,
                left: 149,
              },
              {
                top: 210,
                left: 136,
              },
            ],
          },
          {
            title: 'long-con',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 78,
                left: 139,
              },
            ],
          },
          {
            title: 'watch-it-burn',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 206,
                left: 136,
              },
              {
                top: 229,
                left: 144,
              },
            ],
          },
        ],
      }
      return character
    case 'spellweaver':
      character = {
        name: 'spellweaver',
        initials: 'sw',
        handSize: 8,
        startingCards: 11,
        cards: [
          {
            title: 'fire-orbs',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 57,
                left: 138,
              },
              {
                top: 72,
                left: 129,
              },
              {
                top: 87,
                left: 129,
              },
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'impaling-eruption',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 53,
                left: 139,
              },
              {
                top: 69,
                left: 131,
              },
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'reviving-ether',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 211,
                left: 137,
              },
            ],
          },
          {
            title: 'freezing-nova',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 67,
                left: 140,
              },
              {
                top: 206,
                left: 133,
              },
              {
                top: 206,
                left: 149,
              },
            ],
          },
          {
            title: 'mana-bolt',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 75,
                left: 140,
              },
              {
                top: 218,
                left: 136,
              },
              {
                top: 234,
                left: 130,
              },
            ],
          },
          {
            title: 'frost-armor',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 75,
                left: 138,
              },
            ],
          },
          {
            title: 'flame-strike',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 90,
                left: 131,
              },
              {
                top: 205,
                left: 139,
              },
              {
                top: 220,
                left: 131,
              },
            ],
          },
          {
            title: 'ride-the-wind',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 206,
                left: 136,
              },
            ],
          },
          {
            title: 'crackling-air',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 207,
                left: 137,
              },
            ],
          },
          {
            title: 'hardened-spikes',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 61,
                left: 144,
              },
              {
                top: 206,
                left: 137,
              },
            ],
          },
          {
            title: 'aid-from-the-ether',
            level: 1,
            enhancementSpots: 5,
            enchancements: [
              {
                top: 84,
                left: 134,
              },
              {
                top: 100,
                left: 130,
              },
              {
                top: 213,
                left: 80,
              },
              {
                top: 213,
                left: 121,
              },
              {
                top: 232,
                left: 121,
              },
            ],
          },
          {
            title: 'flashing-burst',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 73,
                left: 140,
              },
              {
                top: 88,
                left: 130,
              },
              {
                top: 222,
                left: 136,
              },
            ],
          },
          {
            title: 'icy-blast',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 65,
                left: 105,
              },
              {
                top: 218,
                left: 135,
              },
              {
                top: 233,
                left: 129,
              },
            ],
          },
          {
            title: 'cold-fire',
            level: 3,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 85,
                left: 134,
              },
            ],
          },
          {
            title: 'elemental-aid',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 75,
                left: 134,
              },
              {
                top: 91,
                left: 129,
              },
            ],
          },
          {
            title: 'spirit-of-doom',
            level: 4,
            enhancementSpots: 0,
          },
          {
            title: 'forked-beam',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 66,
                left: 139,
              },
              {
                top: 96,
                left: 131,
              },
              {
                top: 221,
                left: 137,
              },
            ],
          },
          {
            title: 'chromatic-explosion',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 54,
                left: 110,
              },
              {
                top: 213,
                left: 137,
              },
            ],
          },
          {
            title: 'engulfed-in-flames',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 73,
                left: 140,
              },
              {
                top: 88,
                left: 131,
              },
            ],
          },
          {
            title: 'living-torch',
            level: 6,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 63,
                left: 139,
              },
              {
                top: 213,
                left: 79,
              },
              {
                top: 213,
                left: 121,
              },
              {
                top: 232,
                left: 121,
              },
            ],
          },
          {
            title: 'frozen-night',
            level: 6,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 65,
                left: 100,
              },
              {
                top: 75,
                left: 159,
              },
              {
                top: 93,
                left: 169,
              },
              {
                top: 204,
                left: 136,
              },
            ],
          },
          {
            title: 'twin-restoration',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 211,
                left: 136,
              },
              {
                top: 240,
                left: 131,
              },
            ],
          },
          {
            title: 'stone-fists',
            level: 7,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 71,
                left: 131,
              },
              {
                top: 187,
                left: 136,
              },
              {
                top: 208,
                left: 137,
              },
            ],
          },
          {
            title: 'zephyr-wings',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 194,
                left: 136,
              },
              {
                top: 194,
                left: 151,
              },
            ],
          },
          {
            title: 'cold-front',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 72,
                left: 105,
              },
              {
                top: 89,
                left: 98,
              },
            ],
          },
          {
            title: 'black-hole',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 214,
                left: 137,
              },
            ],
          },
          {
            title: 'inferno',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 197,
                left: 143,
              },
            ],
          },
        ],
      }
      return character
    case 'doomStalker':
      character = {
        name: 'doomStalker',
        initials: 'ds',
        handSize: 12,
        startingCards: 15,
        cards: [
          {
            title: 'rain-of-arrows',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'crippling-noose',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'felling-swoop',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 81,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 81,
              },
            ],
          },
          {
            title: 'vital-charge',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 81,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 81,
              },
            ],
          },
          {
            title: 'race-to-the-grave',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 72,
                left: 137,
              },
              {
                top: 72,
                left: 153,
              },
              {
                top: 88,
                left: 129,
              },
            ],
          },
          {
            title: 'multi-pronged-assault',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 66,
                left: 139,
              },
              {
                top: 81,
                left: 129,
              },
              {
                top: 96,
                left: 129,
              },
            ],
          },
          {
            title: 'detonation',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'frightening-curse',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'foot-snare',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 243,
                left: 137,
              },
            ],
          },
          {
            title: 'solid-bow',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 85,
                left: 139,
              },
              {
                top: 100,
                left: 130,
              },
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'a-moments-peace',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 205,
                left: 137,
              },
              {
                top: 231,
                left: 134,
              },
            ],
          },
          {
            title: 'swift-trickery',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 77,
                left: 139,
              },
              {
                top: 92,
                left: 130,
              },
              {
                top: 222,
                left: 137,
              },
            ],
          },
          {
            title: 'sap-life',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 73,
                left: 144,
              },
              {
                top: 89,
                left: 131,
              },
            ],
          },
          {
            title: 'the-hunt-begins',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 81,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 81,
              },
            ],
          },
          {
            title: 'fresh-kill',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 66,
                left: 139,
              },
              {
                top: 81,
                left: 131,
              },
              {
                top: 217,
                left: 136,
              },
            ],
          },
          {
            title: 'expose',
            level: 2,
            enhancementSpots: 0,
          },
          {
            title: 'relentless-offensive',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 138,
              },
              {
                top: 108,
                left: 131,
              },
            ],
          },
          {
            title: 'darkened-skies',
            level: 3,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 72,
                left: 138,
              },
            ],
          },
          {
            title: 'press-the-attack',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 77,
                left: 138,
              },
              {
                top: 92,
                left: 130,
              },
              {
                top: 204,
                left: 143,
              },
            ],
          },
          {
            title: 'singular-focus',
            level: 4,
            enhancementSpots: 0,
          },
          {
            title: 'flight-of-flame',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 218,
                left: 138,
              },
            ],
          },
          {
            title: 'inescapable-fate',
            level: 5,
            enhancementSpots: 0,
          },
          {
            title: 'wild-command',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 205,
                left: 138,
              },
              {
                top: 229,
                left: 139,
              },
            ],
          },
          {
            title: 'natures-hunger',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 81,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 81,
              },
            ],
          },
          {
            title: 'camouflage',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 64,
                left: 139,
              },
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'impending-end',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 71,
                left: 139,
              },
              {
                top: 86,
                left: 129,
              },
            ],
          },
          {
            title: 'crashing-wave',
            level: 7,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 65,
                left: 137,
              },
              {
                top: 89,
                left: 137,
              },
              {
                top: 89,
                left: 153,
              },
            ],
          },
          {
            title: 'rising-momentum',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 64,
                left: 138,
              },
              {
                top: 80,
                left: 130,
              },
              {
                top: 94,
                left: 132,
              },
            ],
          },
          {
            title: 'feral-instincts',
            level: 8,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 67,
                left: 137,
              },
              {
                top: 92,
                left: 139,
              },
              {
                top: 205,
                left: 136,
              },
              {
                top: 230,
                left: 134,
              },
            ],
          },
          {
            title: 'predator-and-prey',
            level: 9,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 78,
                left: 81,
              },
              {
                top: 78,
                left: 122,
              },
              {
                top: 98,
                left: 81,
              },
              {
                top: 98,
                left: 122,
              },
            ],
          },
          {
            title: 'lead-to-slaughter',
            level: 9,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 64,
                left: 139,
              },
              {
                top: 79,
                left: 131,
              },
              {
                top: 203,
                left: 138,
              },
            ],
          },
        ],
      }
      return character
    case 'nightshroud':
      character = {
        name: 'nightshroud',
        initials: 'ns',
        handSize: 9,
        startingCards: 12,
        cards: [
          {
            title: 'black-knives',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'cloak-of-shade',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 80,
                left: 138,
              },
              {
                top: 80,
                left: 154,
              },
            ],
          },
          {
            title: 'empowering-void',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'doomed-breeze',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 67,
                left: 138,
              },
              {
                top: 82,
                left: 130,
              },
            ],
          },
          {
            title: 'enervating-wound',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 56,
                left: 138,
              },
              {
                top: 91,
                left: 135,
              },
            ],
          },
          {
            title: 'spirit-of-the-night',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 213,
                left: 136,
              },
              {
                top: 213,
                left: 152,
              },
            ],
          },
          {
            title: 'dancing-shadows',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 80,
                left: 136,
              },
            ],
          },
          {
            title: 'silent-force',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 212,
                left: 138,
              },
            ],
          },
          {
            title: 'smoke-step',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 211,
                left: 135,
              },
              {
                top: 211,
                left: 150,
              },
            ],
          },
          {
            title: 'wings-of-the-night',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'concealed-dominance',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'dark-cloud',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'prepare-for-the-kill',
            level: 2,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 80,
                left: 138,
              },
              {
                top: 80,
                left: 154,
              },
              {
                top: 211,
                left: 136,
              },
              {
                top: 211,
                left: 152,
              },
            ],
          },
          {
            title: 'soulfire',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 78,
                left: 130,
              },
              {
                top: 217,
                left: 138,
              },
              {
                top: 217,
                left: 154,
              },
            ],
          },
          {
            title: 'terror-blade',
            level: 3,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 99,
                left: 130,
              },
            ],
          },
          {
            title: 'armor-of-the-night',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 205,
                left: 135,
              },
              {
                top: 205,
                left: 151,
              },
            ],
          },
          {
            title: 'nightfall',
            level: 4,
            enhancementSpots: 0,
          },
          {
            title: 'grim-sustenance',
            level: 4,
            enhancementSpots: 0,
          },
          {
            title: 'claws-of-the-night',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 75,
                left: 115,
              },
            ],
          },
          {
            title: 'black-arrow',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 75,
                left: 131,
              },
            ],
          },
          {
            title: 'unseen-dread',
            level: 6,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 79,
                left: 138,
              },
              {
                top: 79,
                left: 153,
              },
              {
                top: 215,
                left: 136,
              },
            ],
          },
          {
            title: 'swallowed-by-fear',
            level: 6,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 79,
                left: 138,
              },
            ],
          },
          {
            title: 'eyes-of-the-night',
            level: 7,
            enhancementSpots: 0,
          },
          {
            title: 'quiet-frenzy',
            level: 7,
            enhancementSpots: 0,
          },
          {
            title: 'gloom-darts',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 77,
                left: 130,
              },
              {
                top: 211,
                left: 135,
              },
              {
                top: 211,
                left: 151,
              },
            ],
          },
          {
            title: 'lurking-ruin',
            level: 8,
            enhancementSpots: 0,
          },
          {
            title: 'angel-of-death',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 63,
                left: 139,
              },
              {
                top: 203,
                left: 136,
              },
            ],
          },
          {
            title: 'voice-of-the-night',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 201,
                left: 136,
              },
              {
                top: 225,
                left: 139,
              },
            ],
          },
        ],
      }
      return character
    case 'summoner':
      character = {
        name: 'summoner',
        initials: 'su',
        handSize: 9,
        startingCards: 12,
        cards: [
          {
            title: 'forged-ferocity',
            level: 1,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
              {
                top: 98,
                left: 80,
              },
              {
                top: 205,
                left: 136,
              },
            ],
          },
          {
            title: 'wild-animation',
            level: 1,
            enhancementSpots: 5,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
              {
                top: 98,
                left: 80,
              },
              {
                top: 98,
                left: 121,
              },
              {
                top: 213,
                left: 136,
              },
            ],
          },
          {
            title: 'living-night',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 98,
                left: 80,
              },
            ],
          },
          {
            title: 'unending-dominance',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
            ],
          },
          {
            title: 'unwavering-hand',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 76,
                left: 132,
              },
              {
                top: 76,
                left: 149,
              },
            ],
          },
          {
            title: 'mighty-bond',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 218,
                left: 137,
              },
            ],
          },
          {
            title: 'bonded-might',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'biting-wind',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 74,
                left: 139,
              },
              {
                top: 90,
                left: 129,
              },
              {
                top: 218,
                left: 134,
              },
            ],
          },
          {
            title: 'black-fire',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 67,
                left: 139,
              },
              {
                top: 97,
                left: 131,
              },
              {
                top: 203,
                left: 136,
              },
            ],
          },
          {
            title: 'leathery-wings',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
              {
                top: 217,
                left: 158,
              },
            ],
          },
          {
            title: 'volatile-flame',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 79,
                left: 121,
              },
              {
                top: 98,
                left: 80,
              },
              {
                top: 204,
                left: 138,
              },
            ],
          },
          {
            title: 'ethereal-vines',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 77,
                left: 111,
              },
              {
                top: 205,
                left: 137,
              },
              {
                top: 230,
                left: 134,
              },
            ],
          },
          {
            title: 'earthen-steed',
            level: 2,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 219,
                left: 137,
              },
            ],
          },
          {
            title: 'grasping-the-void',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 68,
                left: 139,
              },
              {
                top: 199,
                left: 139,
              },
              {
                top: 237,
                left: 134,
              },
            ],
          },
          {
            title: 'tear-the-fabric',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 209,
                left: 132,
              },
              {
                top: 209,
                left: 148,
              },
            ],
          },
          {
            title: 'oozing-manifestation',
            level: 3,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
              {
                top: 98,
                left: 80,
              },
              {
                top: 200,
                left: 139,
              },
            ],
          },
          {
            title: 'living-mountain',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
              {
                top: 212,
                left: 137,
              },
            ],
          },
          {
            title: 'divided-mind',
            level: 4,
            enhancementSpots: 0,
          },
          {
            title: 'strength-in-numbers',
            level: 5,
            enhancementSpots: 0,
          },
          {
            title: 'conjured-aid',
            level: 5,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
              {
                top: 98,
                left: 121,
              },
              {
                top: 224,
                left: 137,
              },
            ],
          },
          {
            title: 'endless-spikes',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
            ],
          },
          {
            title: 'inexorable-momentum',
            level: 6,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 68,
                left: 138,
              },
              {
                top: 97,
                left: 132,
              },
              {
                top: 203,
                left: 137,
              },
              {
                top: 245,
                left: 137,
              },
            ],
          },
          {
            title: 'negative-energy',
            level: 7,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
              {
                top: 98,
                left: 80,
              },
              {
                top: 98,
                left: 121,
              },
            ],
          },
          {
            title: 'staff-of-visions',
            level: 7,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 78,
                left: 139,
              },
              {
                top: 78,
                left: 155,
              },
              {
                top: 206,
                left: 136,
              },
              {
                top: 228,
                left: 158,
              },
            ],
          },
          {
            title: 'intervening-apparitions',
            level: 8,
            enhancementSpots: 0,
          },
          {
            title: 'otherworldly-rage',
            level: 8,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 237,
                left: 136,
              },
            ],
          },
          {
            title: 'interplanar-mastery',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 216,
                left: 137,
              },
            ],
          },
          {
            title: 'horned-majesty',
            level: 9,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 79,
                left: 80,
              },
              {
                top: 79,
                left: 121,
              },
              {
                top: 98,
                left: 80,
              },
            ],
          },
        ],
      }
      return character
    case 'berserker':
      character = {
        name: 'berserker',
        initials: 'be',
        handSize: 10,
        startingCards: 13,
        cards: [
          {
            title: 'resolute-stand',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 66,
                left: 139,
              },
              {
                top: 193,
                left: 136,
              },
              {
                top: 216,
                left: 144,
              },
            ],
          },
          {
            title: 'growing-rage',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 66,
                left: 139,
              },
              {
                top: 187,
                left: 136,
              },
            ],
          },
          {
            title: 'strength-in-agony',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 76,
                left: 139,
              },
              {
                top: 219,
                left: 143,
              },
            ],
          },
          {
            title: 'defiance-of-death',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 71,
                left: 138,
              },
              {
                top: 71,
                left: 154,
              },
            ],
          },
          {
            title: 'from-the-brink',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 206,
                left: 136,
              },
              {
                top: 228,
                left: 137,
              },
            ],
          },
          {
            title: 'blood-pact',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 62,
                left: 139,
              },
            ],
          },
          {
            title: 'cauterize',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 58,
                left: 138,
              },
              {
                top: 88,
                left: 130,
              },
            ],
          },
          {
            title: 'dazing-wound',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 76,
                left: 139,
              },
              {
                top: 226,
                left: 136,
              },
            ],
          },
          {
            title: 'furious-aid',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 217,
                left: 134,
              },
            ],
          },
          {
            title: 'bounce-back',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 71,
                left: 143,
              },
              {
                top: 228,
                left: 135,
              },
            ],
          },
          {
            title: 'unbridled-power',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 75,
                left: 139,
              },
            ],
          },
          {
            title: 'glass-hammer',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 60,
                left: 139,
              },
              {
                top: 221,
                left: 136,
              },
            ],
          },
          {
            title: 'numb-the-pain',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 65,
                left: 138,
              },
              {
                top: 207,
                left: 137,
              },
            ],
          },
          {
            title: 'reckless-offensive',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 79,
                left: 139,
              },
              {
                top: 79,
                left: 156,
              },
            ],
          },
          {
            title: 'break-the-chains',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 71,
                left: 139,
              },
              {
                top: 101,
                left: 130,
              },
              {
                top: 194,
                left: 135,
              },
            ],
          },
          {
            title: 'spiked-armor',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 206,
                left: 137,
              },
              {
                top: 230,
                left: 139,
              },
            ],
          },
          {
            title: 'fatal-fury',
            level: 3,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 226,
                left: 136,
              },
            ],
          },
          {
            title: 'flurry-of-axes',
            level: 4,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 67,
                left: 139,
              },
              {
                top: 225,
                left: 136,
              },
            ],
          },
          {
            title: 'shiny-distraction',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 84,
                left: 136,
              },
            ],
          },
          {
            title: 'seeing-red',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 59,
                left: 139,
              },
              {
                top: 59,
                left: 154,
              },
            ],
          },
          {
            title: 'final-fight',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 199,
                left: 136,
              },
            ],
          },
          {
            title: 'devil-horns',
            level: 6,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 105,
              },
              {
                top: 76,
                left: 128,
              },
            ],
          },
          {
            title: 'unstoppable-destruction',
            level: 6,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 76,
                left: 138,
              },
            ],
          },
          {
            title: 'burning-hatred',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 77,
                left: 138,
              },
              {
                top: 206,
                left: 136,
              },
            ],
          },
          {
            title: 'careless-charge',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 63,
                left: 136,
              },
              {
                top: 85,
                left: 139,
              },
            ],
          },
          {
            title: 'bone-breaker',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 66,
                left: 139,
              },
              {
                top: 198,
                left: 138,
              },
            ],
          },
          {
            title: 'vengeful-barrage',
            level: 8,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 197,
                left: 136,
              },
            ],
          },
          {
            title: 'immortality',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 186,
                left: 137,
              },
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'the-maw-of-madness',
            level: 9,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 61,
                left: 139,
              },
              {
                top: 203,
                left: 144,
              },
              {
                top: 219,
                left: 128,
              },
            ],
          },
        ],
      }
      return character
    case 'sawbones':
      character = {
        name: 'sawbones',
        initials: 'sb',
        handSize: 10,
        startingCards: 13,
        cards: [
          {
            title: 'first-aid',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 222,
                left: 138,
              },
            ],
          },
          {
            title: 'hand-of-the-surgeon',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 80,
                left: 139,
              },
            ],
          },
          {
            title: 'hold-back-the-pain',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 74,
                left: 133,
              },
              {
                top: 74,
                left: 149,
              },
            ],
          },
          {
            title: 'booster-shot',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 86,
                left: 133,
              },
              {
                top: 86,
                left: 150,
              },
            ],
          },
          {
            title: 'bloody-saw',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 74,
                left: 139,
              },
            ],
          },
          {
            title: 'curative-mixture',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 60,
                left: 133,
              },
              {
                top: 60,
                left: 149,
              },
              {
                top: 209,
                left: 136,
              },
            ],
          },
          {
            title: 'syringe',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 96,
                left: 137,
              },
              {
                top: 210,
                left: 139,
              },
            ],
          },
          {
            title: 'battlefield-medicine',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'triage',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 223,
                left: 137,
              },
            ],
          },
          {
            title: 'mobile-response',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 196,
                left: 133,
              },
            ],
          },
          {
            title: 'prevention-is-key',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 88,
                left: 143,
              },
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'teamwork',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 240,
                left: 137,
              },
            ],
          },
          {
            title: 'vaccine',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 66,
                left: 108,
              },
            ],
          },
          {
            title: 'hamstring',
            level: 2,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 73,
                left: 140,
              },
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'precaution',
            level: 2,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 74,
                left: 137,
              },
            ],
          },
          {
            title: 'regenerative-tissue',
            level: 3,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 74,
                left: 134,
              },
              {
                top: 74,
                left: 149,
              },
            ],
          },
          {
            title: 'vital-strike',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 79,
                left: 138,
              },
              {
                top: 79,
                left: 154,
              },
              {
                top: 221,
                left: 137,
              },
            ],
          },
          {
            title: 'blood-transfusion',
            level: 4,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 61,
                left: 134,
              },
              {
                top: 204,
                left: 139,
              },
              {
                top: 230,
                left: 134,
              },
            ],
          },
          {
            title: 'do-no-harm',
            level: 4,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 230,
                left: 132,
              },
              {
                top: 230,
                left: 147,
              },
            ],
          },
          {
            title: 'research-the-cure',
            level: 5,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 75,
                left: 140,
              },
            ],
          },
          {
            title: 'amputate',
            level: 5,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 67,
                left: 140,
              },
              {
                top: 210,
                left: 133,
              },
              {
                top: 210,
                left: 148,
              },
            ],
          },
          {
            title: 'euthanize',
            level: 6,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 203,
                left: 139,
              },
            ],
          },
          {
            title: 'prescription',
            level: 6,
            enhancementSpots: 0,
          },
          {
            title: 'master-physician',
            level: 7,
            enhancementSpots: 0,
          },
          {
            title: 'surgeons-satchel',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 96,
                left: 133,
              },
              {
                top: 196,
                left: 137,
              },
            ],
          },
          {
            title: 'bedside-manner',
            level: 8,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 52,
                left: 132,
              },
              {
                top: 52,
                left: 147,
              },
              {
                top: 206,
                left: 136,
              },
            ],
          },
          {
            title: 'gentlemans-anger',
            level: 8,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 73,
                left: 140,
              },
              {
                top: 205,
                left: 138,
              },
            ],
          },
          {
            title: 'prep-for-surgery',
            level: 9,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 205,
                left: 136,
              },
              {
                top: 233,
                left: 136,
              },
            ],
          },
          {
            title: 'grisly-trauma',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 197,
                left: 137,
              },
            ],
          },
        ],
      }
      return character
    case 'bladeswarm':
      character = {
        name: 'bladeswarm',
        initials: 'bs',
        handSize: 11,
        startingCards: 14,
        cards: [
          {
            title: 'call-of-the-grave',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'corrupting-parasites',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 69,
                left: 80,
              },
              {
                top: 69,
                left: 121,
              },
              {
                top: 223,
                left: 137,
              },
            ],
          },
          {
            title: 'death-march',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 69,
                left: 80,
              },
              {
                top: 69,
                left: 121,
              },
              {
                top: 223,
                left: 137,
              },
            ],
          },
          {
            title: 'deflecting-blades',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 189,
                left: 137,
              },
            ],
          },
          {
            title: 'engulfing-stingers',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 69,
                left: 80,
              },
              {
                top: 69,
                left: 121,
              },
              {
                top: 209,
                left: 137,
              },
            ],
          },
          {
            title: 'hive-mind',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 205,
                left: 136,
              },
            ],
          },
          {
            title: 'omniscient-assault',
            level: 1,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 189,
                left: 137,
              },
            ],
          },
          {
            title: 'scattered-defense',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'swarming-minions',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'the-storms-edge',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'venomous-barbs',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'grasping-advance',
            level: 1,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 73,
                left: 137,
              },
              {
                top: 196,
                left: 138,
              },
            ],
          },
          {
            title: 'tomb-of-the-immortal',
            level: 1,
            enhancementSpots: 0,
          },
          {
            title: 'unstoppable-army',
            level: 1,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 69,
                left: 80,
              },
              {
                top: 69,
                left: 121,
              },
              {
                top: 90,
                left: 80,
              },
            ],
          },
          {
            title: 'infest',
            level: 2,
            enhancementSpots: 0,
          },
          {
            title: 'vampiric-tempest',
            level: 2,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 184,
                left: 136,
              },
              {
                top: 205,
                left: 139,
              },
              {
                top: 240,
                left: 137,
              },
            ],
          },
          {
            title: 'putrid-grubs',
            level: 3,
            enhancementSpots: 3,
            enchancements: [
              {
                top: 69,
                left: 80,
              },
              {
                top: 69,
                left: 121,
              },
              {
                top: 205,
                left: 137,
              },
            ],
          },
          {
            title: 'sand-scythe',
            level: 3,
            enhancementSpots: 0,
          },
          {
            title: 'incubation',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 51,
                left: 133,
              },
            ],
          },
          {
            title: 'sword-of-tenacity',
            level: 4,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 184,
                left: 137,
              },
            ],
          },
          {
            title: 'bioluminescence',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 76,
                left: 80,
              },
              {
                top: 76,
                left: 121,
              },
            ],
          },
          {
            title: 'bone-daggers',
            level: 5,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 78,
                left: 139,
              },
              {
                top: 204,
                left: 137,
              },
            ],
          },
          {
            title: 'erosion',
            level: 6,
            enhancementSpots: 0,
          },
          {
            title: 'prismatic-cyclone',
            level: 6,
            enhancementSpots: 0,
          },
          {
            title: 'solitary-horde',
            level: 7,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 69,
                left: 80,
              },
              {
                top: 69,
                left: 121,
              },
              {
                top: 90,
                left: 80,
              },
              {
                top: 196,
                left: 137,
              },
            ],
          },
          {
            title: 'sunstroke',
            level: 7,
            enhancementSpots: 2,
            enchancements: [
              {
                top: 67,
                left: 138,
              },
              {
                top: 185,
                left: 137,
              },
            ],
          },
          {
            title: 'blood-drain',
            level: 8,
            enhancementSpots: 0,
          },
          {
            title: 'focused-scourge',
            level: 8,
            enhancementSpots: 0,
          },
          {
            title: 'oasis',
            level: 9,
            enhancementSpots: 1,
            enchancements: [
              {
                top: 217,
                left: 138,
              },
            ],
          },
          {
            title: 'wasteland',
            level: 9,
            enhancementSpots: 4,
            enchancements: [
              {
                top: 69,
                left: 80,
              },
              {
                top: 69,
                left: 121,
              },
              {
                top: 90,
                left: 80,
              },
              {
                top: 196,
                left: 137,
              },
            ],
          },
        ],
      }
      return character
    default:
      break
  }
}
