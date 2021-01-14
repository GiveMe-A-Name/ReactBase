import React from "react";

function NumberList(props) {
    const numbers = props.numbers
    return (
        <div>
            {
                (numbers => {
                    const list = []
                    for (let i = 0; i < numbers.length; i++) {
                        list.push(<p>这是第{numbers[i]}个</p>)
                    }
                    return list
                })(numbers)
            }
        </div>
    )
}

export { NumberList }