import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import "../css/projectnav.css";

const ProjectNavbar = ({projectName}) => {
    
    return (
        <>
        <Navbar/>
        <nav className="project-navbar">
            <h1 className="logo">
                {projectName ? `${projectName}` : 'Project Details'}
            </h1>
            <ul className="nav-links pt-3">
                <li className="home"><Link to="/">Home</Link></li>
                <li className="projectname">{projectName}</li>
            </ul>
        </nav>
        </>
    );
};

export default ProjectNavbar;
