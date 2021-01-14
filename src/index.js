import React from 'react'
import ReactDOM from 'react-dom'
import { TodoList } from "./ReduxBase/TodoList";
function App(props) {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <h1>Hello App!</h1>
            <TodoList />
        </div>
    )
}


const element = <App />
ReactDOM.render(element, document.getElementById('root'))