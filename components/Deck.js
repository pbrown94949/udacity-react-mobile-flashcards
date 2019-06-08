import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions/decks'
import { countQuestionsInDeck } from '../utils/misc.js'

class Deck extends Component {

  addQuestion = () => {
    this.props.navigation.navigate('AddQuestion', {
      deckId: this.props.id,
    })
  }

  startQuiz = () => {
    this.props.navigation.navigate('Quiz', {
      deckId: this.props.id,
    })
  }

  deleteDeck = () => {
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
  return {
      id,
      name: decks[id] ? decks[id].name : '',
      questionCount: countQuestionsInDeck(id, questions)
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
