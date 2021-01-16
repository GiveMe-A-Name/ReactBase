import React, { Component } from 'react'
import { connect } from 'react-redux'
class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button
                    onClick={onIncreaseClick}
                >
                    Increase
                </button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick() {
            dispatch({ type: 'increase' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
