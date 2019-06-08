import { fetchQuestions, removeQuestions, saveNewQuestion } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION'
export const DELETE_QUESTIONS = 'DELETE_QUESTIONS'
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion(question) {
    return (dispatch, getState) => {
      saveNewQuestion(question)
        .then((deck) => {
          dispatch(addQuestion(question))
        })
    }
}

function loadQuestions(questions) {
  return {
    type: LOAD_QUESTIONS,
    questions,
  }
}

export function handleLoadQuestions() {
    return (dispatch, getState) => {
      fetchQuestions()
        .then((questions) => {
          dispatch(loadQuestions(questions))
        })
    }
}

function deleteQuestions() {
  return {
    type: DELETE_QUESTIONS,
  }
}

export function handleDeleteQuestions() {
  return (dispatch, getState) => {
    removeQuestions()
      .then(() => {
        dispatch(deleteQuestions())
      })
  }
}
