import {Spaceship} from "./spaceship";

export class Battlecruiser extends Spaceship {

    constructor(name: string, firepower: number) {
        super(name, 230, firepower);
    }

    public repair(repairPercentage: number): void {
        if(repairPercentage > 20) {
            this.actualDurability += repairPercentage * 0.9;
        } else {
            this.actualDurability += repairPercentage
        }

        if(this.actualDurability > this.maxDurability) {
            this.actualDurability = this.maxDurability;
        }
    }

    public getDamage(damage: number): void {
        this.actualDurability -= damage * 0.8;

        if(this.actualDurability < 0) {
            this.actualDurability = 0;
        }
    }
}
