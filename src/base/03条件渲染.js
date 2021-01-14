import React from "react";

/*
    React 中的条件渲染和 JavaScript 中的一样，
    使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，
    然后让 React 根据它们来更新 UI。
*/


// 1. 使用if判断进行返回的是什么
function Greeting(props) {
    const flag = props.flag
    if (flag) {
        return <div> this flag is True </div>
    } else {
        return <div> this flag is flag </div>
    }
}

// 在{}内部需要的是JS的表达式，而不能是JS语句
class IfShowIt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handClick = () => {
            this.setState(state => ({
                show: !state.show
            }))
        }
    }
    render() {
        return (
            <div>
                {/* 只能放入表达式的值，而不能是特定的语句 */}
                {
                    ((show) => {
                        if (show) {
                            return (
                                <h1> hello show it </h1>
                            )
                        } else {
                            return null
                        }
                    })(this.state.show)
                }
                <button onClick={this.handClick}>show/hidden</button>
            </div>
        )
    }
}

// 2.与运算符 &&
function Mailbox(props) {
    const messages = props.messages
    return (
        <div>
            <h1>Hello Mailbox</h1>
            {
                messages.length &&
                <ul>
                    {/* 
                        JSX中，{}中是可以任意嵌套{}的，
                        但要求{}内部必须是表达式
                    */}
                    {
                        messages.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

// 3. 三目运算符，（在JS中三目运算符也是表达式，所以可以使用）
function GreetingAnthoer(props) {
    return (
        <div>
            {props.flag ? <h1>Yes</h1> : <h2>No</h2>}
        </div>
    )
}

export { Greeting, IfShowIt, Mailbox, GreetingAnthoer }