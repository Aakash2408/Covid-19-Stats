import React from 'react';
import { FiGithub } from "react-icons/fi";
import virus from './Images/virus.png';
import "./home.css"; 

function Home() {
    return (
      <div className="main-cont">
      <div className="home-cont">
        <div className="project-title">
           <div className="h1-container">
              <h1>COVID-19</h1>
              <h2>CORONAVIRUS DISEASE</h2>
              {/* <p> A project by <a href="https://github.com/Aakash2408">Aakash Sangwan</a></p>  */}
          </div>
        </div>
        <div className="image-container">
         <img  className="image" src={virus}/>
        </div>
       

         
      </div>
      </div>
    );
}

export default Home;
