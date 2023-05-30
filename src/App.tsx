import React from "react";
import "./App.css";

// TypeScript Type
let Name1: any;
let name: number | string;
let age: number;
let isStudent: boolean;
let hobbies: String[];
let role: [number, string];

// type Person= {
//   name: string;
//   age?: number;
// };
interface Person {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

let person: Person = {
  name: "John",
};

type X = {
  a: string;
  b: number;
};
type Y = X & {
  a: string;
  b: number;
};

// let y: Y = {
//   c: "efdas",
//   d: 42,
// };

let printName: (name: string) => never;
// console.log(name);

function App() {
  return <div className="App">Hello world</div>;
}

export default App;
