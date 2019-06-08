import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions/decks'
import { countQuestionsInDeck } from '../utils/misc.js'

class Deck extends Component {

  addQuestion = () => {
    const { id, navigation } = this.props
    navigation.navigate('AddQuestion', {
      deckId: id,
    })
  }

  startQuiz = () => {
    const { id, navigation } = this.props
    navigation.navigate('Quiz', {
      deckId: id,
    })
  }

  deleteDeck = () => {
    const { doDelete, id, navigation } = this.props
    doDelete(id)
    navigation.navigate('Home')
  }

  render() {
    const { deckSize, id, name } = this.props
    return (
      <View>
        <Text>{name}</Text>
        <Text>Questions: {deckSize}</Text>
        <Button
          title='Add Question'
          onPress={this.addQuestion}
        />
        <Button
          title='Start Quiz'
          onPress={this.startQuiz}
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
  const deckSize = Object.values(questions)
    .filter((question) => question.deckId === id)
    .length
  return {
      id,
      name: decks[id] ? decks[id].name : '',
      deckSize
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
