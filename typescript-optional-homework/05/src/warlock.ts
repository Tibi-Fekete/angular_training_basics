import {Hero} from "./hero";

export class Warlock extends Hero {

    constructor(name: string, public demonName: string) {
        super(name, 0);
    }

    public status(): string {
        return `${this.name} has ${this.gold} gold and works for ${this.demonName}`;
    }

    public pay(amount: number): void {
        this.gold += Math.floor(amount * 1.1);
    }
}
