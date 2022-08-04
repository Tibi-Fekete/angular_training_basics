export class MilitaryUnit {
    public type: string;
    public health: number;
    public damage: number;
    public hasArmor: boolean;
    public hasShield: boolean;

    constructor(
        type: string,
        health: number,
        damage: number,
        hasArmor: boolean,
        hasShield: boolean
    ) {
        this.type = type;
        this.health = health;
        this.damage = damage;
        this.hasArmor = hasArmor;
        this.hasShield = hasShield;
    }
}
