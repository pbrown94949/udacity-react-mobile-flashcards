import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import { generateUID } from '../utils/misc'

class AddDeck extends Component {

  state = {
    name: '',
  }

  onPress = () => {
    const { name } = this.state
    const { addDeck, navigation } = this.props
    const id = generateUID()
    addDeck({
      id,
      name,
    })
    navigation.replace('Deck', {
      id,
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
          onChangeText={(name) => this.setState({
            name
          })}
          value={this.state.name}
          placeholder='Enter the deck name'
        />
        <Button
          title='Submit'
          onPress={this.onPress}
          disabled={this.state.name === ''}
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
    addDeck: (id, name) => {
      dispatch(handleAddDeck(id, name))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddDeck)
