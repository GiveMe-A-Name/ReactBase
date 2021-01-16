import React, { useReducer } from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case 'change_input_value':
            return {
                ...state,
                inputValue: action.value
            }
        case 'add_todo_item':
            const newState = { ...state }
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        case 'delete_todo_item':
            const newState1 = { ...state }
            newState1.list.splice(action.index, 1)
            return newState1
        default:
            return state
    }
}

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, {
        inputValue: 'hello',
        list: ['react', 'readux', 'react-router']
    })
    return (
        <div>
            <input type="text"
                value={state.inputValue}
                onChange={
                    (e) => {
                        dispatch({
                            type: 'change_input_value',
                            value: e.target.value
                        })
                    }
                }
            />
            <button
                onClick={
                    () => dispatch({
                        type: 'add_todo_item',
                    })
                }
            >
                onClick
                </button>
            <ul>
                {
                    state.list.map((item, index) =>
                        <li
                            key={index}
                            onClick={
                                () => dispatch({
                                    type: 'delete_todo_item',
                                    index
                                })
                            }
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default TodoList