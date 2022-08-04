export abstract class Hero {

    protected constructor(public name: string, public gold: number) {
    }

    public status(): string {
        return `${this.name} has ${this.gold} gold`;
    }

    public pay(amount: number): void {
        this.gold += amount;
    }
}
