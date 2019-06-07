import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckList from './DeckList'
import { handleDeleteDecks } from '../actions/decks'
import { handleDeleteQuestions } from '../actions/questions'

class Home extends Component {

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
          onPress={this.props.deleteEverything}
        />
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteEverything: () => {
      dispatch(handleDeleteDecks())
      dispatch(handleDeleteQuestions())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)
