import React, {Component} from 'react';

export default class TodoForm extends Component {
    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Adding Task");
        console.log(e.target.task.value);
        this.props.addTask(e.target.task.value);
        e.target.task.value = '';
    }

    render(){
        return (
            <>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" name="task" id="task" />
                    <button type="submit">Add Task</button>
                    <button type="button" onClick={()=> this.props.clearCompleted()}>Clear Completed</button>
                </form>
            </>
        )
    }
}