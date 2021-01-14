import React from "react";

// 由于React组件一定需要有根节点包裹，但有时并不方便。
// 有时候一个组件需要返回多个元素，
// 这时就适合使用Fragments来包裹这个多个元素，但又无需向DOM添加而外节点

class Table extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                    <tr>
                        <ColumnsAnother />
                    </tr>
                </tbody>
            </table>
        );
    }
}

class Columns extends React.Component {
    render() {
        return (
            // 写法1。
            // 可以向Fragment添加key or 属性
            <React.Fragment>
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>

        )
    }
}

class ColumnsAnother extends React.Component {
    render() {

        return (
            // 写法2。
            // 直接使用<> </> 空标签，但不支持key或属性
            <>
                <td>HelloAnother</td>
                <td>WorldAnother</td>
            </>

        )
    }
}

export { Table }