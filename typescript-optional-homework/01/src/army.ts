import {MilitaryUnit} from "./military-unit";

export class Army {
    private units: MilitaryUnit[] = [];
    private firstAttack: boolean = true;

    constructor() {
    }

    public addUnit(militaryUnit: MilitaryUnit): void {
        this.units.push(militaryUnit);
    }

    public damageAll(damage: number): void {
        this.units.forEach(unit => {
            if(unit.type === 'swordsman' && unit.hasShield) {
                unit.hasShield = false;
            }

            unit.health = unit.health - damage;

            if(unit.health < 25) {
                const index = this.units.indexOf(unit);
                this.units.splice(index, 1);
            }
        })
    }

    public getArmyDamage(): number {
        let damage: number = 0;

        this.units.forEach(unit => {
            if(unit.type === 'heavy cavalry' && this.firstAttack) {
                damage += unit.damage * 3;
            }
            damage += unit.damage;
        });

        this.firstAttack = false;

        return damage;
    }

    public getArmySize(): number {
        return this.units.length;
    }

}
