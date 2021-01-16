import React, { useReducer } from 'react'

// Reducer 函数的形式是(state, action) => newState
// useReducer 它接受 Reducer 函数和状态的初始值作为参数，
// 返回一个数组，数组第一个成员是当前的状态，第二个成员是发送action的dispatch函数
const myReducer = (state, action) => {
    switch (action.type) {
        case 'countUp':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(myReducer, { count: 0 })

    return (
        <div>
            <button onClick={() => dispatch({ type: 'countUp' })}>onClick</button>
            <p>
                {state.count}
            </p>
        </div>
    )
}
export default Counter