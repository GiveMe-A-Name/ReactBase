import React, { Component } from 'react'

class Parent extends Component {

    render() {
        return (
            <div>
                <Son onClick={
                    () => {
                        console.log(`Click`)
                    }
                } style={{
                    color: 'red'
                }} />
            </div>
        )
    }
}
class Son extends Component {
    componentDidMount() {
        for (let key in this.props) {
            console.log(key)
        }
    }
    render() {
        return (
            <div>
                <h1 onClick={this.props.onClick} >Son</h1>
                <p style={this.props.style}> hello Son p</p>
            </div>
        )
    }
}
export default Parent