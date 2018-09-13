import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
//import Body from './body/Body';
import Insert from './insert/Insert';
import TodosList from './todosList/TodosList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actual: null,
      nuevo: {
        id: "",
        name: ""
      },
      data: [
        /*{
          id: 1,
          name: "fregar"
        }*/
      ]
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async addTodo(e) {
    let idActual = this.state.actual;
    let idSiguiente = idActual + 1;
    this.setState({ actual: idSiguiente });
    await this.setState({ nuevo: {id: idSiguiente, name: e} });
    
    let item = this.state.nuevo;
    let myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({ data: myArray });

    
    localStorage.setItem('data', JSON.stringify(this.state.data));
    localStorage.setItem('index', JSON.stringify(this.state.actual));

  }

  deleteTodo(todo){
    //console.log("borrar item");
    let data = this.state.data.filter(i => i.id !== todo.id);
    this.setState({data: data});
    console.log(this.state.data);
    
    localStorage.setItem('data', JSON.stringify(this.state.data));
    console.log("borrado");
    

  }

  ///////////////
  componentDidMount() {
    //Datos
    let retrievedObject = localStorage.getItem('data');
    if(retrievedObject == null){
      localStorage.setItem('data', []);
      console.log(this.state.data);
    }
    else{
      this.setState({data: JSON.parse(retrievedObject)});
      console.log(this.state.data);
    }

    //Indice
    let retrievedIndex = localStorage.getItem('index');
    if(retrievedIndex == null){
      localStorage.setItem('index', 0);
      console.log(this.state.actual);
    }
    else{
      this.setState({actual: JSON.parse(retrievedIndex)});
      console.log(this.state.actual);
    }
    
    //if (this.state.data !== null) {
    //let retrievedObject = localStorage.getItem('data');
    //let retrievedObjectJson = JSON.parse(retrievedObject);
    //this.setState({data: retrievedObjectJson});
    //}
  }

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.data !== prevState.data) {
      console.log("actualizado");
      localStorage.setItem('data', JSON.stringify(this.state.data));
      //let retrievedObject = localStorage.getItem('data');
      //console.log(localStorage.getItem(JSON.parse(retrievedObject)));
    }
  }
  

  render() {
    return (
      <div className="App">
        <Header/>
        <TodosList todos={this.state.data} borrarTodo={this.deleteTodo} />
        <Insert agregarTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
