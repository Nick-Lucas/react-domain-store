import React, { Component } from 'react'

export const connect = (stateToProps, funcsToProps) => WrappedComponent => {
  return <Wrapper stateToProps={stateToProps} funcsToProps={funcsToProps} />
}

class Wrapper extends Component {
  constructor(props) {
    super(props)
  }
}
