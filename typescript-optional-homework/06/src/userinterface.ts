import {Avenger} from "./avenger";
import {Battlecruiser} from "./battlecruiser";
import {SpaceFighter} from "./space-fighter";
import {SpaceStation} from "./space-station";

const avenger: Avenger = new Avenger('Avenger ship', 60, 'heh');
const battlecruiser: Battlecruiser = new Battlecruiser('My cruzi', 80);
const spaceFighter: SpaceFighter = new SpaceFighter('In the name of God', 20);

const spaceStation: SpaceStation = new SpaceStation();

spaceStation.addShip(avenger);
spaceStation.addShip(battlecruiser);
spaceStation.addShip(spaceFighter);

console.log('kezdeti status');
console.log(spaceStation.getStatus());

console.log('status csata után');

spaceStation.spacefight(100);

console.log(spaceStation.getStatus());

console.log('status javítás után');
spaceStation.repairShips(30);

console.log(spaceStation.getStatus());
