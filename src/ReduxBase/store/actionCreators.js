// actionCreators 返回创建action对象的函数，通过该文件进行集中管理action对象
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

export {
    getChangeInputAction,
    getAddTodoAction,
    getDeleteTodoAction,
    initAjaxAction
}