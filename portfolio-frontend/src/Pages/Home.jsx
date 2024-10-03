import React from 'react';
import Header from '../components/Header/header';
import "../Styles/home.css";
import BBG from "../assets/BBG.jpg";

const HomePage = () => {
  return (
    <div className="home-background">
      <div className="intro">
        <h2> PORTFOLIO </h2>
      </div>
      {/* Content of the homepage */}
      <div className="content">
        {/* Text section */}
        <div className="Basic">
          <h1>Hi ,</h1>
          <h2>I Anuj Verdhan</h2>
          <h3>I recently completed my Bachelor of Technology
            in Computer Science and Engineering</h3>
        </div>

        {/* Image on the right */}
        <div className="image-container">
          <img src={BBG} alt="Anuj Verdhan" />
        </div>
      </div>

     {/* About section below the content */}
<div className="about-section">
  <h3>About Me</h3>
  <div className="about-content">
    <p className="intro-text">
      I am experienced in web development and software-related fields,
      having developed a food delivery app during my internship. 
      With a strong problem-solving approach, I am eager to contribute effectively to a development team.
    </p>
    <div className="about-details">
    <div>
   <p><strong><span style={{color: "#FFD700" }}>Name:</span></strong> Anuj Verdhan</p>
      <p><strong><span style={{color: "#FFD700" }}>Program:</span></strong> Bachelor of Technology in Computer Science and Engineering [2020-24]</p>
      <p><strong><span style={{color: "#FFD700" }}>Email:</span></strong> anujverdhan049@gmail.com</p>
      <p><strong><span style={{color: "#FFD700" }}>Experience:</span></strong> Fresher</p>
      <p><strong><span style={{color: "#FFD700" }}>Address:</span></strong> Dehradun</p>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};
export default HomePage;
