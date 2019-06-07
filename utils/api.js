import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobile-flashcards:decks'
const QUESTION_STORAGE_KEY = 'mobile-flashcards:questions'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((item) => JSON.parse(item))
}

export function saveNewDeck(name) {
  const id = generateUID()
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [id]: {id, name},
  })).then(() => {
    return {
      id,
      name,
    }
  })
}

export function saveNewQuestion(question, answer, deckId) {
  const id = generateUID()
  return AsyncStorage.mergeItem(QUESTION_STORAGE_KEY, JSON.stringify({
    [id]: name,
  })).then(() => {
    return {
      id,
      question,
      answer,
      deckId,
    }
  })
}

export function clearAll() {
  AsyncStorage.removeItem(DECK_STORAGE_KEY)
  AsyncStorage.removeItem(QUESTION_STORAGE_KEY)
}

export function removeDeck(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}


function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
