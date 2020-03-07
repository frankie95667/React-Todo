// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo';
import React, {Component} from 'react';
import TodoForm from './TodoForm';

export default class TodoList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.tasks.map(task => {
                        return (
                            <Todo 
                            taskCompleted={this.props.taskCompleted} 
                            key={task.id}
                            task={task}>
                                {task.task}
                            </Todo>
                        )
                })}
                <TodoForm addTask={this.props.addTask} clearCompleted={this.props.clearCompleted} />
            </div>
        )
    }
}