import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddDeck from './AddDeck'
import AddQuestion from './AddQuestion'
import Debug from './Debug'
import Deck from './Deck'
import Home from './Home'
import Quiz from './Quiz'
import { initializeNotification } from '../utils/notifications'
import { handleLoadDecks } from '../actions/decks'
import { handleLoadQuestions } from '../actions/questions'

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

class Root extends Component {

  componentDidMount() {
    this.props.dispatch(handleLoadDecks())
    this.props.dispatch(handleLoadQuestions())
    initializeNotification()
  }

  render() {
    return (
      <AppContainer />
    )
  }
}

export default connect()(Root)
