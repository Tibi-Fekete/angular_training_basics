import {Hero} from "./hero";

export class Bard extends Hero {

    constructor(name: string) {
        super(name, 200);
    }

    public pay(amount: number): void {
        this.gold += Math.floor(amount * 0.8);
    }
}
