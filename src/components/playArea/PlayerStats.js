import React, {useState} from 'react'

function PlayerStats({ character, level }) {
  // Character Status Effects
  const [poisoned, setPoisoned] = useState(false)
  const [wounded, setWounded] = useState(false)
  const [immobilized, setImmobilized] = useState(false)
  const [disarmed, setDisarmed] = useState(false)
  const [regenerate, setRegenerate] = useState(false)
  const [stunned, setStunned] = useState(false)
  const [muddled, setMuddled] = useState(false)
  const [invisible, setInvisible] = useState(false)
  const [strengthened, setStrengthened] = useState(false)

  // Bear Status Effects
  const [bearPoisoned, setBearPoisoned] = useState(false)
  const [bearWounded, setBearWounded] = useState(false)
  const [bearImmobilized, setBearImmobilized] = useState(false)
  const [bearDisarmed, setBearDisarmed] = useState(false)
  const [bearRegenerate, setBearRegenerate] = useState(false)
  const [bearStunned, setBearStunned] = useState(false)
  const [bearMuddled, setBearMuddled] = useState(false)
  const [bearInvisible, setBearInvisible] = useState(false)
  const [bearStrengthened, setBearStrengthened] = useState(false)

  // Health, Exeperience, and Loot
  const [health, setHealth] = useState(character.health[level - 1])
  const [bearHealth, setBearHealth] = useState(8 + level * 2)
  const [experience, setExperience] = useState(0)
  const [loot, setLoot] = useState(0)

  const maxHealth = character.health[level - 1]
  const maxBearHealth = 8 + level * 2

  return (
    <>
      <table align="center">
        <tbody>
          <tr>
            <td id="status-effects" align="center" colSpan="4">
              Status Effects
              <br />
              {poisoned && (
                <img
                  id="poisoned"
                  className="status"
                  src="./images/status-effects/poisoned.png"
                  alt="Poisoned"
                />
              )}
              {wounded && (
                <img
                  id="wounded"
                  className="status"
                  src="./images/status-effects/wounded.png"
                  alt="Wounded"
                />
              )}
              {immobilized && (
                <img
                  id="immobilized"
                  className="status"
                  src="./images/status-effects/immobilized.png"
                  alt="Immobilized"
                />
              )}
              {disarmed && (
                <img
                  id="disarmed"
                  className="status"
                  src="./images/status-effects/disarmed.png"
                  alt="Disarmed"
                />
              )}
              <img
                id="spacer"
                className="status"
                src="./images/status-effects/disarmed.png"
                alt="spacer"
              />
              {regenerate && (
                <img
                  id="regenerate"
                  className="status"
                  src="./images/status-effects/regenerate.png"
                  alt="Regenerate"
                />
              )}
              <img
                id="spacer"
                className="status"
                src="./images/status-effects/disarmed.png"
                alt="spacer"
              />
              {stunned && (
                <img
                  id="stunned"
                  className="status"
                  src="./images/status-effects/stunned.png"
                  alt="Stunned"
                />
              )}
              {muddled && (
                <img
                  id="muddled"
                  className="status"
                  src="./images/status-effects/muddled.png"
                  alt="Muddled"
                />
              )}
              {invisible && (
                <img
                  id="invisible"
                  className="status"
                  src="./images/status-effects/invisible.png"
                  alt="Invisible"
                />
              )}
              {strengthened && (
                <img
                  id="strengthened"
                  className="status"
                  src="./images/status-effects/strengthen.png"
                  alt="Strengthened"
                />
              )}
              <br />
              <button
                id="toggle-poison"
                type="button"
                onClick={() => setPoisoned(!poisoned)}
              >
                Poisoned
              </button>
              <button
                id="toggle-wounded"
                type="button"
                onClick={() => setWounded(!wounded)}
              >
                Wounded
              </button>
              <button
                id="toggle-immobilized"
                type="button"
                onClick={() => setImmobilized(!immobilized)}
              >
                Immobilized
              </button>
              <button
                id="toggle-disarmed"
                type="button"
                onClick={() => setDisarmed(!disarmed)}
              >
                Disarmed
              </button>
              <button
                id="toggle-regenerate"
                type="button"
                onClick={() => setRegenerate(!regenerate)}
              >
                Regenerate
              </button>
              <button
                id="toggle-stunned"
                type="button"
                onClick={() => setStunned(!stunned)}
              >
                Stunned
              </button>
              <button
                id="toggle-muddled"
                type="button"
                onClick={() => setMuddled(!muddled)}
              >
                Muddled
              </button>
              <button
                id="toggle-invisible"
                type="button"
                onClick={() => setInvisible(!invisible)}
              >
                Invisible
              </button>
              <button
                id="toggle-strengthened"
                type="button"
                onClick={() => setStrengthened(!strengthened)}
              >
                Strengthened
              </button>
            </td>
          </tr>
          {character.name === 'beastTyrant' && (
            <tr id="bear-status-effects">
              <td id="bear-effects" align="center" colSpan="4">
                Bear Status Effects
                <br />
                {bearPoisoned && (
                  <img
                    id="bear-poisoned"
                    className="status"
                    src="./images/status-effects/poisoned.png"
                    alt="Bear Poisoned"
                  />
                )}
                {bearWounded && (
                  <img
                    id="bear-wounded"
                    className="status"
                    src="./images/status-effects/wounded.png"
                    alt="Bear Wounded"
                  />
                )}
                {bearImmobilized && (
                  <img
                    id="bear-immobilized"
                    className="status"
                    src="./images/status-effects/immobilized.png"
                    alt="Bear Immobilized"
                  />
                )}
                {bearDisarmed && (
                  <img
                    id="bear-disarmed"
                    className="status"
                    src="./images/status-effects/disarmed.png"
                    alt="Bear Disarmed"
                  />
                )}
                <img
                  id="bear-spacer"
                  className="status"
                  src="./images/status-effects/disarmed.png"
                  alt="Bear Spacer"
                />
                {bearRegenerate && (
                <img
                  id="bear-regenerate"
                  className="status"
                  src="./images/status-effects/regenerate.png"
                  alt="Bear Regenerate"
                />
              )}
              <img
                id="spacer"
                className="status"
                src="./images/status-effects/disarmed.png"
                alt="spacer"
              />
                {bearStunned && (
                  <img
                    id="bear-stunned"
                    className="status"
                    src="./images/status-effects/stunned.png"
                    alt="Bear Stunned"
                  />
                )}
                {bearMuddled && (
                  <img
                    id="bear-muddled"
                    className="status"
                    src="./images/status-effects/muddled.png"
                    alt="Bear Muddled"
                  />
                )}
                {bearInvisible && (
                  <img
                    id="bear-invisible"
                    className="status"
                    src="./images/status-effects/invisible.png"
                    alt="Bear Invisible"
                  />
                )}
                {bearStrengthened && (
                  <img
                    id="bear-strengthened"
                    className="status"
                    src="./images/status-effects/strengthen.png"
                    alt="Bear Strengthened"
                  />
                )}
                <br />
                <button
                  id="toggle-bear-poison"
                  type="button"
                  onClick={() => setBearPoisoned(!bearPoisoned)}
                >
                  Bear Poisoned
                </button>
                <button
                  id="toggle-bear-wounded"
                  type="button"
                  onClick={() => setBearWounded(!bearWounded)}
                >
                  Bear Wounded
                </button>
                <button
                  id="toggle-bear-immobilized"
                  type="button"
                  onClick={() => setBearImmobilized(!bearImmobilized)}
                >
                  Bear Immobilized
                </button>
                <button
                  id="toggle-bear-disarmed"
                  type="button"
                  onClick={() => setBearDisarmed(!bearDisarmed)}
                >
                  Bear Disarmed
                </button>
                <button
                  id="toggle-bear-regenerate"
                  type="button"
                  onClick={() => setBearRegenerate(!bearRegenerate)}
                >
                  Bear Regenerate
                </button>
                <button
                  id="toggle-bear-stunned"
                  type="button"
                  onClick={() => setBearStunned(!bearStunned)}
                >
                  Bear Stunned
                </button>
                <button
                  id="toggle-bear-muddled"
                  type="button"
                  onClick={() => setBearMuddled(!bearMuddled)}
                >
                  Bear Muddled
                </button>
                <button
                  id="toggle-bear-invisible"
                  type="button"
                  onClick={() => setBearInvisible(!bearInvisible)}
                >
                  Bear Invisible
                </button>
                <button
                  id="toggle-bear-strengthened"
                  type="button"
                  onClick={() => setBearStrengthened(!bearStrengthened)}
                >
                  Bear Strengthened
                </button>
              </td>
            </tr>
          )}
          <tr>
            <td id="health" align="center" colSpan="1">
              <br />
              <div id="character-health">
                Health
                <p
                  id="health-counter"
                  style={{ fontSize: '35px', color: 'red' }}
                >
                  {health}
                </p>
                <br />
                <button
                  id="damage"
                  type="button"
                  style={{ fontSize: '15px' }}
                  disabled={health < 1}
                  onClick={() => setHealth(health - 1)}
                >
                  -
                </button>
                <button
                  disabled={health === maxHealth}
                  id="heal"
                  type="button"
                  style={{ fontSize: '15px' }}
                  title="If Poisoned, Heal Skills Must Remove Poison Instead of Increasing Health"
                  onClick={() => setHealth(health + 1)}
                >
                  +
                </button>
              </div>
              {character.name === 'beastTyrant' && (
                <div id="bear-health">
                  Bear Health
                  <p
                    id="bear-health-counter"
                    style={{ fontSize: '35px', color: 'red' }}
                  >
                    {bearHealth}
                  </p>
                  <br />
                  <button
                    disabled={bearHealth < 1}
                    id="damage-bear"
                    type="button"
                    style={{ fontSize: '15px' }}
                    onClick={() => setBearHealth(bearHealth - 1)}
                  >
                    -
                  </button>
                  <button
                    disabled={bearHealth === maxBearHealth}
                    id="heal-bear"
                    type="button"
                    style={{ fontSize: '15px' }}
                    title="If Poisoned, Heal Skills Must Remove Poison Instead of Increasing Health"
                    onClick={() => setBearHealth(bearHealth + 1)}
                  >
                    +
                  </button>
                </div>
              )}
            </td>
            <td id="xp" align="center" colSpan="1">
              Experience
              <br />
              <p id="xp-counter" style={{ fontSize: '35px', color: 'cyan' }}>
                {experience}
              </p>
              <br />
              <button
                disabled={experience < 1}
                id="xp-down"
                type="button"
                style={{ fontSize: '15px' }}
                onClick={() => setExperience(experience - 1)}
              >
                -
              </button>
              <button
                id="xp-up"
                type="button"
                style={{ fontSize: '15px' }}
                onClick={() => setExperience(experience + 1)}
              >
                +
              </button>
            </td>
            <td id="loot" align="center" colSpan="1">
              Loot
              <br />
              <p id="loot-counter" style={{ fontSize: '35px', color: 'gold' }}>
                {loot}
              </p>
              <br />
              <button
                disabled={loot < 1}
                id="loot-down"
                type="button"
                style={{ fontSize: '15px' }}
                onClick={() => setLoot(loot - 1)}
              >
                -
              </button>
              <button
                id="loot-up"
                type="button"
                style={{ fontSize: '15px' }}
                onClick={() => setLoot(loot + 1)}
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default PlayerStats