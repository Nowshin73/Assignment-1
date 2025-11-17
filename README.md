**Union and Intersection Types**

Union Types: A variable can hold one of multiple types.

let value: string | number;
value = "Hello";
value = 123;


Intersection Types: Combines multiple types into one type.

type Person = { name: string };
type Employee = { id: number };

type EmployeePerson = Person & Employee;

const user: EmployeePerson = { name: "Rakib", id: 101 };
