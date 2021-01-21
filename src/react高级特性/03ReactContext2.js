import React, { Component } from 'react'

const MyContext = React.createContext()

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    handleClick = () => {
        console.log(`Click`)
        this.setState((state) => ({
            count: state.count + 1
        }))
    }
    render() {
        return (
            <div>
                <h1>hello Provider</h1>
                <MyContext.Provider value={this.state.count}>
                    <Son />
                </MyContext.Provider>
            </div>
        )
    }
}
class Son extends Component {
    render() {
        return (
            <div>
                <GrandSon />
                <GrandSonAnother />
            </div>
        )
    }
}
class GrandSon extends Component {
    render() {
        return (
            <div>
                <h1>GrandSon</h1>
                {/* 
                    通过MyContext这个容器的Consumer进行接收
                    内部必须是一个{ } 函数执行式
                */}
                <MyContext.Consumer>
                    {
                        // 函数的唯一参数就是 context.Provider提供的值
                        (context) => {
                            return <h2>{context}</h2>
                        }
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
class GrandSonAnother extends Component {
    static contextType = MyContext
    render() {
        const context = this.context
        return (
            <div>
                {context}
            </div>
        )
    }
}
export default Parent