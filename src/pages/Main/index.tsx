import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ToDoItem from './components/ToDoItem'
import './index.scss';

interface MainPageProps {
    todoStore: any ;
    changeTodoStatus: any;
}

interface MainPageStates {
    /* empty */
}

@inject('todoStore')
@observer
class MainPage extends React.Component<MainPageProps, MainPageStates> {
    render() {
        const { 
            todos, 
            changeTodoStatus,
            unfinishedTodos
        } = this.props.todoStore

        return (
            <>
                <ToDoItem 
                    todos={todos}
                    toggleTodo={changeTodoStatus}
                />
                <p className="unfinish">剩余未完成todo:{unfinishedTodos}</p>
            </>
        )
    }
}

export default MainPage