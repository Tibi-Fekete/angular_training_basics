import {Student} from "./student";
import {Gryffindor} from "./gryffindor";
import {Ravenclaw} from "./ravenclaw";
import {Hufflepuff} from "./hufflepuff";
import {Slytherin} from "./slytherin";
import {Hogwarts} from "./hogwarts";

const gryfStudent1: Student = new Gryffindor('Tiborka', 'Roland');
const gryfStudent2: Student = new Gryffindor('Roland', 'Tiborka');

const ravenStudent1: Student = new Ravenclaw('Petra', 230);
const ravenStudent2: Student = new Ravenclaw('Feri', 130);
const ravenStudent3: Student = new Ravenclaw('Róóóland', 30);


const huffleStudent1: Student = new Hufflepuff('Dani');
const huffleStudent2: Student = new Hufflepuff('Kósa');

const slythStudent1: Student = new Slytherin('Heremione', 'orgasmico expecto');
const slythStudent2: Student = new Slytherin('Dákó Melfój', 'magzatus deletus');
const slythStudent3: Student = new Slytherin('Ferenc', 'ejaculatus clytoris');


const hogwarts: Hogwarts = new Hogwarts();

hogwarts.addStudent(gryfStudent1);
hogwarts.addStudent(gryfStudent2);

hogwarts.addStudent(ravenStudent1);
hogwarts.addStudent(ravenStudent2);
hogwarts.addStudent(ravenStudent3);

hogwarts.addStudent(huffleStudent1);
hogwarts.addStudent(huffleStudent2);

hogwarts.addStudent(slythStudent1);
hogwarts.addStudent(slythStudent2);
hogwarts.addStudent(slythStudent3);


console.log('get important students...');
console.log(hogwarts.getImportantStudents());

console.log('get students...');
console.log(hogwarts.getStudents());

console.log('do sorting hat...');
console.log(hogwarts.doSortingHat());



