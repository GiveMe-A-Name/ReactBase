import React, { useState } from 'react'

function Button() {
    const [buttonText, setButtonText] = useState('Click me')
    function handleClick() {
        return setButtonText('change click')
    }
    return <button onClick={handleClick}>
        {buttonText}
    </button>
}
export default Button