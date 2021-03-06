import React, { Component } from 'react';
import Header from './components/Header'
import Input from './components/Input'
import Table from './components/Table'
import { identity } from 'rxjs';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      todos : [],
      input : '',
      id : 1
    }
  }

  onInputChange = (e) => {
    this.setState({
      input : e.target.value
    })
  }

  onInputSubmit = (e) => {
    const newTodo = {
      id : this.state.id,
      text : this.state.input,
      checked : false
    }
    e.preventDefault()
    this.setState(prevState => ({
      todos : [...prevState.todos, newTodo],
      id : prevState.id + 1,
      input : ''
    }))
    
  }

  onCheckToggle = (id) => {
    this.setState({
      todos : this.state.todos.map(todo => {
        if (todo.id === id){
          todo.checked = !todo.checked
        }
        return todo
      })
    })
    
  }

  onDeleteClick = (id) => {
    this.setState({
      todos : this.state.todos.filter (todo => todo.id !== id)
    })
  }

  render(){
    return (
      <div >
        <Header />
        <Input onChange={this.onInputChange} onSubmit={this.onInputSubmit} input={this.state.input} />
        <Table todos={this.state.todos} onCheckToggle={this.onCheckToggle} onDeleteClick={this.onDeleteClick}/>
      </div>
    );
  }
  
}
  
export default App;
