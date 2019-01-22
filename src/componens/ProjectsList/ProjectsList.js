import React from 'react';
import './ProjectsList.scss';
import Project from './Project/Project';

const ProjectsList = (props) => {    
    const projects = props.projects.map(project => {
        return (
            <Project 
                key={project.id} 
                {...project} 
                handleToggleProject={(project) => props.handleToggleProject(project)}
                handleDelete={(id) => props.handleDelete(id)}
                handleAddVacancy={(id) => props.handleAddVacancy(id)}
                handleDeleteVacancy={(id, vacancyId) => props.handleDeleteVacancy(id, vacancyId)}/>
        );
    });

    return (
        <div className="level projects">
            {projects}
        </div>
    );
};

export default ProjectsList;