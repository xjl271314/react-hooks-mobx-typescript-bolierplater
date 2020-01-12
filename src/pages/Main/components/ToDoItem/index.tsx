import * as React from 'react';
import './index.scss'

interface todoItemProps {
    title: string;
    done:  boolean;
}

const ToDoItem = (props: any) => {
    const { todos, toggleTodo } = props;
    return (
        <div className="todo-list">
            <h2 className="todo-list-title">My Special Todo List</h2>
            {
                todos.map((todo: todoItemProps, index: number) => {
                    return (
                        <label
                            key={index}
                            className="todo-list-item"
                        >
                            <input type="checkbox" onClick={()=>toggleTodo(index)}/>
                            <i className="check"></i>
                            <span className="title">{todo.title}</span>
                        </label>
                    )
                })
            }
        </div>
    )
}

export default ToDoItem