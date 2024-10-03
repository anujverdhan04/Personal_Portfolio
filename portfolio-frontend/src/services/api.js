import axios from 'axios';

// Example API call
export const exampleApiCall = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/example/');
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Fetch Projects
export const getProjects = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/projects/');
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching projects:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};

// Fetch Skills
export const getSkills = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/skills/');
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching skills:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};
// Fetch Internship
export const getInternships = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/internships/');
        return response.data;  // Return only the data
    } catch (error) {
        console.error('Error fetching internships:', error);  // Log error to console
        throw error;  // Re-throw error to handle it in the component
    }
};

