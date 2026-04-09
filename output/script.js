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
export {};
//# sourceMappingURL=script.js.map