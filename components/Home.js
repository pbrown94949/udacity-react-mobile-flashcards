import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckList from './DeckList'
import { handleDeleteDecks } from '../actions/decks'
import { handleDeleteQuestions } from '../actions/questions'
import { handleLoadDecks } from '../actions/decks'
import { handleLoadQuestions } from '../actions/questions'

class Home extends Component {

  componentDidMount()  {
    this.props.loadEverything()
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
    },
    loadEverything: () => {
      dispatch(handleLoadDecks())
      dispatch(handleLoadQuestions())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home)
