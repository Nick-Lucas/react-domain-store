import React, { PureComponent, Children } from 'react'
import PropTypes from 'prop-types'
import Context from './context'

export default class Provider extends PureComponent {
  componentDidMount() {
    this.props.model.addEventListener(e => {
      if (e.type === 'update') {
        this.forceUpdate()
      }
    })
  }

  render() {
    const { model } = this.props
    return (
      <Context.Provider
        value={{ state: model.store.getState(), functions: model.functions }}
      >
        {Children.only(this.props.children)}
      </Context.Provider>
    )
  }
}

Provider.propTypes = {
  model: PropTypes.shape({
    store: PropTypes.shape({
      getState: PropTypes.func.isRequired,
      setState: PropTypes.func.isRequired
    }),
    functions: PropTypes.object.isRequired,
    addEventListener: PropTypes.func.isRequired
  }),
  children: PropTypes.element.isRequired
}
