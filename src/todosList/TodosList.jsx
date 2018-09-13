import React, { Component } from 'react';
import './TodosList.css';
import TodoItem from '../todoItem/TodoItem';

class TodosList extends Component {
    constructor(props) {
        super(props);

        this.borrarTodo = this.borrarTodo.bind(this);
    }

    borrarTodo(todo){
        console.log("borrar en list");
        this.props.borrarTodo(todo);
    }

    render() {
      return (
        <div className="cont-todoList"> 
          {this.props.todos.map((todo, i) => (
            //todo es cada iteracion, se
            //podria llamar como se quisiera.
            //i es el indice de cada iteracion.
            //key={i} se usa para que en lugar de
            //re-renderizar todo el grupo,
            //solo se renderice lo necesario
            <TodoItem key={i} todo={todo}  borrarTodo={this.borrarTodo} />
          ))}
        </div>
      );
    }
  }
  
  export default TodosList;
  