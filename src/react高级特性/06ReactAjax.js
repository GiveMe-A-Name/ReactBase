import React from "react";

class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
    }
    componentDidMount() {
        (async () => {
            const url = 'https://www.fastmock.site/mock/b56c67bbde826270eecf21d2b021332b/test/api/getUser'
            let response = await fetch(url)
            const jsonObj = await response.json()
            this.setState(jsonObj)
        }).call(this)
    }

    render() {
        return (
            <div>
                <h1> {this.state.firstName} -- {this.state.lastName} </h1>
            </div>
        )
    }
}
export { MyComponent }