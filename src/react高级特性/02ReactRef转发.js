import React from "react";

const FuncyButton = React.forwardRef((props, ref) => (
    <button ref={ref}>
        {props.children}
    </button>
))
class ForWardComponent extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this.myRef.current.outerHTML)
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>hello Parent</button>
                <FuncyButton ref={this.myRef}>
                    hello button
                </FuncyButton>
            </>
        )

    }
}

export { ForWardComponent }