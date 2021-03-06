import React from 'react';
import './ProjectsList.scss';
import Project from './Project/Project';

const ProjectsList = (props) => {    
    const projects = props.projects.map(project => {
        return (
            <Project 
                key={project.id} 
                {...project} 
                handleToggleVacancies={(id) => props.handleToggleVacancies(id)}
                handleToggleProject={(project) => props.handleToggleProject(project)}
                handleDelete={(id) => props.handleDelete(id)}
                handleAddVacancy={(id) => props.handleAddVacancy(id)}
                handleDeleteVacancy={(id, vacancyId) => props.handleDeleteVacancy(id, vacancyId)}
                handleToggleVacancy={(vacancy, vacancyId) => props.handleToggleVacancy(vacancy, vacancyId)}/>
        );
    });

    return (
        <div className="level projects">
            {projects}
        </div>
    );
};

export default ProjectsList;