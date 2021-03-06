import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const Controls = (props) => {
    return (
        <div className="level">
            <div className="level-left">
                <div className="level-item">
                    <input type="text" className="input"/>
                </div>
                <div className="level-item">
                    <Checkbox>Только открытые</Checkbox>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <button className="button is-primary" onClick={props.onAddProject}>Добавить проект</button>
                </div>
            </div>
        </div>
    )
}
export default Controls
