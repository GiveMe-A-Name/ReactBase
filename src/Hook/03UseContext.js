import React, { useContext } from 'react'
// useContext 接受一个AppContext对象，解析出它当前包含的值
// React.createContext('default Value')
const MyContext = React.createContext({})
const Navbar = () => {
    // useContext()钩子函数用来引入 Context 对象，从中获取username属性。 
    const { username } = useContext(MyContext)
    return (
        <div>
            <p>AwesomeSite</p>
            <p>{username}</p>
        </div>
    )
}

const Messages = () => {
    // 会返回一个context对象
    // 这里使用对象解构，把username解构出来
    const { username } = useContext(MyContext)
    return (
        <div>
            <h1>Messages</h1>
            <p>1 message for {username}</p>
            <p >useContext is awesome!</p>
        </div>
    )
}

const MyContextApp = () => {
    return (
        // MyContext.Provider提供一个Context对象，这个对象可以被子组件共享
        <MyContext.Provider value={{
            username: 'superawesome'
        }}>
            <div className="App">
                <Navbar />
                <Messages />
            </div>
        </MyContext.Provider>
    )
}
export default MyContextApp