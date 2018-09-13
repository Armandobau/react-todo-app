import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './Insert.css';

class Insert extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            nuevo: ""        
        };

        this.handleChange = this.handleChange.bind(this);
        this.agregarTodo = this.agregarTodo.bind(this);
    }

    handleChange(e){
        this.setState({nuevo: e.target.value});
    }

    agregarTodo(){
        let nuevo = this.state.nuevo;
        this.props.agregarTodo(nuevo);
        this.setState({ nuevo: "" });
        //ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
      return (
        <div className="cont-insert">
        <input
          className="insert-input"
          type="text"
          value={this.state.nuevo}
          onChange={this.handleChange}
          ref="myInput"
          />
        <button className="insert-button" onClick={this.agregarTodo}>Add</button>
        </div>
      );
    }
  }
  
  export default Insert;
  