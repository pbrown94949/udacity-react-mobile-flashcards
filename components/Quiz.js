import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import QuizResults from './QuizResults'
import QuizQuestion from './QuizQuestion'
import QuizAnswer from './QuizAnswer'
import { shuffle } from '../utils/misc'

const SHOW_QUESTION = 'SHOW_QUESTION'
const SHOW_ANSWER = 'SHOW_ANSWER'
const SHOW_RESULTS = 'SHOW_RESULTS'

class Quiz extends Component {

  state = {
    correct: 0,
    incorrect: 0,
    index: 0,
    mode: SHOW_QUESTION,
  }

  render() {
    const { deckName, deckSize } = this.props
    const { mode } = this.state
    if (deckSize < 1) {
      return (
        <View>
          <Text>No questions available</Text>
        </View>
      )
    }
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

  showProgress = () => {
    return (
      <Text>Question {this.state.index + 1} of {this.props.deckSize}</Text>
    )
  }

  showQuestion = () => {
    return (
      <QuizQuestion
        id={this.props.questionIds[this.state.index]}
        showAnswer={() => this.setState({
          mode: SHOW_ANSWER,
        })}
      />
    )
  }

  showAnswer = () => {
    return (
      <QuizAnswer
        id={this.props.questionIds[this.state.index]}
        recordAnswer={(correct) => this.recordAnswer(correct)}
      />
    )
  }

  recordAnswer = (correct) => {
    const done = this.state.index + 1 >= this.props.deckSize
    const index = done ? 0 : this.state.index + 1
    const mode = done ? SHOW_RESULTS : SHOW_QUESTION
    this.setState({
      correct: this.state.correct + (correct ? 1 : 0),
      incorrect: this.state.incorrect + (correct ? 0 : 1),
      index,
      mode,
    })
  }

  showResults = () => {
    return (
      <QuizResults
        correct={this.state.correct}
        incorrect={this.state.incorrect}
        restartQuiz={() => {
          this.setState({
            index: 0,
            correct: 0,
            incorrect: 0,
            mode: SHOW_QUESTION,
          })
        }}
        exitQuiz={() => this.props.navigation.goBack()}
      />
    )
  }
}

function mapStateToProps({ decks, questions }, { navigation }) {
  const deckId = navigation.getParam('deckId', '')
  const deckName = decks[deckId].name
  const questionIds = Object.values(questions)
    .filter((question) => question.deckId === deckId)
    .map((question) => question.id)
  const deckSize = questionIds.length
  return {
    deckName,
    deckSize,
    questionIds: shuffle(questionIds)
  }
}

export default connect(mapStateToProps)(Quiz)
