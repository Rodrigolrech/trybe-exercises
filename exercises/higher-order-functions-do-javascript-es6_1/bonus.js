const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = (dragon) => Math.floor(Math.random() * (dragon.strength-14)) + 15;

const warriorDmg = (warrior) => warrior.strength + Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength));

const mageDmg = (mage) => {
  let damage = mage.intelligence + Math.floor(Math.random() * mage.intelligence + 1);
  let newMana;
  if(mage.mana < 15) {
    damage = 0;
    console.log('Não possui mana suficiente');
    newMana = mage.mana
  }
  else {
    newMana = mage.mana - 15;
  }
  return {
    damage: damage,
    mana: newMana
  }
}

const gameActions = {
  warriorAttack: () => {
    warrior.damage = warriorDmg(warrior);
    dragon.healthPoints -= warrior.damage;
  },
  mageAttack: () => {
    mage.damage = mageDmg(mage).damage;
    mage.mana = mageDmg(mage).mana;
    dragon.healthPoints -= mage.damage;
  },
  dragonAttack: () => {
    dragon.damage = dragonDmg(dragon);
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  battleMembers: () => {
    gameActions.warriorAttack();
    gameActions.mageAttack();
    gameActions.dragonAttack();
    console.log(mage, warrior ,dragon);
  }
};
