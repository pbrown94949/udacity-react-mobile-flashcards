import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions/decks'

class Deck extends Component {

  deleteDeck = () => {
    this.props.doDelete(this.props.id)
    this.props.navigation.navigate('Home')
  }

  render() {
    const { id, name } = this.props
    return (
      <View>
        <Text>Details</Text>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Button
          title='Delete Deck'
          onPress={this.deleteDeck}
        />

      </View>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const id = navigation.getParam('id', '')
  const name = decks[id] ? decks[id].name : ''
  return {
      id,
      name,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doDelete: (id) => {
      dispatch(handleDeleteDeck(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck)
