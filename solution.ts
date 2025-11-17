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
const filterByRating = (input: { title: string, rating: number }[]) => {
    return input.filter((i) => (i.rating >= 4 && i.rating <= 5) && i);
}
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

//Problem 5
const filterActiveUsers = (input: { id: number, name: string, email: string, isActive: boolean }[]) => {
    return input.filter((i) => i.isActive === true && i);
}
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

//Problem 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails =(input: Book) =>{
    const {title, author, publishedYear, isAvailable} = input;
    console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable}`);
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

//problem 7

const getUniqueValues = (input1:number[],input2:number[]): number[] =>{

} 