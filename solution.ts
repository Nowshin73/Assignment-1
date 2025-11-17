//Problem 1
const formatValue = (input: string | number | boolean) => {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else if (typeof input === "boolean") {
        return !input;
    }
}
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(false));

// Problem 2
const getLength = (value: unknown): number => {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value) === true) {
        return value.length;
    }
}
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

// Problem 3
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

// Problem 4
const filterByRating = (title:string, rating:[]) =>{

}