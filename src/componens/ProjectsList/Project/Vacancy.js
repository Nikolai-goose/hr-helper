import React from 'react';

const Vacancy = (props) => {
    return (
        <div className="vacancy" key={props.id}>
            <div className="level">
                <div className="vacancy__title">{props.name}</div>
            </div>
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        hi
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <button className="button is-borderless is-bold">Открыть вакансию</button>
                    </div>
                    <div className="level-item">
                        <button className="button is-borderless is-bold">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vacancy;
