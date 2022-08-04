import {Fish} from "./fish";

export class Tang extends Fish {

    constructor(name: string, weight: number, color: string) {
        super(name, weight, color);
        this.shortTermMemoryLoss = true;
    }

    public feed(): void {
        this.weight += 1;
    }

}
