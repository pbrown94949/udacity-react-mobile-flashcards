import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions/decks'

class Deck extends Component {

  state = {
    deleted: false,
  }

  addQuestion = () => {
    this.props.navigation.navigate('AddQuestion', {
      deckId: this.props.id,
    })
  }

  deleteDeck = () => {
    this.setState({
      deleted: true,
    })
    this.props.doDelete(this.props.id)
    this.props.navigation.navigate('Home')
  }

  render() {
    const { id, name, questionCount } = this.props
    return (
      <View>
        <Text>Details</Text>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Text>{questionCount}</Text>
        <Button
          title='Add Question'
          onPress={this.addQuestion}
        />
        <Button
          title='Delete Deck'
          onPress={this.deleteDeck}
        />
      </View>
    )
  }
}

function mapStateToProps({ decks, questions }, { navigation }) {
  const id = navigation.getParam('id', '')
  const questionCount = Object.values(questions)
    .filter((question) => question.deckId === id)
    .length
  return {
      id,
      name: decks[id] ? decks[id].name : '',
      questionCount,
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
