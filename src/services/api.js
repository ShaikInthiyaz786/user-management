import axios from "axios";

// Base URL for the JSONPlaceholder API
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Fetch all users.
 * @returns {Promise} Resolves to an array of users.
 */
export const fetchUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data; // Returns the user data array
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Fetch a single user by ID.
 * @param {number|string} userId - The ID of the user to fetch.
 * @returns {Promise} Resolves to the user's data.
 */
export const fetchUserById = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data; // Returns the user data
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
};

/**
 * Add a new user.
 * @param {Object} userData - The user data to add.
 * @returns {Promise} Resolves to the created user's data.
 */
export const addUser = async (userData) => {
  try {
    const response = await axios.post(BASE_URL, userData);
    return response.data; // Simulated success response
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

/**
 * Update an existing user.
 * @param {number|string} userId - The ID of the user to update.
 * @param {Object} userData - The updated user data.
 * @returns {Promise} Resolves to the updated user's data.
 */
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${userId}`, userData);
    return response.data; // Simulated success response
  } catch (error) {
    console.error(`Error updating user with ID ${userId}:`, error);
    throw error;
  }
};

/**
 * Delete a user.
 * @param {number|string} userId - The ID of the user to delete.
 * @returns {Promise} Resolves to a success message or status.
 */
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${userId}`);
    return response.data; // Simulated success response
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    throw error;
  }
};
