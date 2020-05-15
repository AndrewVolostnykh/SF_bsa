import { createElement } from '../helpers/domHelper';
import { showModal } from './modal';

export  function showFighterDetailsModal(fighter) {
  const title = 'Fighter info';
  const bodyElement = createFighterDetails(fighter);
  showModal({ title, bodyElement });
}

function createFighterDetails(fighter) {
  const { name, attack, health, source, defense } = fighter;

  const fighterDetails = createElement({ tagName: 'div', className: 'modal-body' });
  const nameElement = createElement({ tagName: 'span', className: 'fighter-name' });
  const attackElement = createElement({tagName: 'span', className: 'fighter-attack'});
  const healthElement = createElement({tagName: 'span', className: 'fighter-health'});
  const defenseElement = createElement({tagName: 'span', className: 'fighter-defense'});
  const imageElement = createElement({tagName: 'img', className: 'fighter-image'});

  nameElement.innerText = "Name: " + name + "\n";
  attackElement.innerText = "Attack: " + attack + "\n";
  healthElement.innerText = "Health: " + health + "\n";
  defenseElement.innerText = "Defense: " + defense + "\n\n\n";
  imageElement.src = source;

  fighterDetails.append(nameElement, attackElement, healthElement, defenseElement, imageElement);

  return fighterDetails;
}
