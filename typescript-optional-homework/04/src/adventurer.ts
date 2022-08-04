import {Human} from "./human";

export class Adventurer extends Human {

    constructor(name: string, weight: number, gold: number) {
        super(name, weight, gold);
    }

    public eat(): void {
        this.weight += 3;
    }
}
