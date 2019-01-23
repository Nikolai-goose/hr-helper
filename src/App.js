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
                        <div className="title title-main">Список проектов</div>
                    </div>
                    <Controls onAddProject={this.props.onProjectAdd}/>
                    <ProjectsList 
                        projects={this.props.projects} 
                        handleToggleVacancies={(id) => this.props.onToggleVacancies(id)}
                        handleToggleProject={(project) => this.props.onToggleProject(project)}
                        handleDelete={(id) => this.props.onProjectDelete(id)}
                        handleAddVacancy={(id) => this.props.onAddVacancy(id)}
                        handleDeleteVacancy={(id, vacancyId) => this.props.onDeleteVacancy(id, vacancyId)}
                        handleToggleVacancy={(vacancy, vacancyId) => this.props.onToggleVacancy(vacancy, vacancyId)}
                        />
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
        onToggleVacancies: (id) => dispatch(actions.toggleVacancies(id)),
        onProjectsFetch: () => dispatch(actions.fetchProjects()),
        onAddVacancy: (id) => dispatch(actions.addVacancy(id)),
        onDeleteVacancy: (id, projectId) => dispatch(actions.deleteVacancy(id, projectId)),
        onToggleVacancy: (vacancy, projectId) => dispatch(actions.toggleVacancy(vacancy, projectId)),
    };
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
