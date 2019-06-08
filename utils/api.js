import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobile-flashcards:decks'
const QUESTION_STORAGE_KEY = 'mobile-flashcards:questions'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((item) => JSON.parse(item))
}

export function saveNewDeck(id, name) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [id]: {id, name},
  })).then(() => {
    return {
      id,
      name,
    }
  })
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

export function removeDecks() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}

export function fetchQuestions() {
  return AsyncStorage.getItem(QUESTION_STORAGE_KEY)
    .then((item) => JSON.parse(item))
}

export function saveNewQuestion({ id, question, answer, deckId }) {
  return AsyncStorage.mergeItem(QUESTION_STORAGE_KEY, JSON.stringify({
    [id]: {
      id,
      question,
      answer,
      deckId,
    },
  }))
}

export function removeQuestions() {
  return AsyncStorage.removeItem(QUESTION_STORAGE_KEY)
}

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
