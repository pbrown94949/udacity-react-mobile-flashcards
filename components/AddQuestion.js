import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { generateUID } from '../utils/misc'

class AddQuestion extends Component {

  state = {
    question: '',
    answer: '',
  }

  onPress = () => {
    const { answer, question } = this.state
    const { addQuestion, deckId, navigation } = this.props
    addQuestion({
      id: generateUID(),
      question,
      answer,
      deckId,
    })
    navigation.navigate('Deck', {
      id: deckId,
    })
  }

  render() {
    const { answer, question } = this.state
    return (
      <View>
        <Text>Add Question for Deck {this.props.deckName}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({
            question
          })}
          value={question}
          placeholder='Enter a question'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(answer) => this.setState({
            answer
          })}
          value={answer}
          placeholder='Enter the answer'
        />
        <Button
          title='Submit'
          onPress={this.onPress}
          disabled={question === '' || answer === ''}
        />
      </View>
    )
  }
}

const styles = {
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const deckId = navigation.getParam('deckId', '')
  return {
    deckId,
    deckName: decks[deckId].name
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (question) => {
      dispatch(handleAddQuestion(question))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)
