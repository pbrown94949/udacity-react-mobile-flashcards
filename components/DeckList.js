import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import DeckListItem from './DeckListItem'
import { clearAll, fetchDecks } from '../utils/api'
import { handleLoadDecks } from '../actions/decks'

class DeckList extends Component {

  componentDidMount()  {
    this.props.dispatch(handleLoadDecks())
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
  const ids = Object.keys(decks)
  console.log('here are the ids: ', ids)
  return {
    decks: ids,
  }
}

export default connect(mapStateToProps)(DeckList)
