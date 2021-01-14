import React from "react";

class Test extends React.Component {
    render() {
        // 在父组件是这样子的
        /* 
        
            <Test {...{
                x: 'x1',
                y: 'y1',
                z: 'z1'
            }} />

        */
        return (
            <div>
                {this.props.x}
                <br />
                {this.props.y}
                <br />
                {this.props.z}
                <br />
            </div>
        )
    }
}
export { Test }