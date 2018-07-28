import React, { PureComponent } from 'react'
import Context from './context'

export const connect = (stateToProps, funcsToProps) => WrappedComponent => {
  class Wrapper extends PureComponent {
    render() {
      return (
        <Context.Consumer>
          {model => {
            const state = stateToProps(model.store)
            const funcs = funcsToProps(model.functions)
            return React.createElement(WrappedComponent, { ...state, ...funcs })
          }}
        </Context.Consumer>
      )
    }
  }

  Wrapper.displayName = `${WrappedComponent.displayName}Connect`

  return <Wrapper />
}
