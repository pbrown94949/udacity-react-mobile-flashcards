import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckList from './DeckList'
import { handleDeleteDecks, handleLoadDecks } from '../actions/decks'
import { handleDeleteQuestions, handleLoadQuestions } from '../actions/questions'
import { handleLoadDummyData } from '../actions/dummydata'
import { logDecks, logQuestions } from '../utils/api'

class Home extends Component {

  componentDidMount()  {
    this.props.loadEverything()
  }

  render() {
    const { deleteEverything, loadTestData, navigation } = this.props
    return (
      <View style={styles.container}>
        <DeckList />
        <Button
          title='Add Deck'
          onPress={() => navigation.navigate('AddDeck')}
        />
        <Button
          title='Delete Everything'
          onPress={deleteEverything}
        />
        <Button
          title='Load Test Data'
          onPress={loadTestData}
        />
        <Button
          title='Log Decks'
          onPress={logDecks}
        />
        <Button
          title='Log Questions'
          onPress={logQuestions}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
})

function mapDispatchToProps(dispatch) {
  return {
    deleteEverything: () => {
      dispatch(handleDeleteDecks())
      dispatch(handleDeleteQuestions())
    },
    loadEverything: () => {
      dispatch(handleLoadDecks())
      dispatch(handleLoadQuestions())
    },
    loadTestData: () => {
      dispatch(handleLoadDummyData())
    },
  }
}

export default connect(null, mapDispatchToProps)(Home)
