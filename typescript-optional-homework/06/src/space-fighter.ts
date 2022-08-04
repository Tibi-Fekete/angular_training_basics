import {Spaceship} from "./spaceship";

export class SpaceFighter extends Spaceship {

    constructor(name: string, firepower: number) {
        super(name, 100, firepower);
    }
}
