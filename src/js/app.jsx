import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class App extends Component {
    render() {
        return (
            <h1>Hello there!</h1>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)