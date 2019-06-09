import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import { generateUID } from '../utils/misc'
import { handleDeleteDecks, handleLoadDecks } from '../actions/decks'
import { handleDeleteQuestions, handleLoadQuestions } from '../actions/questions'
import { handleLoadDummyData } from '../actions/dummydata'
import { logAsyncStorage } from '../utils/api'
import { clearNotification } from '../utils/notifications'

class Debug extends Component {

  render() {
    const { deleteEverything, loadTestData, navigation } = this.props
    return (
      <View>
        <Button
          title='Load Test Data'
          onPress={loadTestData}
        />
        <Text> </Text>
        <Button
          title='Log Async Storage'
          onPress={logAsyncStorage}
        />
        <Text> </Text>
        <Button
          title='Delete Everything'
          onPress={deleteEverything}
        />
        <Text> </Text>
        <Button
          title='Clear Notification'
          onPress={() => clearNotification()}
        />
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteEverything: () => {
      dispatch(handleDeleteDecks())
      dispatch(handleDeleteQuestions())
    },
    loadTestData: () => {
      dispatch(handleLoadDummyData())
    },
  }
}

export default connect(null, mapDispatchToProps)(Debug)
