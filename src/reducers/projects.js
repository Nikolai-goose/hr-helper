import * as types from '../actions/types'

const initialState = {
    projects: [],
    loading: false,
    adding: false
};

const projects = (state = initialState, action) => {
    switch (action.type) {
        case types.PROJECTS_ADD_START: 
            return {
                ...state,
                adding: true
            }
        case types.PROJECTS_ADD_CLOSE: 
            return {
                ...state,
                adding: false
            }
        case types.PROJECTS_ADD_SUCCESS: 
            return {
                ...state,
                adding: false
            }
        case types.PROJECTS_FETCH_START:
            return {
                ...state,
                loading: true
            }
        case types.PROJECTS_FETCH_SUCCESS:
            return {
                ...state,
                projects: action.projects.map(project => {
                    if (project.vacancies) {
                        project.vacancies = Object.values(project.vacancies);
                    }
                    return project
                }),
                loading: false,
            }
        case types.PROJECTS_FETCH_FAIL:
            return {
                ...state,
                loading: false
            }
        case types.VACANCY_ADD_START: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = true;
                    };
                    return project;
                })
            }
        case types.PROJECTS_TOGGLE_VACANCIES: 
            return{
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.id) {
                        project.active = !project.active;
                    };
                    return project
                })
            }
        case types.VACANCY_ADD_SUCCESS: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = false;
                        if (project.vacancies) {
                            project.vacancies = project.vacancies.concat(action.vacancy);
                        } else (project.vacancies = [action.vacancy])
                    };
                    return project;
                })
            }
        case types.VACANCY_ADD_FAIL: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = true;
                    };
                    return project;
                })
            }
        case types.VACANCY_DELETE_START: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.vacancies = project.vacancies.map(vacancy => {
                            if (vacancy.id === action.id) vacancy.loading = true 
                            return vacancy
                        });
                    };
                    return project;
                })
            }
        case types.VACANCY_DELETE_SUCCESS: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = false;
                        project.vacancies = project.vacancies.filter(vacancy => (vacancy.id !== action.id))
                    };
                    return project;
                })
            }
        case types.VACANCY_DELETE_FAIL: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = false;
                        project.vacancies = project.vacancies.map(vacancy => {
                            if (vacancy.id === action.id) vacancy.loading = false
                            return vacancy 
                        });
                    };
                    return project;
                })
            }
        case types.VACANCY_TOGGLE_START: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.vacancies = project.vacancies.map(vacancy => {
                            if (vacancy.id === action.id) vacancy.loading = true 
                            return vacancy
                        });
                    };
                    return project;
                })
            }
        case types.VACANCY_TOGGLE_SUCCESS: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = false;
                        project.vacancies = project.vacancies.map(vacancy => {
                            if (vacancy.id === action.id) {
                                vacancy.opened = action.opened;
                                vacancy.loading = false;
                            };
                            return vacancy;
                        });
                    };
                    return project;
                })
            }
        case types.VACANCY_TOGGLE_FAIL: 
            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = false;
                        project.vacancies = project.vacancies.map(vacancy => {
                            if (vacancy.id === action.id) vacancy.loading = false
                            return vacancy 
                        });
                    };
                    return project;
                })
            }
        default: 
            return {
                ...state
            }
    }
};

export default projects;