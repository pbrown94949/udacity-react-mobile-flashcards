import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddDeck from './components/AddDeck'

export default function App() {
  return (
      <AddDeck />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
