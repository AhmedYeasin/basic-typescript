const getActiveUserNames = (users) => {
    return users
        .filter(user => user.isActive)
        .map(user => user.name);
};
const users = [
    { id: 1, name: "Yeasin", isActive: true },
    { id: 2, name: "John", isActive: false },
    { id: 3, name: "Sakib", isActive: true }
];
console.log("Active Users:", getActiveUserNames(users));
const getPositiveNumbers = (numbers) => {
    return numbers.filter(num => num > 0);
};
const inputArr = [1, -5, 10, -2, 4];
console.log("Positive Numbers:", getPositiveNumbers(inputArr));
// Palindrome Checker
const isPalindrome = (text) => {
    const cleanText = text.toLowerCase();
    const reversedText = cleanText.split('').reverse().join('');
    return cleanText === reversedText;
};
console.log("Is 'Level' palindrome?:", isPalindrome("Level"));
console.log("Is 'Hello' palindrome?:", isPalindrome("Hello"));
// Finding the maximum number
const findMax = (numbers) => {
    return Math.max(...numbers);
};
const myNums = [10, 5, 8, 20, 3];
console.log("Maximum Number:", findMax(myNums));
// for greetings 
const greetingUser = (firstName, lastName) => {
    return `Hello, ${firstName} ${lastName}! Welcome to TypeScript.`;
};
console.log(greetingUser("Ahmed", "Yeasin"));
// get the odd numbers
const isOdd = (num) => {
    return num % 2 !== 0;
};
console.log("Is 7 odd?:", isOdd(7));
console.log("Is 10 odd?:", isOdd(10));
export {};
//# sourceMappingURL=script.js.map