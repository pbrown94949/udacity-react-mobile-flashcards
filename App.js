import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Root from './components/Root'
import reducer from './reducers'
import middleware from './middleware'

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <Root />
      </Provider>
    )
  }
}

export default App
