import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import DeckListItem from './DeckListItem'

class DeckList extends Component {
  render() {
    const deckIds = this.props.decks
    return (
      <View>
        {
          deckIds.map((id) => (
            <DeckListItem key={id} id={id} />
          ))
        }
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  return {
    decks: Object.keys(decks)
  }
}

export default connect(mapStateToProps)(DeckList)
