import * as types from './types';
import axios from '../axios';
import Project from '../componens/ProjectsList/Project/Project';

export const addProject = () => {
    return (dispatch) => {
        let key = Date.now() + Math.random().toString(36).substr(2, 9);
        let project = {
            id: key,
            name: `Проект номер ${Math.floor(Math.random()*100)}`,
            opened: true,
            vacancies: []
        };
        axios.put(`/projects/${key}.json`, project)
            .then(() => {
                dispatch(fetchProjects())
            })  
            .catch(err => {
                console.log(err);
            });    
    };
};

export const deleteProject = (id) => {
    return dispatch => {
        axios.delete(`/projects/${id}.json`)
            .then(() => {
                dispatch(fetchProjects());
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const toggleProject = (project) => {
    return (dispatch) => {
        let opened = project.opened;        
        
        axios.put(`/projects/${project.id}/opened.json`, !opened)
            .then(() => {
                dispatch(fetchProjects())
            })  
            .catch(err => {
                console.log(err);
            });    
    };
};

export const projectsFetchInit = () => {
    return {
        type: types.PROJECTS_FETCH_START,
    };
};

export const projectsFetchSuccess = (projects) => {
    return {
        type: types.PROJECTS_FETCH_SUCCESS,
        projects: projects
    };
};

export const projectsFetchFail = () => {
    return {
        type: types.PROJECTS_FETCH_FAIL,
    };
};

export const fetchProjects = () => {
    return (dispatch) => {
        dispatch(projectsFetchInit());
        axios.get('/projects.json')
            .then( result => {                
                const fetchedProjects = [];
                for (let key in result.data) {
                    fetchedProjects.push({
                        ...result.data[key],
                    })
                }                       
                dispatch(projectsFetchSuccess(fetchedProjects));
            })
            .catch((err) => {
                dispatch(projectsFetchFail())
            });
    };
};

export const addVacancyStart = (projectId) => {
    return {
        type: types.VACANCY_ADD_START,
        projectId: projectId,
    }
};
export const addVacancySuccess = (vacancy, projectId) => {
    return {
        type: types.VACANCY_ADD_SUCCESS,
        projectId: projectId,
        vacancy: vacancy,
    }
};
export const addVacancyFail = (projectId) => {
    return {
        type: types.VACANCY_ADD_FAIL,
        projectId: projectId,
    };
};

export const addVacancy = (projectId) => {
    return (dispatch) => {
        dispatch(addVacancyStart(projectId));
        let key = Date.now() + Math.random().toString(36).substr(2, 9);
        let vacancy = {
            id: key,
            name: `Вакансия номер ${Math.floor(Math.random()*100)}`,
            opened: true,
        };
        axios.put(`/projects/${projectId}/vacancies/${key}.json`, vacancy)
            .then((res) => {
                dispatch(addVacancySuccess(res.data, projectId))   ;             
            }).catch(err => {
                console.log(err)
                dispatch(addVacancyFail(projectId));
            });
    };
};