import { saveNewDeck } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION'

function addDeck(deck) {
  return {
    type: ADD_QUESTION,
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
