interface User {
    id: number;
    name: string;
    isActive: boolean;
}

const getActiveUserNames = (users: User[]): string[] => {
    return users
        .filter(user => user.isActive) 
        .map(user => user.name);       
};


const users: User[] = [
    { id: 1, name: "Yeasin", isActive: true },
    { id: 2, name: "John", isActive: false },
    { id: 3, name: "Sakib", isActive: true }
];

console.log("Active Users:", getActiveUserNames(users)); 


const getPositiveNumbers = (numbers: number[]): number[] => {
    return numbers.filter(num => num > 0);
};


const inputArr = [1, -5, 10, -2, 4];
console.log("Positive Numbers:", getPositiveNumbers(inputArr)); 



// Palindrome Checker
const isPalindrome = (text: string): boolean => {
    const cleanText = text.toLowerCase();
    const reversedText = cleanText.split('').reverse().join('');
    
    return cleanText === reversedText;
};


console.log("Is 'Level' palindrome?:", isPalindrome("Level"));   
console.log("Is 'Hello' palindrome?:", isPalindrome("Hello"));   


// Finding the maximum number
const findMax = (numbers: number[]): number => {
    
    return Math.max(...numbers);
};

const myNums = [10, 5, 8, 20, 3];
console.log("Maximum Number:", findMax(myNums)); 


// for greetings 
const greetingUser = (firstName: string, lastName: string): string => {
    return `Hello, ${firstName} ${lastName}! Welcome to TypeScript.`;
};

console.log(greetingUser("Ahmed", "Yeasin")); 


// get the odd numbers
const isOdd = (num: number): boolean => {

    return num % 2 !== 0;
};

console.log("Is 7 odd?:", isOdd(7));   
console.log("Is 10 odd?:", isOdd(10)); 


// Weekday checker
enum Days {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday
}

function checkDayType(day: Days): string {
  if (day === Days.Saturday || day === Days.Friday) {
    return "Holiday";
  }
  return "Workday";
}

console.log(checkDayType(Days.Friday)); 


// function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(10, 20));      
console.log(combine("Hello ", "JS")); 


// random properties
interface Config {
  readonly apiKey: string;
  readonly endpoint: string;
}

const myConfig: Config = {
  apiKey: "12345-ABCDE",
  endpoint: "https://api.example.com"
};


// custom type alias

type ID = string | number;

function getUserData(id: ID) {
  console.log("Fetching data for ID:", id);
}

getUserData(101);      
getUserData("USR-50"); 