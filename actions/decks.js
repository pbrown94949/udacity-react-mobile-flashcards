import { fetchDecks, removeDeck, removeDecks, saveNewDeck } from '../utils/api'
import { generateUID } from '../utils/misc'

export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const DELETE_DECKS = 'DELETE_DECKS'
export const LOAD_DECKS = 'LOAD_DECKS'

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck(deck) {
  return (dispatch, getState) => {
    saveNewDeck(deck)
      .then(() => {
        dispatch(addDeck(deck))
      })
  }
}

function loadDecks(decks) {
  return {
    type: LOAD_DECKS,
    decks,
  }
}

export function handleLoadDecks() {
    return (dispatch, getState) => {
      fetchDecks()
        .then((decks) => {
          dispatch(loadDecks(decks))
        })
    }
}

function deleteDeck(id) {
  return {
    type: DELETE_DECK,
    id,
  }
}

export function handleDeleteDeck(id) {
  return (dispatch, getState) => {
    removeDeck(id)
      .then(() => {
        dispatch(deleteDeck(id))
      })
  }
}

function deleteDecks() {
  return {
    type: DELETE_DECKS,
  }
}

export function handleDeleteDecks() {
  return (dispatch, getState) => {
    removeDecks()
      .then(() => {
        dispatch(deleteDecks())
      })
  }
}
