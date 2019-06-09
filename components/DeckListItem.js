import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import DeckDescription from './DeckDescription'

class DeckListItem extends Component {

  goToDeck = () => {
    const { id, navigation } = this.props
    navigation.navigate('Deck', {
      id
    })
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.goToDeck}>
        <DeckDescription id={this.props.id} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d6d7da',
  }
})

export default withNavigation(DeckListItem)
