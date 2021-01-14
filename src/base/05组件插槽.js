import React from "react";
function FancyBorder(props) {
    return (
        <div>
            {/* 使用props.children来表示插入到该组件的内容 */}
            {props.children}
        </div>
    )
}
function WelcomeDialog() {
    return (
        <FancyBorder>
            <h1>hello world</h1>
        </FancyBorder>
    )
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="Splitpane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    )
}
function CompositionApp(props) {
    return (
        // 在给组件插入props的时候，可以想他的属性插入组件
        // <WelcomeDialog/>之类的 React 元素本质就是对象（object），
        // 所以你可以把它们当作 props，像其他数据一样传递
        <SplitPane left={
            <WelcomeDialog />
        } right={
            <h1>hello I am right</h1>
        } />
    )
}

export { WelcomeDialog, CompositionApp }