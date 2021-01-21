import React, { Component, PureComponent } from 'react'

// PureComponent的组件，
// 只有在内部Props或者state更改之后才会进行重新渲染。


class Son extends PureComponent {
    render() {
        console.log('render son')
        return (
            <div>
                Son
                {this.props.name}
            </div>
        )
    }
}
// 但这会造出一个BUG
// 当传入的是props数据是数组 对象这种引用类型变量，数据发生变化，引用地址不会改变
// 这也就意味着PureComponennt组件认为内部props并没有更改,这会导致不会引发重新渲染
class SonAnother extends PureComponent {
    render() {
        console.log('render SonAnother')
        return (
            <div>
                {this.props.words?.join(',')}
            </div>
        )
    }
}

class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'xiaoming',
            words: ['xiaoming']
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
            <div onClick={this.handleClick}>
                <Son name='xqx' />
                <p>{this.state.name}</p>
                <SonAnother words={this.state.words} />
                <p>{this.state.words}</p>
            </div>
        )
    }
}

export default Parent