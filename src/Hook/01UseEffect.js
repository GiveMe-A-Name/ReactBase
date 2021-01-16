import React, { useEffect } from 'react'
function Welcome(props) {
    useEffect(() => {
        document.title = `hello ${props.name}`
    }, [props.name])
    return <h1>Hello, {props.name}</h1>
}

export default Welcome