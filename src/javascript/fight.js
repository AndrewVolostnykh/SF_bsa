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
    console.log(secondFighter.name + ": left health: " + secondHealth);

    let damageForFirst = getDamage(secondFighter, firstFighter);
    firstHealth = firstHealth - damageForFirst;
    console.log(firstFighter.name + ": left health: " + firstHealth);
  }
}

export function getDamage(attacker, enemy) {
  const damage = getHitPower(attacker) - getBlockPower(enemy);
  return damage > 0 ? damage : 0;
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
  return 1 + Math.random()
}