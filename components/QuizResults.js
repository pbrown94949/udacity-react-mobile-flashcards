import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { postponeNotification } from '../utils/notifications'

class QuizResults extends Component {

  componentDidMount() {
    postponeNotification()
  }

  render() {
    const { correct, incorrect, restartQuiz, exitQuiz } = this.props
    const score = Math.floor(correct / (correct + incorrect) * 100)
    return (
      <View>
        <Text>Correct: {correct}</Text>
        <Text>Incorrect: {incorrect}</Text>
        <Text>Score: {score}%</Text>
        <Button
          title='Restart Quiz'
          onPress={restartQuiz}
        />
        <Button
          title='Back to Deck'
          onPress={exitQuiz}
        />
      </View>
    )
  }
}

export default QuizResults
