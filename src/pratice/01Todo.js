import React from "react";

function ListInput(props) {
    return (
        <input vlaue={props.msg} onInput={(e) => (props.onInputItem(e))} />
    )
}

class TodoLists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: ['item1', 'item2'],
            msg: ''
        }
    }

    handleInput = e => {
        this.setState({
            msg: e.target.value
        })
    }

    Add = () => {
        this.state.lists.push(this.state.msg)
        this.setState({
            msg: ''
        })
        console.log(this.state.msg)
    }

    render() {
        // 视图部分
        return (
            <div>
                <ListInput value={this.state.msg} onInputItem={this.handleInput} />
                <button onClick={this.Add}>Add</button>
                <ul>
                    {
                        this.state.lists.map((item, index) => (<li key={index}>{item}</li>))
                    }
                </ul>
            </div>
        )
    }
}
export default TodoLists