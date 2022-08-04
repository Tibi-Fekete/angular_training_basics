import {Hero} from "./hero";

export class Fighter extends  Hero {

    constructor(name: string, public armorColor: string) {
        super(name, 0);
    }

    public status(): string {
        return `${this.name} has ${this.gold} gold and a/an ${this.armorColor} armor`;
    }
}
