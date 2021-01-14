import React from "react";

class MyButton extends React.Component {
    constructor(props) {
        super(props)
        // 创建一个ref对象
        this.myRef = React.createRef()
    }

    handleClick = () => {
        // console.log(this.myRef.current)
        this.myRef.current.style.color = 'blue';
    }

    render() {
        return (
            <div>
                {/* 
                    把提前创建好的ref对象，赋值给真实节点，
                    那么这个ref对象的current属性就代表真实的Dom节点
                    为什么是curretn属性,这是为了保证ref对象不一定会被挂载到真实节点上
                    同时ref对象不代表真实dom节点,也保证了ref对象的复用性,一个ref对象可以前后挂载到不同的dom节点
                */}
                <h1 ref={this.myRef}  >hello world</h1>
                <button onClick={this.handleClick} >Clickc</button>
            </div>
        )
    }
}

export { MyButton }