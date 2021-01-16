import React, { useEffect, useState } from 'react'

// useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。
// 以前，放在componentDidMount里面的代码，现在可以放在useEffect()。

/*
    useEffect(()  =>  {
        // Async Action
    }, [dependencies])
    接受两个参数，第一个参数是一个回调函数，在初始化的时候会执行一遍
    第二个参数是一个依赖项数组，只要依赖项进行变化，回调函数就会重新执行，
    （第二个参数可以省略，这时每次组件渲染时，就会执行回调函数。）
*/



const Person = ({ personId }) => {
    const [loading, setLoading] = useState(true)
    const [person, setPerson] = useState({})

    useEffect(() => {
        const url = 'https://www.fastmock.site/mock/b56c67bbde826270eecf21d2b021332b/test/api/getperson'
        fetch(url).then(
            response => {
                if (response.ok) {
                    return response.json()
                }
            }
        ).then(
            data => {
                console.log(data)
                setPerson(data)
                setLoading(false)
            }
        )
    }, [personId])
    if (loading === true) {
        return <p>Loading</p>
    } else {
        return (
            <div>
                <p>You're viewing: {person.name}</p>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
            </div>
        )
    }
}
export default Person