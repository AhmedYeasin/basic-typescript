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
export {};
//# sourceMappingURL=script.js.map