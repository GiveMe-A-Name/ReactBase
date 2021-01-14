import React from "react";
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('提交的名字: ' + this.state.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onInput={this.handleChange} />
                <input type="submit" value="submit" />
            </form>
        )
    }
}

class FlavoerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'lime'
        }
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log('你喜欢的风味是: ' + this.state.value)
    }
    componentDidMount() {
        console.log(this.state.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味:
              <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
    }
    handleInputChange = e => {
        const target = e.target
        const name = target.name
        const value = name === 'isGoing' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label>
                    参与:
              <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    来宾人数:
              <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <div>
                    {this.state.isGoing.toString()} -- {this.state.numberOfGuests}
                </div>
            </form>
        )
    }
}

export { FlavoerForm, NameForm, Reservation }