import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import Context from './context'

export default class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state: this.getState()
    }
  }

  componentDidMount() {
    this.props.model.addEventListener(e => {
      if (e.type === 'update') {
        this.setState({ state: this.getState() })
      }
    })
  }

  getState = () => this.props.model.store.getState()

  render() {
    const { model } = this.props
    const { state } = this.state
    return (
      <Context.Provider value={{ state, functions: model.functions }}>
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
