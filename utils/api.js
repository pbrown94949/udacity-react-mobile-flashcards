import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobile-flashcards:decks'
const QUESTION_STORAGE_KEY = 'mobile-flashcards:questions'
const NOTIFICATION_STORAGE_KEY = 'mobile-flashcards:notifications'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((item) => JSON.parse(item))
}

export function saveNewDeck(deck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.id]: deck,
  }))
}

export function removeDeck(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((json) => {
      const decks = JSON.parse(json)
      decks[key] = undefined
      delete decks[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
    })
}

export function removeDecks() {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}

export function fetchQuestions() {
  return AsyncStorage.getItem(QUESTION_STORAGE_KEY)
    .then((item) => JSON.parse(item))
}

export function saveNewQuestion(question) {
  return AsyncStorage.mergeItem(QUESTION_STORAGE_KEY, JSON.stringify({
    [question.id]: question,
  }))
}

export function removeQuestions() {
  return AsyncStorage.removeItem(QUESTION_STORAGE_KEY)
}

export function setNotificationFlag() {
   return AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
}

export function fetchNotificationFlag() {
  return AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
    .then((item) => JSON.parse(item))
}

export function removeNotificationFlag() {
  return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
}

export function logAsyncStorage() {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((item) => console.log(JSON.parse(item)))
  AsyncStorage.getItem(QUESTION_STORAGE_KEY)
    .then((item) => console.log(JSON.parse(item)))
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
    .then((item) => console.log(JSON.parse(item)))
}
