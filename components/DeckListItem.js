import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { countQuestionsInDeck } from '../utils/misc.js'

class DeckListItem extends Component {

  navigate = () => {
    this.props.navigation.navigate('Deck', {
      id: this.props.id,
    })
  }

  render() {
    return (
      <TouchableOpacity onPress={this.navigate}>
        <Text style={{fontSize: 24}}>{this.props.name}</Text>
        <Text>Questions: {this.props.questions}</Text>
      </TouchableOpacity>
    )
  }
}

function mapStateToProps({ decks, questions }, { id }) {
  return {
    id,
    name: decks[id].name,
    questions: countQuestionsInDeck(id, questions)
  }
}

export default withNavigation(connect(mapStateToProps)(DeckListItem))
