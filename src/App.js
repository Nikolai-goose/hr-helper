import React from 'react';
import './App.scss'
import Controls from './componens/Controls/Controls';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="level">
                        <div className="title is-1">Список проектов</div>
                    </div>
                    <Controls />
                </div>
            </div>
        )
    }
}
export default App
