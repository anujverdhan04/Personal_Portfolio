import React, { useEffect, useState } from 'react';
import Header from '../components/Header/header';
import axios from 'axios'; // Assuming you'll use Axios to fetch from Django API.
import "../Styles/work.css"; // Link to your CSS for styling
import BBG from "../assets/BBG.jpg";

const Work = () => {
    const [projects, setProjects] = useState([]);
    const [internships, setInternships] = useState([]);
    const [skills, setSkills] = useState([]); // Add state for skills

    // Fetching projects, internships, and skills from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectResponse = await axios.get('http://127.0.0.1:8000/api/projects/'); // Update API endpoint
                const internshipResponse = await axios.get('http://127.0.0.1:8000/api/internships/'); // Your API endpoint
                const skillResponse = await axios.get('http://127.0.0.1:8000/api/skills/'); // Fetch skills from the API

                setProjects(projectResponse.data);
                setInternships(internshipResponse.data);
                setSkills(skillResponse.data); // Set skills data
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };
        fetchData();
    }, []);

    return (
        
        <div className="work-page">
            <img src={BBG} alt="Anuj Verdhan" />
            <div className="work-section">
                <h2>Projects</h2>
                <div className="project-grid">
                    {projects.map(project => (
                        <div key={project.id} className="work-card">
                            <h3>{project.title}</h3>
                            <p>Discription:<br></br>{project.description}</p>
                            <br></br>
                            <p>Skills:<br></br>{project.skills}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    ))} 
                </div>
            </div>

            <div className="work-section">
                <h2>Internships</h2>
                <div className="internship-grid">
                    {internships.map(internship => (
                        <div key={internship.id} className="work-card">
                            <h3>{internship.company}</h3>
                            <p>{internship.description}</p>
                            <p><strong>Duration:</strong> {internship.duration}</p>
                            <p><strong>Role:</strong> {internship.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="work-section">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {skills.map(skill => (
                        <div key={skill.id} className="skill-card">
                            <h4>{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Work;
