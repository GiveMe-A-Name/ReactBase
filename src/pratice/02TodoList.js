import { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            msg: ''
        }
    }
    // 不建议使用箭头函数
    // 这是由于在函数回调的时候，并不是内部是以什么形式对你的箭头函数进行回调
    handleInput(e) {
        this.setState({
            msg: e.target.value
        })
    }

    handleItemDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    handleItemAdd() {
        this.setState((state) => {
            return {
                list: [...state.list, state.msg],
                msg: ''
            }
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.msg}
                    onInput={this.handleInput.bind(this)}
                />
                <button onClick={this.handleItemAdd.bind(this)} >add</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export { TodoList }