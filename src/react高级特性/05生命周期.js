import React from "react";

class MyComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            msg: 'hello world'
        }
    }


    // componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。
    componentDidMount() {
        console.log(`componentDidMount`)
    }
    // componentDidUpdate() 会在更新后会被立即调用。
    // (新的props, 新的state)
    componentDidUpdate(newProps, newState) {
        console.log(`数据更新之后被立即执行,componentDidUpdate${newState.msg}`)
    }

    // componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作
    // 不应该的操作是调用 setState()，这是因为所有的组件都被卸载的，也就不存在state更新一说
    componentWillUnmount() {
        console.log(`componentWillUnmount() 会在组件卸载及销毁之前直接调用。`)
    }

    render() {
        console.log(`render`)
        return (
            <div onClick={() => { this.setState({ msg: 'hello update' }) }}>MyComponent {this.state.msg} </div>
        )
    }
}

export { MyComponent }