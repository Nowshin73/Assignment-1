const formatValue = (input: string | number | boolean): (string | number | boolean) => {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else if (typeof input === "boolean") {
        return !input;
    }
    else { 
        return "Invalid Input";
    }
}

const getLength = (value: unknown): number => {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value) === true) {
        return value.length;
    }
    else {
         return 0;
    }
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

const filterByRating = (input: { title: string, rating: number }[]):{ title: string, rating: number }[] => {
    
    return input.filter((i) => i.rating >= 4 && i.rating <= 5);
}

const filterActiveUsers = (input: { id: number, name: string, email: string, isActive: boolean }[]):{ id: number, name: string, email: string, isActive: boolean }[] => {
    return input.filter((i) => i.isActive === true);
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails =(book: Book) =>{
    const {title, author, publishedYear, isAvailable} = book;
    console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable}`);
}

const getUniqueValues = (Array1: (string | number)[], Array2: (string | number)[]):(string | number)[] =>{
const jointArr: (string | number)[] = [];

  const checkUnique = (value: string | number): boolean => {
    for (let i = 0; i < jointArr.length; i++) {
      if (jointArr[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < Array1.length; i++) {
    if (!checkUnique(Array1[i])) {
      jointArr.push(Array1[i]);
    }
  }

  for (let i = 0; i < Array2.length; i++) {
    if (!checkUnique(Array2[i])) {
      jointArr.push(Array2[i]);
    }
  }

  return jointArr;
} 

 const  calculateTotalPrice = 
 (products:
     { name: string,
       price: number, 
       quantity: number,
       discount?:number 
    }[]
    ):number =>{
    return products.reduce((sum,product)=> sum + product.price * product.quantity -( product.discount?( (product.discount*product.price*product.quantity)/100): 0),0)
 }
