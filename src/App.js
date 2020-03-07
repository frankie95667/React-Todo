import React from "react";
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      tasks: [...JSON.parse(window.localStorage.getItem('tasks'))]
    };
  }

  componentWillUnmount(){
    window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  addTask = (task) => {
    const taskObj = {
      task: task,
      id: Date.now(),
      completed: false
    }
    
    this.setState(prevState => ({
      tasks: [...prevState.tasks, taskObj]
    }), () => {
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    });
  }

  taskCompleted = (id) => {
    const updatedTasks = [...this.state.tasks];
    const index = updatedTasks.findIndex(task => id === task.id);
    updatedTasks[index] = {
      ...updatedTasks[index],
      completed: !updatedTasks[index].completed
    }
    this.setState(() => ({
      tasks: updatedTasks
    }), () => {
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    })
  }

  clearCompleted = () => {
    const tasks = [...this.state.tasks];
    const filteredTasks = tasks.filter(task => {
      if(!task.completed){
        return task;
      }
    })
    this.setState(() => ({
      tasks: filteredTasks
    }), () => {
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          taskCompleted={this.taskCompleted}
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
          tasks={this.state.tasks}
          />
      </div>
    );
  }
}

export default App;
