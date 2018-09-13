import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
           

        this.borrarItem = this.borrarItem.bind(this);
    }


    borrarItem(){
        console.log("borrar en item");
        this.props.borrarTodo(this.props.todo);
    }

    render() {
      return (
        <div className="cont-todoItem">
            {/*<div className="cont-todoItem-id">
                <span> {this.props.todo.id} </span>
            </div>*/}
            <div className="cont-todoItem-name">
            <span> {this.props.todo.name} </span>
            </div>
            <div className="cont-todoItem-delete">
            <span onClick={this.borrarItem}> X </span>
            </div>
        </div>
      );
    }
  }
  
  export default TodoItem;
  