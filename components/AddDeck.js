import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

class AddDeck extends Component {

  state = {
    deckName: '',
  }

  onChangeText = (deckName) => {
    this.setState({
      deckName
    })
  }

  render() {
    return (
      <View>
        <Text> </Text>
        <Text> </Text>
        <Text>
          Create a new deck!
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.onChangeText}
          value={this.state.deckName}
          placeholder='Enter the deck name'
        />
        <Text>
          {this.state.deckName}
        </Text>
        <Button
          title='Submit'
          disabled={this.state.deckName === ''}
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

export default AddDeck
