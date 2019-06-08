import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class QuizAnswer extends Component {

  recordAnswer = (correct) => {
    this.props.recordAnswer(correct)
  }

  render() {
    const { answer, question } = this.props
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
}

function mapStateToProps({ questions }, { id }) {
  const { answer, question } = questions[id]
  return {
    answer,
    question,
  }
}

export default connect(mapStateToProps)(QuizAnswer)
