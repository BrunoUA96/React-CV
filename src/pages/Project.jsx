import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Project() {
    // Get Project id
    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);

    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get('https://brunoua96.github.io/Data/projects.json').then(res => {
            setProject(res.data.projects[id]);
            console.log(project)
        }).then(() => setIsLoading(false));
    }, [isLoading]);

    return (
        <>
            {!isLoading && <main className="section">
                <div className="container">
                    <div className="project-details">
                        <h1 className="title-1">{project.name}</h1>
                        <img src="./img/projects/02-big.jpg" alt="" className="project-details__cover"/>

                        <div className="project-details__desc">
                            <p>Skills: {project.technologies.map((item, i) => (
                                <span key={i}>{item} </span>
                            ))}</p>
                        </div>

                        <Link href="#!" className="btn-outline">
                            <img src="./img/icons/gitHub-black.svg" alt=""/>
                            GitHub repo
                        </Link>
                    </div>
                </div>
            </main>}
        </>
    );
}

export default Project;