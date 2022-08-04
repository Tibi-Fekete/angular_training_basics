export abstract class Human {

    protected constructor(public name: string, public weight: number, public gold: number) {
    }

    public status(): string {
        return `${this.name}, weight: ${this.weight}, gold: ${this.gold}`;
    }

    public pay(amount: number): void {
        this.gold -= amount;
    }

    public eat(): void {

    }
}
