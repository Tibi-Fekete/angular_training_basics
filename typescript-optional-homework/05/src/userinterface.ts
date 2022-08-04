import {Fighter} from "./fighter";
import {Bard} from "./bard";
import {Warlock} from "./warlock";
import {AdventuringParty} from "./adventuringparty";

const fighter: Fighter = new Fighter('Grommash', 'brown');
const bard: Bard = new Bard('Dandelion');
const warlock: Warlock = new Warlock('Guldan', 'Illidan');

const party: AdventuringParty = new AdventuringParty();

party.addHero(fighter);
party.addHero(bard);
party.addHero(warlock);

console.log('status a party elején');
console.log(party.getStatus())

party.getPayment(4850);

console.log('status fizetés után és retire után');

party.retireHeroes();
console.log(party.getStatus());


