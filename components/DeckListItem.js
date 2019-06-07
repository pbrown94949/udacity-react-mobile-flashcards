import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class DeckListItem extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

function mapStateToProps({ decks }, { id }) {
  return {
    id,
    name: decks[id].name,
  }
}

export default connect(mapStateToProps)(DeckListItem)
