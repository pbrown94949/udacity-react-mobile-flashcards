import { fetchDecks, generateUID } from '../utils/api'
import { handleAddDeck } from './decks.js'
import { handleAddQuestion } from './questions.js'

export function handleLoadDummyData() {
  return (dispatch, getState) => {
    addDeck(dispatch, 'Latin')
    addDeck(dispatch, 'French')
    addDeck(dispatch, 'History')
    fetchDecks()
      .then((decks) => {
        Object.keys(decks).map((deckId) => {
          addQuestionsToDeck(dispatch, deckId)
        })
      })
  }
}

function addDeck(dispatch, name) {
  dispatch(handleAddDeck({
    id: generateUID(),
    name,
  }))
}

function addQuestionsToDeck(dispatch, deckId) {
  addQuestionToDeck(dispatch, deckId, 'Who?', 'You')
  addQuestionToDeck(dispatch, deckId, 'What?', 'This')
  addQuestionToDeck(dispatch, deckId, 'When?', 'Now')
  //bleep(dispatch, id, 'Where?', 'There')
  //bleep(dispatch, id, 'Why?', 'Because')
  //bleep(dispatch, id, 'How?', 'Quickly')
}

function addQuestionToDeck(dispatch, deckId, question, answer) {
  dispatch(handleAddQuestion({
    id: generateUID(),
    question,
    answer,
    deckId,
  }))
}
