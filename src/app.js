import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello React!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));