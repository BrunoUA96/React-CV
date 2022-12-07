import ProjectCard from "../components/ProjectCard";
import axios from 'axios'
import {useEffect, useState} from "react";
import Skeleton from "../components/ProjectCard/Skeleton";

function Projects() {
    // const [isLoading, setIsLoading] = useState(true);
    const [projectList, setProjectList] = useState( []);

    useEffect(() => {
        // setIsLoading(true);
        axios.get('https://my-json-server.typicode.com/BrunoUA96/React-CV/projects').then(res => {
            setProjectList(res.data);
            // setIsLoading(false);
        });
    }, []);

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projectList.map((project, index) => (
                        <ProjectCard {...project} key={index}/>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Projects;
