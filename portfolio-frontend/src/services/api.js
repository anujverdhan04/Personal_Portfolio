// api.js
import axios from 'axios';

// Set the base URL for your API
const API_URL = 'https://personal-portfolio-dxah.onrender.com/api/';

// Fetch Projects
export const getProjects = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}projects/`);
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching projects:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};

// Fetch Skills
export const getSkills = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}skills/`);
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching skills:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};

// Fetch Internship
export const getInternships = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}internships/`);
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching internships:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};
