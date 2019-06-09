import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import DeckList from './DeckList'

const ENABLE_DEBUG = false

class Home extends Component {

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
  },
})

export default Home
