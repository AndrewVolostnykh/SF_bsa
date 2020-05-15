export function fight(firstFighter, secondFighter) {
  // return winner
  let firstHealth = firstFighter.health;
  let secondHealth = secondFighter.health;

  while(true){

    if(firstHealth <= 0){
      return secondFighter;
    } else if(secondHealth <= 0){
      return firstFighter;
    }

    let damageForSecond = getDamage(firstFighter, secondFighter);
    secondHealth = secondHealth - damageForSecond;

    let damageForFirst = getDamage(secondFighter, firstFighter);
    firstHealth = firstHealth - damageForFirst;

  }
}

export function getDamage(attacker, enemy) {
  // damage = hit - block
  // return damage 
  const damage = getHitPower(attacker) - getBlockPower(enemy);
  return damage;
}

export function getHitPower(fighter) {
  const power = fighter.attack * chance();
  return power;
}

export function getBlockPower(fighter) {
  const power = fighter.defense * chance();
  return power;
}

// this function returning random number - 1 or 2;
function chance(){
  return 1 + Math.floor(Math.random() * Math.floor(2))
}