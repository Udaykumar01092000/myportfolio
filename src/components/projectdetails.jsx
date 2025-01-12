import React, { useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import "../css/projectdetails.css";
import projectsData from "../components/projectsdata.json";
import ProjectNavbar from "./projectnav";
import Footer from "./footer";

const importImage = (imageName)=>{
    return require(`../assets/gallery/${imageName}`)
}

const ProjectDetails = () => {
    const { id } = useParams(); // Retrieve the project ID from the URL
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Find the project by ID
        const foundProject = projectsData.find((proj) => proj.id === parseInt(id));
        setProject(foundProject);
    }, [id]);

    if (!project) {
        return <p>Loading project details...</p>; // Display a loading or fallback message
    }

    return (
        <>
            <div className="project-section">
                {/* Project Header with name */}
                <div className="project-header">
                    <ProjectNavbar projectName={project.name} />
                </div>
                
                {/* Image Slider (Bootstrap Carousel) */}
                <div className="row mt-5 m-3">
                    <div className="col-lg-8">
                        <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000"  data-bs-wrap="true">
                            <div className="carousel-inner">
                                {project.images.map((image, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={importImage(image)}
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#projectCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    {/* Right-side content */}
                    <div className="col-lg-4">
                        <div className="portfolio-info">
                            <h3>Project Information</h3>
                            <ul>
                                <li><strong>Category:</strong> {project.category}</li>
                                <li><strong>Project:</strong> {project.name}</li>
                                <li className="projectlink"><strong>Project URL:</strong> <Link to = {project.projectURL} target="_blank" rel="noopener noreferrer">{project.projectURL}</Link></li>
                            </ul>
                        </div>
                        <div className="portfolio-description mt-3 mb-3">
                            <h3 className = "descriptionhead">Overview</h3>
                            <p dangerouslySetInnerHTML={{ __html: project.overview }}></p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-description">
                    <p>{project.overview2}</p>
                </div>
                {/* Key Contributions */}
                <div className="project-contributions">
                    <h2 className="contributionshead">Key Contributions:</h2>
                    <ul>
                        {project.keyContributions.map((contribution, index) => (
                            <li className="p-2" key={index}><b>{contribution.heading} : </b>{contribution.description}</li>
                        ))}
                    </ul>
                </div>
                <div className="project-contributions">
                    <h2 className="contributionshead">Technologies Utilized:</h2>
                    <ul>
                        {project.TechnologiesUtilized.map((technology, index) => (
                            <li className="p-2" key={index}><b>{technology.heading} : </b>{technology.description}</li>
                        ))}
                    </ul>
                </div>
            </div> 
            <Footer/>
        </>
    );
};

export default ProjectDetails;

