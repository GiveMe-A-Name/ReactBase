import React, { useState } from 'react'

function Button() {
    const [buttonText, setButtonText] = useState('Click me')
    function handleClick() {
        return setButtonText('asldkjfsdlakf')
    }
    return <button onClick={handleClick}>
        {buttonText}
    </button>
}
export default Button