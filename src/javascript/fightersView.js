import { createFighter } from './fighterView';
import { showFighterDetailsModal } from './modals/fighterDetails';
import { createElement } from './helpers/domHelper';
import { fight } from './fight';
import { showWinnerModal } from './modals/winner';
import fighterDetails, { fightersDetails } from './helpers/mockData';

export function createFighters(fighters) {
  const selectFighterForBattle = createFightersSelector();
  const fighterElements = fighters.map(fighter => createFighter(fighter, showFighterDetails, selectFighterForBattle));
  const fightersContainer = createElement({ tagName: 'div', className: 'fighters' });

  fightersContainer.append(...fighterElements);

  return fightersContainer;
}

const fightersDetailsCache = new Map();

async function showFighterDetails(event, fighter) {
  const fullInfo = await getFighterInfo(fighter._id);
  showFighterDetailsModal(fullInfo);
}

// TODO
export async function getFighterInfo(fighterId) {
  let result = {};
  result = fightersDetails.filter(fighter => fighter._id === fighterId);
  console.log(result); // temp
  return result[0];
}

function createFightersSelector() {
  const selectedFighters = new Map();

  return async function selectFighterForBattle(event, fighter) {
    const fullInfo = await getFighterInfo(fighter._id);

    if (event.target.checked) {
      selectedFighters.set(fighter._id, fullInfo);
    } else { 
      selectedFighters.delete(fighter._id);
    }

    if (selectedFighters.size === 2) {
      const winner = fight(...selectedFighters.values());
      showWinnerModal(winner);
    }
  }
}
