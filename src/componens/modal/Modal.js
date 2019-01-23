import React from 'react';
import './Modal.scss'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };

        this.handleInput = this.handleInput.bind(this);
    };

    handleInput(e) {
        this.setState({
            value: event.target.value
        }); 
    }

    render() {
        return (
            <div className={`modal ${this.props.show ? "is-active" : ""}`}>
                <div className="modal-background" onClick={() => this.props.handleProjectAddClose()}></div>
                <div className="modal-content">
                    <div className="card">
                        <div className="modal-header">
                            <div className="modal-title">Новый проект</div>
                            <button className="modal-close is-large" onClick={() => this.props.handleProjectAddClose()}></button>
                        </div>
                        <div className="modal-body">
                            <div className="level">
                                <input type="text" className="modal-input input" placeholder="Название Проекта" onChange={(e) =>this.handleInput(e)} value={this.state.value}/>
                                <button className="button is-primary" onClick={() => this.props.handleProjectAddSuccess(this.state.value)}>Создать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Modal
