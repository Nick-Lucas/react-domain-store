import React, { PureComponent, Children } from 'react'
import PropTypes from 'prop-types'
import Context from './context'

export default class Provider extends PureComponent {
  render() {
    const { model } = this.props
    return (
      <Context.Provider value={model}>
        {Children.only(this.props.children)}
      </Context.Provider>
    )
  }
}

Provider.propTypes = {
  model: PropTypes.objectOf({
    store: PropTypes.objectOf({
      getState: PropTypes.func.isRequired,
      setState: PropTypes.func.isRequired
    }),
    functions: PropTypes.object.isRequired,
    addEventListener: PropTypes.func.isRequired
  }),
  children: PropTypes.element.isRequired
}
