import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobile-flashcards:decks'

export function saveNewDeck(name) {
  const id = generateUID()
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [id]: name,
  })).then(() => {
    return {
      id,
      name,
    }
  })
}

export function getAllDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((x) => ({
      x
    }))
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
