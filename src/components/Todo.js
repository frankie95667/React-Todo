import React, {Component} from 'react';

export default class Todo extends Component{
    constructor(props){
        super(props);
    }

    renderTask = () => {
        if(this.props.task.completed){
            return (
                <div 
                onClick={()=> this.props.taskCompleted(this.props.task.id)}
                style={{textDecoration: 'line-through'}}>
                    {this.props.task.task}
                </div>
            )
        }
        return (
            <div 
                onClick={()=> this.props.taskCompleted(this.props.task.id)}>
                    {this.props.task.task}
            </div>
        )
    }

    render(){
        return (
            <>
                {this.renderTask()}
            </>
        )
    }
}