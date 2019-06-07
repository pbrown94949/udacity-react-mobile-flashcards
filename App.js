import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddDeck from './components/AddDeck'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import AddQuestion from './components/AddQuestion'
import DeckListItem from './components/DeckListItem'
import reducer from './reducers'
import middleware from './middleware'
import { clearAll, fetchDecks } from './utils/api'

class App extends Component {

  deleteEverything = () => {
    clearAll()
  }

  render() {
    return (
      <View>
        <DeckList />
        <Button
          title='Add Deck'
          onPress={() => this.props.navigation.navigate('AddDeck')}
        />
        <Button
          title='Delete Everything'
          onPress={this.deleteEverything}
        />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App
    },
    AddDeck: {
      screen: AddDeck
    },
    AddQuestion: {
      screen: AddQuestion
    },
    Deck: {
      screen: Deck
    }
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <AppContainer />
    </Provider>
  )
}
