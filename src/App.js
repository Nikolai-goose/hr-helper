import React from 'react';
import { connect } from 'react-redux';
import Controls from './componens/Controls/Controls';
import * as actions from './actions/projects' 
import ProjectsList from './componens/ProjectsList/ProjectsList';

class App extends React.Component {
    componentDidMount() {
        this.props.onProjectsFetch();
    };

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="level">
                        <div className="title is-1">Список проектов</div>
                    </div>
                    <Controls onAddProject={this.props.onProjectAdd}/>
                    <ProjectsList 
                        projects={this.props.projects} 
                        handleToggleProject={(project) => this.props.onToggleProject(project)}
                        handleDelete={(id) => this.props.onProjectDelete(id)}/>
                </div>
            </div>
        );
    };
};

const MapStateToProps = state => {
    return {
        projects: state.projects.projects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onProjectAdd: () => dispatch(actions.addProject()),
        onProjectDelete: (id) => dispatch(actions.deleteProject(id)),
        onToggleProject: (project) => dispatch(actions.toggleProject(project)),
        onProjectsFetch: () => dispatch(actions.fetchProjects()),
    };
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
