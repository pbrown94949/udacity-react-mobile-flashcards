import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import DeckListItem from './DeckListItem'
import { clearAll, fetchDecks } from '../utils/api'
import { handleLoadDecks } from '../actions/decks'
import { handleLoadQuestions } from '../actions/questions'

class DeckList extends Component {

  componentDidMount()  {
    this.props.dispatch(handleLoadDecks())
    this.props.dispatch(handleLoadQuestions())
  }

  render() {
    return (
      <View>
        {this.props.decks.map((id) => (
          <DeckListItem key={id} id={id} />
        ))}
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks: Object.keys(decks),
  }
}

export default connect(mapStateToProps)(DeckList)
