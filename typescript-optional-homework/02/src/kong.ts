import {Fish} from "./fish";

export class Kong extends Fish {

    constructor(name: string, weight: number, color: string) {
        super(name, weight, color);
    }

    public feed(): void {
        this.weight += 2;
    }
}
