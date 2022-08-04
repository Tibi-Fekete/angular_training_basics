import {Student} from "./student";

export class Hogwarts {

    private students: Student[] = [];

    constructor() {
    }

    public addStudent(student: Student): void {
        this.students.push(student);
    }

    public getImportantStudents(): string {
       return this.students
            .filter(student => student.house === 'Slytherin' || student.house === 'Gryffindor')
            .map(student => student.name)
            .sort()
            .join(', ');
    }

    public getStudents(): Student[] {
        return this.students as Student[];
    }

    public doSortingHat(): Student[][] {
        const gryffindorStudents: Student[] = this.students.filter(student => student.house === 'Gryffindor');
        const ravenClawStudents: Student[] = this.students.filter(student => student.house === 'RavenClaw');
        const hufflePuffStudents: Student[] = this.students.filter(student => student.house === 'Hufflepuff');
        const slytherinStudents: Student[] = this.students.filter(student => student.house === 'Slytherin');

        return [[...gryffindorStudents], [...ravenClawStudents], [...hufflePuffStudents], [...slytherinStudents]];
    }
}
