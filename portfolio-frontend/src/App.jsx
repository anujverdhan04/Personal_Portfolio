// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Work from './Pages/Work';
import { getProjects, getSkills , getInternships } from './services/api';
import axios from 'axios';
import Header from './components/Header/Header';  // The single Header for the whole app
import './App.css'; // Global styles
import Contact from './Pages/Contact'; // Import the Contact page

const App = () => {
    const [data, setData] = useState(null);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [internship,setInternships] = useState([])
 
    // Fetch data from Django API (example endpoint)
    useEffect(() => {
        axios.get('https://personal-portfolio-dxah.onrender.com/api/example/') 
            .then(response => {
                setData(response.data.message);
            })
            .catch(error => console.log(error));
    }, []);

    // Fetch projects and skills
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getProjects();
                setProjects(projectsResponse.data);
                const skillsResponse = await getSkills();
                setSkills(skillsResponse.data);
                const internshipsResponse = await getInternships();
                setInternships(internshipsResponse.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Router>
            <div className="app-container">
                <Header /> {/* Ensure Header is included here */}
                <main className="main-content">
                    <h1>{data}</h1> {/* Data from Django API */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Work projects={projects} skills={skills} internship ={internship} />} />
                        <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
