import React from 'react';
import Vacancy from './Vacancy';
import './Project.scss'

const Project = (props) =>{
    function num2str(n, text_forms) {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }

    let vacancies, vacanciesCount;
    if (props.vacancies) {      
        vacancies = props.vacancies.map(vacancy => {
            return (
                <Vacancy 
                    key={vacancy.id} 
                    {...vacancy} 
                    handleDeleteVacancy={(id, vacancyId) => props.handleDeleteVacancy(id, vacancyId)}
                    handleToggleVacancy={(vacancy, vacancyId) => props.handleToggleVacancy(vacancy, vacancyId)}/>
            );        
        });
        vacanciesCount = `${props.vacancies.length} ${num2str(props.vacancies.length, ['вакансия', 'вакансии', 'вакансий'])}`;
    } else vacanciesCount = "Нет вакансий";

    return (
        <div className={`box project ${props.opened ? "" : "is-closed"}${props.active ? "is-active" : ""}`} >
            <div className="project__header">
                <div className="level">
                    <div className="project__title">{props.name}</div>
                </div>
                <div className="level level-controls">
                    <div className="level-left">
                        <div className="level-item">
                            <button 
                            className={`button is-borderless is-inverted ${props.opened ? "is-dark" : "is-gray"}`}
                            onClick={() => props.handleToggleVacancies(props.id)}>{vacanciesCount}
                            </button>
                        </div>
                        <div className="level-item">
                            {props.opened ? <button className="button is-primary is-borderless is-inverted" onClick={() => props.handleAddVacancy(props.id)}>Добавить вакансию</button> : <div className="project__text is-size-6"><span className="icon-check icon"></span>Проект закрыт, Сотрудники наняты</div>}
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <button 
                                className={`button is-borderless is-inverted is-gray ${props.opened ? "" : "is-primary"}`}
                                onClick={() => props.handleToggleProject(props)}>
                                {props.opened ? "Закрыть" : "Открыть"} проект
                            </button>
                        </div>
                        <div className="level-item">
                            <button 
                                className="button is-borderless is-inverted is-gray" 
                                onClick={() => props.handleDelete(props.id)}>
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vacancies">
                {vacancies}
            </div>
        </div>
    );
};

export default Project;
