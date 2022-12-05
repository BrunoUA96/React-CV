import ProjectCard from "../components/ProjectCard";
import axios from 'axios'
import {useEffect, useState} from "react";
import Skeleton from "../components/ProjectCard/Skeleton";

function Projects() {
    const [isLoading, setIsLoading] = useState(true);
    const [projectList, setProjectList] = useState(isLoading ? [...new Array(6)] : []);

    useEffect(() => {
        axios.get('https://brunoua96.github.io/Data/projects.json').then(res => {
            setProjectList(res.data.projects);
            setIsLoading(false)
        });
    }, []);

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projectList.map((project, index) => (
                        isLoading ?
                            <Skeleton key={index}/>
                            : <ProjectCard {...project} key={index}/>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Projects;
