import {Farmer} from "./farmer";
import {Merchant} from "./merchant";
import {Adventurer} from "./adventurer";
import {Inn} from "./inn";

const farmer: Farmer = new Farmer('Orbán Vitya', 90, 10000000, 'retek');
const merchant: Merchant = new Merchant('Mészáros L.', 90, 100);
const adventurer: Adventurer = new Adventurer('Peter McKinnon', 75, 140);

const inn: Inn = new Inn();

inn.addGuest(farmer);
inn.addGuest(merchant);
inn.addGuest(adventurer);

console.log('levonások előtt')
console.log(inn.getStatus());

inn.rent();
inn.giveFood();

console.log('levonások után');
console.log(inn.getStatus());

