import React from 'react';
import ProjectCard from "../components/ProjectCard";
import {ProjectList} from "../helpers/MyProjects"

function Projects() {

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {ProjectList.map((project) => {
                        return <ProjectCard {...project}/>
                    })}

                </ul>
            </div>
        </main>
    );
}

export default Projects;
