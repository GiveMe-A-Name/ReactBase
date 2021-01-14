import React from "react"
/* 
    在 React 中，
    将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，
    便可实现共享 state。这就是所谓的“状态提升”。
*/
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>
}


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleChange = e => {
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        )
    }
}


class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }
    handleCelsiusChange = temperature => {
        this.setState({
            temperature: temperature,
            scale: 'c'
        })
    }
    handleFahrehehitChange = temperature => {
        this.setState({
            temperature: temperature,
            scale: 'f'
        })
    }

    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
        return (
            <div>
                <TemperatureInput sacle="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput sacle="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrehehitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}
export default Calculator