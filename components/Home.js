import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckList from './DeckList'
import { handleLoadDecks } from '../actions/decks'
import { handleLoadQuestions } from '../actions/questions'

const ENABLE_DEBUG = true

class Home extends Component {

  componentDidMount()  {
    this.props.loadEverything()
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <DeckList />
        <Button
          title='Add Deck'
          onPress={() => navigation.navigate('AddDeck')}
        />
        {ENABLE_DEBUG &&
          <Button
            title='Go to Debug'
            onPress={() => navigation.navigate('Debug')}
          />
        }
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
    loadEverything: () => {
      dispatch(handleLoadDecks())
      dispatch(handleLoadQuestions())
    },
  }
}

export default connect(null, mapDispatchToProps)(Home)
