import { ADD_QUESTION, DELETE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case DELETE_QUESTIONS:
      return {}
    default:
      return state
  }
}
