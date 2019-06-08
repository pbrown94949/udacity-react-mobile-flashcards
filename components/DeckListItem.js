import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { countQuestionsInDeck } from '../utils/misc.js'

class DeckListItem extends Component {

  goToDeck = () => {
    const { id, navigation } = this.props
    navigation.navigate('Deck', {
      id
    })
  }

  render() {
    const { deckSize, name } = this.props
    return (
      <TouchableOpacity onPress={this.goToDeck}>
        <Text style={{fontSize: 24}}>{name}</Text>
        <Text>Questions: {deckSize}</Text>
      </TouchableOpacity>
    )
  }
}

function mapStateToProps({ decks, questions }, { id }) {
  return {
    id,
    name: decks[id].name,
    deckSize: countQuestionsInDeck(id, questions)
  }
}

export default withNavigation(connect(mapStateToProps)(DeckListItem))
