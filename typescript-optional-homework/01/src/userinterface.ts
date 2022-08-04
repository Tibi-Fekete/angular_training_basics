import {MilitaryUnit} from "./military-unit";
import {Army} from "./army";

const swordsman: MilitaryUnit = new MilitaryUnit('swordsman', 100, 10, true, true);
const archer: MilitaryUnit = new MilitaryUnit('archer', 50, 20, false, false);
const cavalry: MilitaryUnit = new MilitaryUnit('heavy cavalry', 150, 20, true, false);

const army: Army = new Army();

army.addUnit(swordsman);
army.addUnit(archer);
army.addUnit(cavalry);

console.log(army.getArmySize())
console.log(army.getArmyDamage())

console.log('do some damage');

army.damageAll(60);
console.log(army.getArmySize())
console.log(army.getArmyDamage())

