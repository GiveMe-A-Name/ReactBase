import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div>
            <Input
                value={props.inputValue}
                placeholder="todo Info"
                style={{ width: '300px' }}
                onChange={props.handleInputChange}
            />
            <Button
                type="primary"
                onClick={props.handleBtnClick}
            >Submit</Button>
            <List style={{ width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => props.handleItemDelete(index)}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TodoListUI