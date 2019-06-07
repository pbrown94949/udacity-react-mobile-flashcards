import { fetchDecks, removeDeck, saveNewDeck } from '../utils/api'

export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const LOAD_DECKS = 'LOAD_DECKS'

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck(name) {
    return (dispatch, getState) => {
      saveNewDeck(name)
        .then((deck) => {
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
