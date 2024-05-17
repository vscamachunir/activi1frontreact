// Mock API
const mockInventoryItems = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1', price: 10 },
    { id: 2, name: 'Item 2', description: 'Description for Item 2', price: 20 },
    { id: 3, name: 'Item 3', description: 'Description for Item 3', price: 30 },
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getInventoryItems = async () => {
    // Simulate API delay
    await delay(500);
    return mockInventoryItems;
};

export const loginUser = async (username, password) => {
    await delay(500);
    return 'dummy-token';
};

export const registerUser = async (username, password) => {
    await delay(500);
    return { message: 'User registered successfully.' };
};
