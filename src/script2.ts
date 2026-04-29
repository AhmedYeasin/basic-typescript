
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

interface Car {
  brand: string;
  model: string;
  year: number;
}


// Keyof object in TypeScript
function getCarProperty(car: Car, key: keyof Car) {
  return car[key];
}

const myCar: Car = { brand: "Toyota", model: "Corolla", year: 2022 };

console.log(getCarProperty(myCar, "brand"));