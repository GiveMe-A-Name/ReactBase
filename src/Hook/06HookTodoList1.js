import React, { useState } from 'react'
// useState版本
const TodoList = () => {
    // 当setinputValue被调用的时候
    // React 会重新渲染 Example 组件，并把最新的 inputValue 传给它。
    const [inputValue, setinputValue] = useState('hello')
    const [list, setList] = useState(['react', 'readux', 'react-router'])
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setinputValue(e.target.value)}
            />
            <button
                onClick={
                    () => {
                        setList([...list, inputValue])
                        setinputValue('')
                    }
                }
            >
                Add
            </button>
            <ul>
                {
                    list.map((item, index) =>
                        <li
                            key={item}
                            onClick={
                                () => {
                                    const listcopy = [...list]
                                    listcopy.splice(index, 1)
                                    setList(listcopy)
                                }
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