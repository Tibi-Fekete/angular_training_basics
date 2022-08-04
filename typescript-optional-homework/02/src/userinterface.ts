import {Clownfish} from "./clownfish";
import {Kong} from "./kong";
import {Tang} from "./tang";
import {Fish} from "./fish";
import {Aquarium} from "./aquarium";

let nemo: Fish = new Clownfish('Nemo', 5, 'orange-white');
let kongFish: Fish = new Kong('MyKong', 2, 'blue');
let tangFish: Fish = new Tang('Tangobango', 3, 'black');

let aquarium: Aquarium = new Aquarium();

aquarium.addFish(nemo);
aquarium.addFish(kongFish);
aquarium.addFish(tangFish);

console.log(aquarium.getStatus());

console.log('etetés után...');

aquarium.feed();

console.log(aquarium.getStatus());
