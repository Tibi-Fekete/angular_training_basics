import {Spaceship} from "./spaceship";

export class SpaceStation {
    private ships: Spaceship[] = [];

    constructor() {
    }

    public addShip(ship: Spaceship): void {
        this.ships.push(ship);
    }

    public repairShips(percentage: number): void {
        this.ships.forEach(ship => ship.repair(percentage));
    }

    public spacefight(damage: number): number {
        let allDamage: number = 0;
        this.ships.forEach(ship => {
            allDamage += ship.firepower;
            ship.actualDurability -= damage;
        })

        this.ships = this.ships.filter(ship => ship.actualDurability > 0);
        return allDamage;
    }

    public getStatus(): string[] {
        return this.ships.map(ship => ship.status());
    }


}
