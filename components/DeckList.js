import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'

class DeckList extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.decks.map((id) => (
          <DeckListItem key={id} id={id} />
        ))}
      </View>
    )
  }
}

function mapStateToProps({ decks }) {
  const sortedIds = Object.values(decks)
            .sort((a,b) => {
              const nameCompare = a.name.localeCompare(b.name)
              return nameCompare !== 0
                ? nameCompare
                : a.id.localeCompare(b.id)
            })
            .map((deck) => deck.id)
  return {
    decks: sortedIds
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default connect(mapStateToProps)(DeckList)
