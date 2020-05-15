import { createElement } from "../helpers/domHelper";
import { showModal } from "./modal";
import { showFighterDetailsModal } from "./fighterDetails";

export  function showWinnerModal(fighter) {

  const title = 'WINNER!';
  const { name, source } = fighter;
  console.log(fighter);

  const bodyElement = createElement({ tagName: 'div', className: 'modal-body' });
  const winnerName = createElement({ tagName: 'span', className: 'fighter-name'});
  const winnerImage = createElement({tagName: 'img', className: 'fighter-img'});
  
  winnerName.innerText = "Name: " + name + "\n";
  winnerImage.src = source;

  bodyElement.append(winnerName, winnerImage);
  console.log(bodyElement);
  showModal({title, bodyElement});

  //showFighterDetailsModal(fighter);
}