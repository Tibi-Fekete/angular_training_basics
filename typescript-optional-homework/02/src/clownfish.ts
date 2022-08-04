import {Fish} from "./fish";

export class Clownfish extends Fish{


    constructor(name: string, weight: number, color: string) {
        super(name, weight, color);
    }

    public feed(): void {
        this.weight += 1;
    }
}
