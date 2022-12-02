import React from 'react';
import {Link} from "react-router-dom";
import image from "./../../img/projects/01.jpg"

function Index({name}) {
    return (
        <li className="project">
            <Link to='/project'>
                <img src={image} alt="Project img" className="project__img"/>
                <h3 className="project__title">
                    {name}
                </h3>
            </Link>
        </li>
    );
}

export default Index;