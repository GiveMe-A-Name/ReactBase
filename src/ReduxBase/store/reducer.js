// readucer 通过该文件来管理store的readucer回调函数
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_AJAX_ACTION
} from './actionTypes'

const defaultState = { // 仓库默认数据
    inputValue: '',
    list: []
}

export default function reducer(state = defaultState, action) {
    // newState通过...展开符来复制一份state
    const newState = {
        ...state,
    }
    // 通过传递过来的action.type
    // 对newState这个复制品进行处理
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value
            break
        case ADD_TODO_ITEM:
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            break
        case DELETE_TODO_ITEM:
            newState.list.splice(action.index, 1)
            break
        case INIT_AJAX_ACTION:
            newState.list = action.data
            break
        default:

    }
    // 最后返回这个newState
    return newState
}