import { ADD_DECK, DELETE_DECK, DELETE_DECKS, LOAD_DECKS } from '../actions/decks'

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    case DELETE_DECK:
      const { [action.id]: value, ...rest} = state
      return {
        ...rest,
      }
    case DELETE_DECKS:
      return {}
    case LOAD_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    default:
      return state
  }
}
