## 1. Union and Intersection Types

**Union Types:** Union types are used when a value holds more than a single type

      let value: string | number;
      value = "123";
      value = 123;


**Intersection Types:** Combines multiple types into one type.
    type Person = { name: string };
    type Employee = { id: number };
    
    type EmployeePerson = Person & Employee;
    
    const user: EmployeePerson = { name: "Rakib", id: 101 };

## 2. Differences Between any, unknown, and never
**Any:** Setting a variable to the special type *any* disables type checking

      let v: any = true;
      v = "string"; 
      Math.round(v); // no error as it can be "any" type

**Unknown:** Safer alternative to any. Requires type checking before use.

    function processValue(value: unknown) {
        if (typeof value === 'string') {
          // value is now treated as string
          console.log(value.toUpperCase());
        } else if (Array.isArray(value)) {
          // value is now treated as any[]
          console.log(value.length);
        }
     }

**Never:** Represents values that never occur, e.g., functions that always throw errors.

      function throwError(message: string): never {
        throw new Error(message);
      }
            
