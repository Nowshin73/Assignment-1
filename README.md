##1. Union and Intersection Types

**- Union Types:** Union types are used when a value holds more than a single type
      let value: string | number;
      value = "123";
      value = 123;


**- Intersection Types:** Combines multiple types into one type.
    type Person = { name: string };
    type Employee = { id: number };
    
    type EmployeePerson = Person & Employee;
    
    const user: EmployeePerson = { name: "Rakib", id: 101 };
