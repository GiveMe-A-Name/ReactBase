import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    // 默认情况下，它在第一次渲染之后和每次更新之后都会执行。
    // 但也可以设置一个依赖项数组，通过这个依赖项数组来决定useEffect函数执行条件
    useEffect(() => {
        console.log(`useEffect function`)
        document.title = `You clicked ${count} times`
    })
    // useEffect会在组件初始化的时候执行一次，
    // 也可以在依赖性变化的时候自动执行
    // useEffect回调函数,可以用来返回一个函数.这是useEffecT的清除机制
    // 在组件卸载的时候会执行返回函数, 用来执行清除操作
    return (
        <div>
            <p
                onClick={() => setCount(count + 1)}
            >
                You clicked {count} times
            </p>
        </div>
    )
}
export default Counter