import React, { useRef } from 'react'

const MyRef = () => {
    // const refContainer = useRef(initialValue); 
    // 函数组件内部用来挂载ref的hook函数
    // initialValue是初始化.current的值
    const inputEl = useRef(null)
    const handleInputElColorChange = () => {
        console.log(inputEl.current)
        inputEl.current.style.backgroundColor = 'red'
    }
    return (
        <div>
            <input ref={inputEl} type="text" onFocus={handleInputElColorChange} />
        </div>
    )
}
export default MyRef