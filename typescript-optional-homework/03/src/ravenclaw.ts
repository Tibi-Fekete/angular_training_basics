import {Student} from "./student";

export class Ravenclaw extends Student {

    constructor(name: string, private iq: number) {
        super(name, 'RavenClaw');
    }

    public introduce(): string {
        return `Hi! I am ${this.name} from House ${this.house} and my IQ is: ${this.iq}`;
    }
}
