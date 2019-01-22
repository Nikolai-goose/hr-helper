import { combineReducers } from 'redux';
import projects from './projects';

const rootReducer = combineReducers({
    projects: projects
});

export default rootReducer;