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
