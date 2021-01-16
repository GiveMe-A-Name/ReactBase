// actionCreators 返回创建action对象的函数，通过该文件进行集中管理action对象
import axios from 'axios'
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_AJAX_ACTION
} from './actionTypes'


const getChangeInputAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
const getAddTodoAction = () => ({
    type: ADD_TODO_ITEM
})
const getDeleteTodoAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
const initAjaxAction = (data) => ({
    type: INIT_AJAX_ACTION,
    data
})

const getTodoList = () => {
    // 使用redux-thunk中间件，对store.dispatch函数进行处理
    // 在这一步进行ajax异步请求
    // 通过thunk的处理，action函数可以接受两个参数,dispatch()和getState
    return (dispatch, getState) => {
        const url = 'https://www.fastmock.site/mock/b56c67bbde826270eecf21d2b021332b/test/api/todo_list_data'
        axios.get(url).then(
            response => {
                console.log(response.data)
                dispatch(initAjaxAction(response.data))
            }
        )
    }
}

export {
    getChangeInputAction,
    getAddTodoAction,
    getDeleteTodoAction,
    initAjaxAction,
    getTodoList
}