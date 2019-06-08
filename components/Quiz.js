import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { getQuestionsInDeck } from '../utils/misc'

const SHOW_QUESTION = 'ASK_QUESTION'
const SHOW_ANSWER = 'SHOW_ANSWER'
const SHOW_RESULTS = 'SHOW_RESULTS'

class Quiz extends Component {

  state = {
    index: 0,
    correct: 0,
    incorrect: 0,
    mode: SHOW_QUESTION,
  }

  showProgress = () => {
    return (
      <Text>Question {this.state.index + 1} of {this.props.deckSize}</Text>
    )
  }

  showQuestion = () => {
    const questionInfo = this.props.questions[this.state.index]
    const { question } = questionInfo
    return (
      <View>
        <Text>Answer the following question:</Text>
        <Text>{question}</Text>
        <Button
          title='Show Answer'
          onPress={() => this.setState({
            mode: SHOW_ANSWER,
          })}
        />
      </View>
    )
  }

  showAnswer = () => {
    const questionInfo = this.props.questions[this.state.index]
    const { answer, question } = questionInfo
    return (
      <View>
        <Text>Was your answer correct?</Text>
        <Text>{question}</Text>
        <Text>{answer}</Text>
        <Button
          title='Yes'
          onPress={() => this.recordAnswer(true)}
        />
        <Button
          title='No'
          onPress={() => this.recordAnswer(false)}
        />
      </View>
    )
  }

  recordAnswer = (correct) => {
    const index = this.state.index + 1
    const mode = index < this.props.deckSize ? SHOW_QUESTION : SHOW_RESULTS
    this.setState({
      correct: this.state.correct + (correct ? 1 : 0),
      incorrect: this.state.incorrect + (correct ? 0 : 1),
      index,
      mode,
    })
  }

  showResults = () => {
    const { correct, incorrect } = this.state
    const { deckSize, navigation } = this.props
    const score = Math.floor(correct / deckSize * 100)
    return (
      <View>
        <Text>Correct: {correct}</Text>
        <Text>Incorrect: {incorrect}</Text>
        <Text>Score: {score}%</Text>
        <Button
          title='Restart Quiz'
          onPress={() => this.restartQuiz()}
        />
        <Button
          title='Back to Deck'
          onPress={() => navigation.goBack()}
        />
      </View>
    )
  }

  restartQuiz = () => {
    this.setState({
      index: 0,
      correct: 0,
      incorrect: 0,
      mode: SHOW_QUESTION,
    })
  }

  render() {
    const { deckName } = this.props
    const { mode } = this.state
    return (
      <View>
        <Text>Quiz for Deck {deckName}</Text>
        {mode !== SHOW_RESULTS && this.showProgress()}
        {mode === SHOW_QUESTION && this.showQuestion()}
        {mode === SHOW_ANSWER && this.showAnswer()}
        {mode === SHOW_RESULTS && this.showResults()}
      </View>
    )
  }
}

function mapStateToProps({ decks, questions }, { navigation }) {
  const deckId = navigation.getParam('deckId', '')
  const deckName = decks[deckId].name
  const questionsToAsk = getQuestionsInDeck(deckId, questions)
  const deckSize = questionsToAsk.length
  return {
    deckId,
    deckName,
    deckSize,
    questions: questionsToAsk,
  }
}

export default connect(mapStateToProps)(Quiz)
