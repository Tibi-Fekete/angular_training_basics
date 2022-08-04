import {Human} from "./human";

export class Farmer extends Human {

    constructor(name: string, weight: number, gold: number, public ownVegetable: string) {
        super(name, weight, gold);
    }

    public status(): string {
        return `${this.name} the ${this.ownVegetable} farmer, weight: ${this.weight}, gold: ${this.gold}`;
    }

    public eat(): void {
        this.weight += 2;
    }
}
