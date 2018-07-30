import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppCon from './App'

import { createModel, createDomain } from "model-store"
import { Provider } from "react-model-store"

const model = createModel({
  counter: createDomain({ count: 0 }, store => ({
    increment: () => {
      // this function has to go call some server for 1000ms
      return new Promise(resolve => setTimeout(() => resolve(), 1000))
        .then(() => {
          const { count } = store.getState()
          return { count: count + 1 }
        })
    },
    decrement: () => {
      const { count } = store.getState()
      return { count: count - 1 }
    },
  })),
  load: createDomain({ loading: false }, store => ({
    startLoad: () => {
      return {
        loading: true
      }
    },
    endLoad: () => {
      return {
        loading: false
      }
    },
  }))
})

ReactDOM.render(
  <Provider model={model}>
    <AppCon />
  </Provider>, 
  document.getElementById('root')
)

model.addEventListener(e => console.log(e))
