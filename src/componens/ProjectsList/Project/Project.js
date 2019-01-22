import React from 'react';
import Vacancy from './Vacancy';

const Project = (props) =>{
    let vacancies;
    if (props.vacancies) {
        vacancies = props.vacancies.map(vacancy => {
            return (
                <Vacancy {...vacancy} key={vacancy.id} />
            );        
        });
    };

    return (
        <div className="box project">
            <div className="project__header">
                <div className="level">
                    <div className="project__title">{props.name}</div>
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
                            <button 
                                className={`button is-borderless is-bold ${props.opened ? "" : "is-primary"}`}
                                onClick={() => props.handleToggleProject(props)}>
                                {props.opened ? "Закрыть" : "Открыть"} проект
                            </button>
                        </div>
                        <div className="level-item">
                            <button 
                                className="button is-borderless is-bold" 
                                onClick={() => props.handleDelete(props.id)}>
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {vacancies}
        </div>
    );
};

export default Project;
