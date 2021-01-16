const defaultState = {
    inputValue: '',
    list: []
}

const reducer = (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'change_input_value':
            newState.inputValue = action.value
            break
        case 'add_todo_item':
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            break
        case 'delete_todo_item':
            newState.list.splice(action.index, 1)
            break
        default:
    }
    return newState
}

export default reducer