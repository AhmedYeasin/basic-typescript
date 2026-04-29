
// Interface Inheritance in TypeScript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const worker: Employee = {
  name: "Yeasin",
  age: 25,
  employeeId: 5001
};

console.log(worker)