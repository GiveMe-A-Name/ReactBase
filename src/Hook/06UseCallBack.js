import React, { useState, useCallback } from 'react'
// useCallback => Hook版的memo
// useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
// useCallback是用来缓存函数的，当依赖改变的时候，会返回一个新的函数，否则不会返回使用之前缓存的函数

const MyCallBack = () => {
    const [count, setCount] = useState(0)
    const handleChange = useCallback(() => {
        console.log(`count，发生了变化。变化成了${count}`)
    }, [count])
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
                handleChange()
            }}>CLick</button>
            <p>{count}</p>
        </div>
    )
}
export default MyCallBack

