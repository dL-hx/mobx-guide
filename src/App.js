import React, { Component } from 'react'
import Counter from './views/Counter'
import Todo from './views/todo'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter /> */}
        <Todo />
      </div>
    )
  }
}
