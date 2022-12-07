import React from 'react';
import {Link} from "react-router-dom";

function Index({id, name, img}) {
    return (
        <li className="project">
            <Link to={`/project/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/img/projects/borzoidesign.png`} alt="Project img" className="project__img"/>
                <h3 className="project__title">
                    {name}
                </h3>
            </Link>
        </li>
    );
}

export default Index;