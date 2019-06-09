import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { handleDeleteDeck } from '../actions/decks'
import { countQuestionsInDeck } from '../utils/misc.js'
import DeckDescription from './DeckDescription'

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
      <View style={styles.container}>
        <DeckDescription id={id} />
        <View style={styles.buttons}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  deckTitle: {
    fontSize: 24,
  },
  deckDetails: {
    fontSize: 14,
  }
})

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
