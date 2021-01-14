import React from "react";
import PropTypes from "prop-types";

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                hello world
                <p>{this.props.content}</p>
                <p>{this.props.footer}</p>
            </div>
        )
    }
}

// 对传入的值进行代码检测
MyComponent.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired
}

// 对组件props设置默认值
MyComponent.defaultProps = {
    footer: 'hello default footer'
}

export { MyComponent }