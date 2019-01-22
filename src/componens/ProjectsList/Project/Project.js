import React from 'react';
import Vacancy from './Vacancy';

class ProjectHeader extends React.Component {
    handleDelete() {
        this.props.onProjectDelete(this.props.id)
    };

    render () {
        let vacancies;
        if (this.props.vacancies) {
            vacancies = this.props.vacancies.map(vacancy => {
                return (
                    <Vacancy {...vacancy} key={vacancy.id} />
                );        
            });
        };

        return (
            <div className="box project">
                <div className="project__header">
                    <div className="level">
                        <div className="project__title">{this.props.name}</div>
                    </div>
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item"></div>
                            <div className="level-item">
                                <button className="button is-primary is-borderless is-bold">Добавить вакансию</button>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button className="button is-borderless is-bold">Открыть проект</button>
                            </div>
                            <div className="level-item">
                                <button className="button is-borderless is-bold" onClick={() => this.props.handleDelete(this.props.id)}>Удалить</button>
                            </div>
                        </div>
                    </div>
                </div>
                {vacancies}
            </div>
        );
    };
};

export default ProjectHeader;
