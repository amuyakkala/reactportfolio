import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://kxn9103.uta.cloud/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://kxn9103.uta.cloud/" target="_blank" rel="noreferrer"><h2>
                Academic Program Performance System</h2></a>
                <p>A web-based platform designed to streamline course management, student performance tracking, and real-time communication for academic institutions.  
            .</p>
            </div>
            <div className="project">
                <a href="https://github.com/amuyakkala/Flask-Geometry-Solver" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/amuyakkala/Flask-Geometry-Solver" target="_blank" rel="noreferrer"><h2>Flask Geometry Solver</h2></a>
                <p>A Flask-based REST API for real-time geometric computations, supporting area, perimeter, and distance calculations for various shapes.  
                </p>
            </div>
            <div className="project">
                <a href="https://pxn2799.uta.cloud/home" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://pxn2799.uta.cloud/home" target="_blank" rel="noreferrer"><h2>Smart HealthHub</h2></a>
                <p>Developed a full-stack React web application integrating fitness tracking, nutrition planning, and health monitoring, providing users with a seamless health management experience. </p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>WeManage: Real Estate Asset Management</h2></a>
                <p>Developed a full-stack React web application integrating fitness tracking, nutrition planning, and health monitoring, providing users with a seamless health management experience. </p>
            </div>
            <div className="project">
                <a href="https://xd.adobe.com/view/b65e4d12-3c5b-481c-af2c-b050a1ec3748-e30d/screen/69e8c4cb-c333-405a-b02c-948f6288e7ac/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://xd.adobe.com/view/b65e4d12-3c5b-481c-af2c-b050a1ec3748-e30d/screen/69e8c4cb-c333-405a-b02c-948f6288e7ac/" target="_blank" rel="noreferrer"><h2>Music Player</h2></a>
                <p>Developed a User Interface and User Experience design for Music Player Application.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;