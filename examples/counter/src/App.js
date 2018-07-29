import React, { Component } from 'react'

import './App.css'

import { connect } from "react-model-store"

export class App extends Component {
  render() {
    const { 
      count, 
      increment, 
      decrement
    } = this.props

    return (
      <div className="App">
        <h1 className="App-title">Count is {count}</h1>
        <button onClick={increment}>
          Increment 
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.counter.count
  }), 
  funcs => ({
    increment: funcs.counter.increment,
    decrement: funcs.counter.decrement
  })
)(App)
