export abstract class Spaceship {

    public actualDurability: number;

    protected constructor(public name: string, public maxDurability: number, public firepower: number) {
        this.actualDurability = maxDurability;
    }

    public status(): string {
        return `${this.name}, durability: ${this.actualDurability}/${this.maxDurability}, firepower: ${this.firepower}`;
    }

    public repair(repairPercentage: number): void {
        this.actualDurability += repairPercentage;

        if(this.actualDurability > this.maxDurability) {
            this.actualDurability = this.maxDurability;
        }
    }

    public getDamage(damage: number): void {
        this.actualDurability -= damage;

        if(this.actualDurability < 0) {
            this.actualDurability = 0;
        }
    }
}
