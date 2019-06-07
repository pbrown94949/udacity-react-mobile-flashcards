import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'

class AddQuestion extends Component {
  state = {
    question: '',
    answer: '',
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
          placeholder='Enter a question'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
          placeholder='Enter the answer'
        />
        <Button
          title='Submit'
          onPress={this.onPress}
          disabled={this.state.question === '' || this.state.answer === ''}
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

function mapStateToProps({ decks }, { deckId }) {
  return {
    deckId,
    deckName: decks[deckId].name,
  }
}

export default connect(mapStateToProps)(AddQuestion)
