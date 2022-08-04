export class Fish {

    public shortTermMemoryLoss: boolean = false;

    constructor(public name: string, public weight: number, public color: string) {
    }

    public status(): string {
        return `${this.name}, weight: ${this.weight}, color: ${this.color}, short-term memory loss: ${this.shortTermMemoryLoss}`;
    }

    public feed(): void {

    }


}
