import React from "react";
import ReactDOM from 'react-dom'
import MyRef from './Hook/07UseRef'
const App = (
    <div>
        <h1>Hello App!</h1>
        <MyRef />
    </div>
)
ReactDOM.render(App, document.getElementById('root'))
