import React from "react";
import store from "./store/index.js";
import {
    getChangeInputAction,
    getAddTodoAction,
    getDeleteTodoAction,
    getTodoList
} from './store/actionCreators'
import TodoListUI from './TodoListUI'
class TodoList extends React.Component {
    constructor(props) {
        super(props)
        // 通过store的getState可以获得仓库内部的数据
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.unsubscribe = store.subscribe(this.handleStoreChange)
        // 当调用unsubscribe就会停止订阅
    }

    // handleStoreChange 订阅立即触发函数
    handleStoreChange() {
        this.setState(store.getState())
    }

    // handleInputChange onChange事件的回调函数
    handleInputChange(e) {
        store.dispatch(getChangeInputAction(e.target.value))
    }

    // handleBtnClick Submit按钮点击添加Todo事件
    handleBtnClick() {
        if (!this.state.inputValue) {
            return
        }
        store.dispatch(getAddTodoAction())
    }

    // handleItemDelete 点击item,触发事件删除掉Item
    handleItemDelete(index) {
        store.dispatch(getDeleteTodoAction(index))
    }

    // componentDidMount 挂载后生命周期函数
    componentDidMount() {
        // 进行ajax请求
        store.dispatch(getTodoList())
    }

    render() {
        return <TodoListUI
            {...{
                inputValue: this.state.inputValue,
                list: this.state.list,
                handleInputChange: this.handleInputChange,
                handleBtnClick: this.handleBtnClick,
                handleItemDelete: this.handleItemDelete
            }}
        />
    }
}

export { TodoList }