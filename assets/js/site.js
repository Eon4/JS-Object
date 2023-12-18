// write cool JS here!

class testObject {
    constructor(msg) {
        console.log("Hello from object " + msg);

        this.message=msg;
        console.log(this.message);    }
}

const myObject = new testObject("objekt 1");
const myObject2 = new testObject("objekt 2");


myObject2.message = "my message";
myObject.message = "juletræ";


console.log(myObject2.message);
console.log(myObject.message);