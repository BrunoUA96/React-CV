import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Project() {
    // Get Project id
    const {id} = useParams();

    // const [isLoading, setIsLoading] = useState(true);

    const [project, setProject] = useState({});

    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/BrunoUA96/React-CV/projects/${id}`).then(res => {
            setProject(res.data);
            console.log(res.data.technologies)
        });
    }, []);

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.name}</h1>
                    <h3 className="title-3">{project.desc}</h3>
                    <img src={project.img} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills:
                            {
                                project.technologies &&
                                project.technologies.map((item, i) => (
                                    <span key={i}>{item.name} </span>
                                ))
                            }
                        </p>
                    </div>

                    <Link href="#!" className="btn-outline">
                        <img src="./img/icons/gitHub-black.svg" alt=""/>
                        GitHub repo
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Project;