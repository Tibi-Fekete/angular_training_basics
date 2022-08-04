import {Human} from "./human";

export class Inn {

    private guests: Human[] = [];

    constructor() {
    }

    public addGuest(guest: Human): void {
        this.guests.push(guest);
    }

    public rent(): void {
        this.guests.forEach(guest => {
            guest.gold -= 80;
        })

        this.guests = this.guests.filter(guest => guest.gold > 0);
    }

    public giveFood(): void {
        this.guests.forEach(guest => {
            guest.gold -= 20;
        })

        this.guests = this.guests.filter(guest => guest.gold > 0);
    }

    public getStatus(): string[] {
       return this.guests.map(guest => guest.status());
    }

}
