import {Hero} from "./hero";

export class AdventuringParty {

    public heroes: Hero[] = []

    constructor() {
    }

    public addHero(hero: Hero): void {
        this.heroes.push(hero);
    }

    public retireHeroes(): void {
        this.heroes = this.heroes.filter(hero => hero.gold < 5000);
    }

    public getPayment(amount: number): void {
        this.heroes.map(hero => hero.pay(amount));
    }

    public getStatus(): string[] {
        return this.heroes.map(hero => hero.status());
    }

}
