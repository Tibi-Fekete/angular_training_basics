import {Student} from "./student";

export class Slytherin extends Student {

    constructor(name: string, private favouriteCurse: string) {
        super(name, 'Slytherin');
    }

    public introduce(): string {
        return `Hi! I am ${this.name} from House ${this.house} and my favourite curse is: ${this.favouriteCurse}`;
    }
}
