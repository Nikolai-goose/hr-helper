import * as types from '../actions/types'

const initialState = {
    projects: [],
    loading: false
};

const projects = (state = initialState, action) => {
    switch (action.type) {
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
                state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = true;
                    };
                    return project;
                })
            }
        case types.VACANCY_ADD_SUCCESS: 
            return {
                state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = false;
                        if (project.vacancies) {
                            console.log(action.vacancy);
                            project.vacancies = project.vacancies.concat(action.vacancy);
                        } else (project.vacancies = [action.vacancy])
                    };
                    return project;
                })
            }
        case types.VACANCY_ADD_FAIL: 
            return {
                state,
                projects: state.projects.map(project => {
                    if (project.id == action.projectId) {
                        project.loading = true;
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