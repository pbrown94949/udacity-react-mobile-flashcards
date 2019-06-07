import { ADD_DECK, DELETE_DECK, LOAD_DECKS } from '../actions/decks'

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    case DELETE_DECK:
      console.log('before: ', state)
      const { [action.id]: value, ...rest} = state
      console.log('after: ', rest)
      return {
        ...rest,
      }
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    default:
      return state
  }
}
