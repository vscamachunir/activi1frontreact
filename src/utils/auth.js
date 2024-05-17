// Utility functions for authentication

export const isAuthenticated = () => {
    // Check if user is authenticated (e.g., token is present)
    const token = localStorage.getItem('token');
    return !!token;
};

export const setAuthToken = (token) => {
    // Store authentication token in local storage
    localStorage.setItem('token', token);
};

export const removeAuthToken = () => {
    // Remove authentication token from local storage
    localStorage.removeItem('token');
};
