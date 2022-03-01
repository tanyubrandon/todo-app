import React from "react"
import AddTodo from "./AddTodo";
import Todos from "./Todos";

class App extends React.Component {
  state={
    todos:[
      {id:1,content:'buy some milk'},
      {id:2,content:'play football'}
    ]
  }
  handleDelete=(id)=>{
    const newTodos=this.state.todos.filter(todo=>{
      return todo.id!==id;
    });
    this.setState({
      todos:newTodos
    })
  }
  addTodo=(todo)=>{
    todo.id=Math.random();
    const newTodoList=[...this.state.todos,todo];
    this.setState({
      todos:newTodoList
    })
  }
  render() { 
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} handleDelete={this.handleDelete} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
 
export default App;