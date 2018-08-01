import React, { Component } from 'react'

import './App.css'

import { connect } from "react-domain-store"

export class App extends Component {
  render() {
    const { 
      count, 
      loading,
      increment, 
      decrement
    } = this.props

    if (loading) {
      return (
        <div className="App">
          <h1 className="App-title">Loading...</h1>
        </div>
      )
    }

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
    count: state.counter.count,
    loading: state.load.loading,
  }), 
  funcs => ({
    increment: async () => {
      await funcs.load.startLoad()
      await funcs.counter.increment()
      await funcs.load.endLoad()
    },
    decrement: funcs.counter.decrement
  })
)(App)
