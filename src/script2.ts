
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

// Utility Types

interface UserProfile {
  id: number;
  name: string;
  bio: string;
}

function updateUser(user: UserProfile, updates: Partial<UserProfile>): UserProfile {
  return { ...user, ...updates };
}

const currentProfile: UserProfile = { id: 1, name: "Yeasin", bio: "Developer" };

const updatedProfile = updateUser(currentProfile, { bio: "Senior MERN Stack Developer" });

console.log(updatedProfile);


// Discriminated Unions (Patter Matching)

type ApiResponse = 
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function handleResponse(response: ApiResponse) {
  if (response.status === "success") {
    console.log("Data received:", response.data);
  } else {
    console.log("Error occurred:", response.message);
  }
}

handleResponse({ status: "success", data: "User list loaded" });


// Async Funtions and Promises

async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched from server");
    }, 2000);
  });
}

fetchData().then(data => console.log(data));