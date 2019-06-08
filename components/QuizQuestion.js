import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class QuizQuestion extends Component {

  render() {
    const { question, showAnswer } = this.props
    return (
      <View>
        <Text>Answer the following question:</Text>
        <Text>{question}</Text>
        <Button
          title='Show Answer'
          onPress={showAnswer}
        />
      </View>
    )
  }
}

function mapStateToProps({ questions }, { id }) {
  const { question } = questions[id]
  return {
    question,
  }
}

export default connect(mapStateToProps)(QuizQuestion)
