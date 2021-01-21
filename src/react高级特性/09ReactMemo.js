import React, { Component } from 'react'
// 使用React.memo进行封装Function Componnent 
// 可以使得 某些组件仅在它的 props 发生改变的时候进行重新渲染。
// 当页面React只要有变化，就会把渲染流程走一遍，包括他的内部子组件也会重新走一遍渲染
// 但实际上，有些数据和子组件时没必要渲染的，所以我们就可以使用memo, PureComponent来进行封装
// React.memo传入两个参数, 
/* 
    function MyComponent(props) {
        使用 props 渲染 
    }
    function areEqual(prevProps, nextProps) {  
        经过对比，如果返回True，则代表会重新渲染，
        若返回false会进行拦截，不再进行渲染
    }
    export default React.memo(MyComponent, areEqual);
*/
const Son = React.memo(
    ({ words }) => {
        console.log(`hello son`)
        return (
            <div>
                hello world
                {words?.join(',')}
            </div>
        )
    },
    function (prevProps, nextProps) {
        console.log(prevProps.words, nextProps.words)
        if (prevProps.words?.length === nextProps.words?.length) {
            return false
        } else {
            return true
        }
    }
)
class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            words: ['react1', 'react2']
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const words = this.state.words
        words.push('xiaoming111')
        this.setState({
            words: words
        })
    }
    render() {
        return (
            <div>
                <Son words={this.state.words} />
                <button onClick={this.handleClick}>onClick</button>
                <p>{this.state.words?.join(',')} </p>

            </div>
        )
    }
}
export default Parent