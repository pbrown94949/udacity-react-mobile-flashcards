import { saveNewDeck } from '../utils/api'

export const ADD_DECK = 'ADD_DECK'

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck({ name }) {
    return (dispatch, getState) => {
      saveNewDeck(name)
        .then((deck) => {
          dispatch(addDeck(deck))
        })
    }
}
