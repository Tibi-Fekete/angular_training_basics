import {Spaceship} from "./spaceship";

export class Avenger extends Spaceship {

    constructor(name: string, firepower: number, public ionTorpedo: string) {
        super(name, 150, firepower);
    }

    public status(): string {
        return `${this.name}, durability: ${this.actualDurability}/${this.maxDurability}, firepower: ${this.firepower}, ion torpedo: ${this.ionTorpedo}`;
    }
}
