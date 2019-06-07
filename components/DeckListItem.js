import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class DeckListItem extends Component {

  navigate = () => {
    console.log('here we go')
    this.props.navigation.navigate('Deck', {
      id: this.props.id,
    })
  }

  render() {
    return (
      <TouchableOpacity onPress={this.navigate}>
        <Text style={{fontSize: 24}}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

function mapStateToProps({ decks }, { id }) {
  console.log('Processing item: ', id)
  return {
    id,
    name: decks[id].name,
  }
}

export default withNavigation(connect(mapStateToProps)(DeckListItem))
