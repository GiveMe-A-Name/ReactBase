import React from 'react'
import { connect } from 'react-redux'
const TodoList = (props) => {
    const { inputValue,
        handleBtnClick,
        handleDeleteItem,
        handleInputChange,
        list
    } = props

    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleBtnClick}>Submit</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li
                            key={index}
                            onClick={() => handleDeleteItem(index)}
                        >
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

// ownProps代表容器组件的props对象
const mapStateToProps = (state, ownProps) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInputChange(e) {
            dispatch({
                type: 'change_input_value',
                value: e.target.value
            })
        },
        handleBtnClick() {
            dispatch({
                type: 'add_todo_item'
            })
        },
        handleDeleteItem(index) {
            dispatch({
                type: 'delete_todo_item',
                index
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)