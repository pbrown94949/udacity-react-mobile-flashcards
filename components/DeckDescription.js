import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { countQuestionsInDeck } from '../utils/misc.js'

class DeckDescription extends Component {
  render() {
    const { deckSize, name } = this.props
    return (
      <View>
        <Text style={styles.title}>Deck: {name}</Text>
        <Text style={styles.subtitle}>{deckSize} questions</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 14,
  }
})

function mapStateToProps({ decks, questions }, { id }) {
  const deckSize = Object.values(questions)
    .filter((question) => question.deckId === id)
    .length
  return {
      name: decks[id] ? decks[id].name : '',
      deckSize
  }
}

export default connect(mapStateToProps)(DeckDescription)
