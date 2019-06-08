import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckList from './DeckList'
import { handleDeleteDecks, handleLoadDecks } from '../actions/decks'
import { handleDeleteQuestions, handleLoadQuestions } from '../actions/questions'
import { handleLoadDummyData } from '../actions/dummydata'

class Home extends Component {

  componentDidMount()  {
    this.props.loadEverything()
  }

  render() {
    return (
      <View style={styles.container}>
        <DeckList />
        <Button
          title='Add Deck'
          onPress={() => this.props.navigation.navigate('AddDeck')}
        />
        <Button
          title='Delete Everything'
          onPress={this.props.deleteEverything}
        />
        <Button
          title='Load Test Data'
          onPress={this.props.loadTestData}
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
