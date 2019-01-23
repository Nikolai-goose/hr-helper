import React from 'react';
import './Vacancy.scss'

const Vacancy = (props) => {
    let openedVacancy = (
        <div className="vacancy__text">
            <span className="icon-search icon"></span>Вакансия открыта, идет подбор кандидатов
        </div>
    );
    let closedVacancy = (
        <div className="vacancy__text">
            <span className="icon-check icon"></span>Вакансия закрыта, сотрудник нанят
        </div>
    );

    return (
        <div className="vacancy" key={props.id}>
            <div className="level">
                <div className="vacancy__title">{props.name}</div>
            </div>
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        {props.opened ? openedVacancy : closedVacancy}
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <button 
                            className={`button is-borderless is-inverted is-gray ${props.opened ? "" : "is-primary"}`}
                            onClick={() => props.handleToggleVacancy(props, props.projectId)}>{props.opened ? "Закрыть" : "Открыть"} вакансию</button>
                    </div>
                    <div className="level-item">
                        <button 
                            className="button is-borderless is-inverted is-gray"
                            onClick={() => props.handleDeleteVacancy(props.id, props.projectId)}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vacancy;
