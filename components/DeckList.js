import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'

class DeckList extends Component {

  render() {
    return (
      <View style={styles.zed}>
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

const styles = StyleSheet.create({
  zed: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
})

export default connect(mapStateToProps)(DeckList)
