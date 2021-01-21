import React, { useState, useEffect } from 'react'
// useState版本
const TodoList = () => {
    // 当setinputValue被调用的时候
    // React 会重新渲染 Example 组件，并把最新的 inputValue 传给它。
    const [inputValue, setinputValue] = useState('hello')
    const [list, setList] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(() => {
        // 异步处理
        const url = 'https://www.fastmock.site/mock/b56c67bbde826270eecf21d2b021332b/test/api/todo_list_data'
        fetch(url).then(
            response => response.json()
        ).then(
            data => {
                setList(data)
                setLoad(false)
            }
        )
    }, [])
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
            {
                (() => {
                    if (load) {
                        return <h2>Loading</h2>
                    }
                    else {
                        return (
                            <ul>
                                {
                                    list.map((item, index) =>
                                        <li
                                            key={index}
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
                        )
                    }
                })()
            }
        </div>
    )
}

export default TodoList 