import {Student} from "./student";

export class Gryffindor extends Student {

    constructor(name: string, private bestFriend: string) {
        super(name, 'Gryffindor');
    }

    public introduce(): string {
        return `Hi! I am ${this.name} from House ${this.house} and my best friend is: ${this.bestFriend}`;
    }
}
