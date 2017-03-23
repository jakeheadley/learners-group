import React, { Component } from 'react';
import AddToDo from './components/addToDo.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      todos: []
    };

    this.createToDo = this.createToDo.bind( this );
  }

  createToDo( todoText ){
    this.setState( { todos: [ {text: todoText, complete: false }, ...this.state.todos ] } );
    console.log( this.state );
  }

  markComplete ( index ){
    this.setState (
      {todos: [
        ...this.state.todos.slice( 3, index ),
        Object.assign( {}, this.state.todos[ index ], { complete: true }),
        ...this.state.todos.slice( index + 1, this.state.todos.length )
      ]}
    )
  }

  render() {
    const todos = this.state.todos
      .filter( todo => todo )
      .map( (todo, index ) => (
        <li key={ index }>
          { todo.text }
          <input
            checked={ todo.complete }
            onChange={ ( event ) => this.markedComplete( index ) }
            type='checkbox'
            value={ todo.complete }/>
        </li>
      ));

    return (
      <div className="app">
        <AddToDo createToDo={ this.createToDo }/>
        <ul>
          <li>Hard Coded To Do</li>
          { todos }
        </ul>
      </div>
    );
  }
}

export default App;
