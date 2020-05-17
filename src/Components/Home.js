import React from 'react';
import { FiGithub } from "react-icons/fi";
import "./home.css"; 
function Home() {
    return (
      <div className="home-cont">
        <div className="project-title">
          <h1>COVID 19 Dashboard</h1>
        </div>
        <div className="project-author">
          <p>
            This Project is developed by <span>Aakash Sangwan</span>
            <a href="https://github.com/aakash2408">
              <FiGithub />
            </a>
          </p>
        </div>
      </div>
    );
}

export default Home;
