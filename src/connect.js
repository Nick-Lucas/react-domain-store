import React, { PureComponent } from 'react'
import Context from './context'

export default (stateToProps, funcsToProps) => WrappedComponent => {
  class Wrapper extends PureComponent {
    render() {
      return (
        <Context.Consumer>
          {model => {
            const state = stateToProps(model.state)
            const funcs = funcsToProps(model.functions)
            return <WrappedComponent {...state} {...funcs} {...this.props} />
          }}
        </Context.Consumer>
      )
    }
  }

  Wrapper.displayName = `${getDisplayName(WrappedComponent)}Connect`

  return Wrapper
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
