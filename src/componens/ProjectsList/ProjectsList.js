import React from 'react';
import './ProjectsList.scss';
import Project from './Project/Project';

const ProjectsList = (props) => {    
    const projects = props.projects.map(project => {
        return (
            <Project key={project.id} {...project} handleDelete={(id) => props.handleDelete(id)}/>
        );
    });

    return (
        <div className="level projects">
            {projects}
        </div>
    );
};

export default ProjectsList;