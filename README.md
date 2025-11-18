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
**Any:** এটি এক ধরনের special type। Type "any" set করার মাধ্যমে type checking disable অর্থাৎ বন্ধ করে দেয়া হয়। যার ফলে কোন টাইপ error দেখায় না। নিচের উদাহরণে আমরা দেখতে পাই, v এর টাইপ any দেয়া হয়েছে। যার ফলে এটি কখনও boolean কখনও string value বহন করে। কিন্তু Math.round() এ number value এর বদলে string value pass করে যার ফলে টাইপ error দেখানোর কথা ছিল কিন্তু v ঐর টাইপ any দেয়ায় error দেখায় নি।   

      let v: any = true;
      v = "string"; 
      Math.round(v); // no error as it can be "any" type

**Unknown:** এটা any type থেকে কিছুটা নিরাপদ। এই টাইপ ব্যবহার করলে type checking করতে হয় variable টি ব্যবহার করার পূর্বে। উদাহরণ স্বরূপ নিচের processValue function এ value এর টাইপ unknown declare করা আছে। value কোন কাজে ব্যবহারের পূর্বে টাইপ check করে নিতে হচ্ছে তারপর ব্যবহার করতে হচ্ছে। এখানে যদি type of value == string ধরা হয় তাহলে value টি কে string এর মত treat করা হবে এবং সে অনুযায়ী methods দেখাবে। অন্যথায় value টি যদি Array type ধরা হয় তাহলে তাকে Array এর মত treat করা হবে।


    function processValue(value: unknown) {
        if (typeof value === 'string') {
          // value is now treated as string
          console.log(value.toUpperCase());
        } else if (Array.isArray(value)) {
          // value is now treated as any[]
          console.log(value.length);
        }
     }

**Never:**  এটি মূলত সেসব value এর জন্য ব্যবহার করা হয় যেসব সাধারণত error হয়। যেমন যে function error throw করে। 

      function throwError(message: string): never {
        throw new Error(message);
      }
            
