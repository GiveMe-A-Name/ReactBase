import React from "react";
const MyContext = React.createContext('default name')
/* 
    MyContext是一个组件对象
    {
        // 包含两个属性Provider 和 Consumer属性，
        // 这是两个组件，分别代表这生产者 和消费者
        Provider,
        Consumer
    }
*/
const Obj = {
    name: 'xiaoming',
    age: 18,
    nickname: 'one'
}
class Parent extends React.Component {
    render() {
        return (
            <MyContext.Provider value={Obj}>
                <div>
                    <h1>hello Parent</h1>
                    <Son />
                </div>
            </MyContext.Provider>
        )
    }
}
function Son() {
    return (
        <GrandSon />
    )
}
class GrandSon extends React.Component {
    // 设置一个contextType属性，能够让this.context继承Mycontext上的值
    static contextType = MyContext
    render() {
        // 就代表赋值给MyContext.Provider,value上的值
        const obj = this.context
        return (
            <h2> {obj.name} -- {obj.age} -- {obj.nickname}  </h2>
        )
    }
}
export { Parent }