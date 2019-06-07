import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import AddDeck from './components/AddDeck'
import DeckList from './components/DeckList'
import reducer from './reducers'
import middleware from './middleware'

class App extends Component {
  render() {
    return (
      <View>
        <DeckList />
        <Button
          title='Add Deck'
          onPress={onPress= () => this.props.navigation.navigate('AddDeck')}
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
