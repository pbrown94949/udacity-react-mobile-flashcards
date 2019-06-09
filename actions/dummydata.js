import { fetchDecks } from '../utils/api'
import { generateUID } from '../utils/misc'
import { handleAddDeck } from './decks.js'
import { handleAddQuestion } from './questions.js'

export function handleLoadDummyData() {
  return async (dispatch, getState) => {
    addDeck(dispatch, 'Latin')
    addDeck(dispatch, 'French')
    addDeck(dispatch, 'History')
    fetchDecks()
      .then((decks) => {
        Object.keys(decks).map((deckId) => {
          addQuestionsToDeck(dispatch, deckId)
        })
      })
    addDeck(dispatch, 'Chemistry')
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
  addQuestionToDeck(dispatch, deckId, 'Where?', 'There')
  addQuestionToDeck(dispatch, deckId, 'Why?', 'Because')
  addQuestionToDeck(dispatch, deckId, 'How?', 'Quickly')
}

async function addQuestionToDeck(dispatch, deckId, question, answer) {
  dispatch(handleAddQuestion({
    id: generateUID(),
    question,
    answer,
    deckId,
  }))
}
