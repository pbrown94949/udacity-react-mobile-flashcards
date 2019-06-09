import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddDeck from './components/AddDeck'
import Debug from './components/Debug'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import AddQuestion from './components/AddQuestion'
import DeckListItem from './components/DeckListItem'
import Home from './components/Home'
import Quiz from './components/Quiz'
import reducer from './reducers'
import middleware from './middleware'
import { clearAll, fetchDecks } from './utils/api'
import { initializeNotification } from './utils/notifications'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    AddDeck: {
      screen: AddDeck
    },
    AddQuestion: {
      screen: AddQuestion
    },
    Debug: {
      screen: Debug
    },
    Deck: {
      screen: Deck
    },
    Quiz: {
      screen: Quiz
    }
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(AppNavigator)

class App extends Component {

  componentDidMount() {
    initializeNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <AppContainer />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
