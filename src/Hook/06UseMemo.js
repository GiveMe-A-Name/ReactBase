import React, { useMemo, useState } from 'react'

const MyMemo = () => {
    const [count, setCount] = useState(0)
    // 通过注入依赖，若依赖改变的，使用useMemo的回调函数就会重新计算
    // 这个回调函数必须返回值，通过值来对视图进行渲染。或者数据的使用
    const doubleCount = useMemo(() => {
        return (
            (() => {
                const tempContainer = []
                for (let i = 0; i < count; i++) {
                    tempContainer.push(<p>我是第{i}个</p>)
                }
                return tempContainer
            })()
        )
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                CLick
            </button>
            {count} -- {doubleCount}
        </div>
    )
}
export default MyMemo