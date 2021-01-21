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
    // useReducer接收reducer函数和initState
    // 返回当前state 和 一个dispatch函数。
    // dispatch用来提交action
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