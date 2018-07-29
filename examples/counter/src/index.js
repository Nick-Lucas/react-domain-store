import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppCon from './App'

import { createModel, createDomain } from "model-store"
import { Provider } from "react-model-store"

const model = createModel({
  counter: createDomain({ count: 0 }, store => ({
    increment: () => {
      const { count } = store.getState()
      return { count: count + 1 }
    },
    decrement: () => {
      const { count } = store.getState()
      return { count: count - 1 }
    },
  }))
})

ReactDOM.render(
  <Provider model={model}>
    <AppCon />
  </Provider>, 
  document.getElementById('root')
)

model.addEventListener(e => {
  console.log(e)
  if (e.type === "update") {
    console.log(e.result)
  }
})
