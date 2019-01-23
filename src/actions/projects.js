import * as types from './types';
import axios from '../axios';

export const addProjectStart = () => {
    return {
        type: types.PROJECTS_ADD_START
    };
};

export const addProjectClose = () => {
    return {
        type: types.PROJECTS_ADD_CLOSE
    };
};

export const addProjectSuccess = () => {
    return {
        type: types.PROJECTS_ADD_CLOSE
    };
};

export const addProject = (name) => {
    return (dispatch) => {
        dispatch(addProjectSuccess());
        let key = Date.now() + Math.random().toString(36).substr(2, 9);
        let project = {
            id: key,
            name: name,
            opened: true,
            active: false,
            loading: false,
        };
        axios.put(`/projects/${key}.json`, project)
            .then(() => {
                dispatch(addProjectSuccess())
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

export const toggleVacancies = (id) => {
    return {
        type: types.PROJECTS_TOGGLE_VACANCIES,
        id: id
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
            projectId: projectId
        };
        axios.put(`/projects/${projectId}/vacancies/${key}.json`, vacancy)
            .then((res) => {
                dispatch(addVacancySuccess(res.data, projectId))   ;             
            }).catch(err => {
                dispatch(addVacancyFail(projectId));
            });
    };
};

export const deleteVacancyStart = (id, projectId) => {
    return {
        type: types.VACANCY_DELETE_START,
        id: id,
        projectId: projectId
    };
};

export const deleteVacancySuccess = (id, projectId) => {
    return {
        type: types.VACANCY_DELETE_SUCCESS,
        id: id,
        projectId: projectId
    };
};

export const deleteVacancyFail = (id, projectId) => {
    return {
        type: types.VACANCY_DELETE_FAIL,
        id: id,
        projectId: projectId
    };
};

export const deleteVacancy = (id, projectId) => {
    return (dispatch) => {
        dispatch(deleteVacancyStart(id, projectId));
        axios.delete(`/projects/${projectId}/vacancies/${id}.json`)
            .then(() => {
                dispatch(deleteVacancySuccess(id, projectId));
            })
            .catch((err) => {
                dispatch(deleteVacancyFail(id, projectId))
            });
    };
};

export const toggleVacancyStart = (id, projectId) => {
    return {
        type: types.VACANCY_TOGGLE_START,
        id: id,
        projectId: projectId
    };
};

export const toggleVacancySuccess = (id, opened, projectId) => {
    return {
        type: types.VACANCY_TOGGLE_SUCCESS,
        id: id,
        opened: opened,
        projectId: projectId
    };
};

export const toggleVacancyFail = (id, projectId) => {
    return {
        type: types.VACANCY_TOGGLE_FAIL,
        id: id,
        projectId: projectId
    };
};

export const toggleVacancy = (vacancy, projectId) => {
    return (dispatch) => {
        let id = vacancy.id;
        let opened = vacancy.opened
        dispatch(toggleVacancyStart(id, projectId));
        axios.put(`/projects/${projectId}/vacancies/${id}/opened.json`, !opened)
            .then((res) => {
                dispatch(toggleVacancySuccess(id, res.data, projectId));
            })
            .catch((err) => {
                console.log(err);
                
                dispatch(toggleVacancyFail(id, projectId))
            });
    };
};
