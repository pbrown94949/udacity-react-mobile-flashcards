import { ADD_QUESTION, DELETE_QUESTIONS, LOAD_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case DELETE_QUESTIONS:
      return {}
    case LOAD_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    default:
      return state
  }
}
