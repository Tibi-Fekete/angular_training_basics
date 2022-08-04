export abstract class Student {

    public name: string;
    public house: string;

    protected constructor(name: string, house: string) {
        this.name = name;
        this.house = house;
    }

    public introduce(): string {
        return `Hi! I am ${this.name} from House ${this.house}`;
    }
}
