## 1. Union and Intersection Types

**Union Types:** Union types তখন ব্যবহার করা হয় যখন একটা variable একের অধিক type এর value ধারন করে। নিচে একটি উদাহরণ দেয়া হল। উদাহরণ টি লক্ষ্য করলে আমরা দেখতে পাই, price দুই ধরনের value বহন করতে পারে। যথাক্রমে string এবং number। এজন্য আমরা price declare করার সময় দুই ধরনের টাইপ mention করে দিয়েছি। এভাবে আমরা উদাহরণস্বরূপ price calculation এর  ক্ষেত্রে সতর্কতা অর্জন করতে পারি।
      let price: string | number;
      price = "123";
      price = 123;


**Intersection Types:** বিভিন্ন টাইপকে একত্রিত করে। উদাহরণ স্বরূপ Person এবং Employee দুটো ভিন্ন type declare করা আছে। কিন্ত আমি দুটো টাইপ একসাথে ব্যবহার করতে চাই। এজন্য আমি আরেকটি টাইপ EmployeePerson লিখলাম যেখানে Intersection এর মাধ্যমে সহজেই একসাথে নিয়ে আসলাম। এই পদ্ধতি না থাকলে আমার থেকে সব আলাদা (type EmployeePerson = {name: string, id: number}) করে লিখতে হত।      
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
            
