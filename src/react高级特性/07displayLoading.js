import React from "react";
class ShowUsers extends React.Component {

    // props会传进来一个promise
    constructor(props) {
        super(props)
        this.state = {
            load: true,
            data: null,
            error: null
        }
    }

    componentDidMount() {
        // 根据这个在起床load: true，代表promise还没有被setteld
        // 然后根据promise的请求情况，进行setState重新渲染视图
        this.props.promise.then(
            response => {
                if (response.ok) {
                    return response.json()
                }
            }
        ).then(
            value => {
                this.setState({
                    load: false,
                    data: value
                })
            }
        ).catch(
            reason => {
                this.setState({
                    load: false,
                    error: reason
                })
            }
        )

    }

    render() {
        // 根据this.state的不同状态去渲染不同的视图
        if (this.state.load) {
            return (
                <h1>Loading</h1>
            )
        } else if (this.state.data !== null) {
            return (
                <div>
                    {
                        this.state.data.map((item) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Error</h1>
                    <h2>{this.state.error}</h2>
                </div>
            )
        }
    }
}

export { ShowUsers }