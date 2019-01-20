import React from 'react';
import './Checkbox.scss'

const Checkbox = (props) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id="1" className="checkbox__input"/>
            <label for="1" className="checkbox__element"><span className="checkbox__label">{props.children}</span></label>
        </div>
    )
}

export default Checkbox