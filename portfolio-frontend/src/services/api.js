import axios from 'axios';

// Define the API URL constant
const API_URL = 'https://personal-portfolio-dxah.onrender.com/api/';

// Example API call
export const exampleApiCall = async () => {
    try {
        const response = await axios.get(`${API_URL}projects/`); // Using the API_URL constant
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Fetch Projects
export const getProjects = async () => {
    try {
        const response = await axios.get(`${API_URL}projects/`); // Corrected endpoint
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching projects:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};

// Fetch Skills
export const getSkills = async () => {
    try {
        const response = await axios.get(`${API_URL}skills/`); // Using the API_URL constant
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching skills:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};

// Fetch Internship
export const getInternships = async () => {
    try {
        const response = await axios.get(`${API_URL}internships/`); // Using the API_URL constant
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching internships:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};
