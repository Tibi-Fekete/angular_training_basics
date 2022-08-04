import {Fish} from "./fish";

export class Aquarium {

    fishes: Fish[] = [];

    constructor() {
    }

    public addFish(fish: Fish): void {
        this.fishes.push(fish);
    }

    public feed(): void {
        this.fishes.forEach(fish => {
            fish.feed();
        })
    }

    public removeFish(): void {
        this.fishes = this.fishes.filter(fish => fish.weight >= 11);
    }

    public getStatus(): string[] {
        let statuses: string[] = [];

        this.fishes.forEach(fish => {
            statuses.push(fish.status());
        })
        
        return statuses;
    }
}
