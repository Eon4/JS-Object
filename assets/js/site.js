// write cool JS here!

// class testObject {
//     constructor(msg) {
//         console.log("Hello from object " + msg);

//         this.message=msg;
//         console.log(this.message);    }
// }

// const myObject = new testObject("objekt 1");
// const myObject2 = new testObject("objekt 2");


// myObject2.message = "my message";
// myObject.message = "juletræ";


// console.log(myObject2.message);
// console.log(myObject.message);

// Some more js stuff

class car {

    constructor(make, model, year, condition) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.condition = condition;
    }

    getInfo() {
        // console.log(`jeg er en ${this.make}, model: ${this.model} fra ${this.year} jeg er i ${this.condition}`);
        return (`jeg er en ${this.make}, model: ${this.model} fra ${this.year} jeg er i ${this.condition} stand`);
    }

    getSumary() {

        return `${this.make}, model: ${this.model}`;
    }
}

const myObject = new car('volvo', 'v40', 2001, 'fin');
const myObject2 = new car('nissan', 'z', 2001, 'lorte');

console.log(myObject.getInfo());
console.log(myObject.getSumary());
console.log(myObject2.getInfo());

const myCars = [];
myCars.push(new car('volvo', 'v40', 2001, 'fin'));
myCars.push(new car('nissan', 'z', 2001, 'lorte'));

console.log(myCars);

console.log(myCars[0].getInfo());
console.log(myCars[0].make = 'John Deer');