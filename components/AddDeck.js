import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import { addDeck2, getAllDecks } from '../utils/api.js'

class AddDeck extends Component {

  state = {
    deckName: '',
  }

  onChangeText = (deckName) => {
    this.setState({
      deckName
    })
  }

  onPress = () => {
    this.props.addDeck(this.state.deckName)
    this.setState({
      deckName: '',
    })
    this.props.navigation.navigate('Home')
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
          onPress={this.onPress}
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

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (name) => {
      dispatch(handleAddDeck(name))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddDeck)
