import {Human} from "./human";

export class Merchant extends Human {

    constructor(name: string, weight: number, gold: number) {
        super(name, weight, gold);
    }

    public pay(amount: number): void {
        this.gold -= Math.floor(amount * 0.9);
    }

    public eat(): void {
        this.weight += 1;
        this.gold += 10;
    }
}
