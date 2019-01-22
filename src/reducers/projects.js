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
                projects: action.projects,
                loading: false,
            }
        case types.PROJECTS_FETCH_FAIL:
            return {
                ...state,
                loading: false
            }
        default: 
            return {
                ...state
            }
    }
};

export default projects;