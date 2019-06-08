import { fetchDecks, generateUID } from '../utils/api'
import { handleAddDeck } from './decks.js'
import { handleAddQuestion } from './questions.js'

export function handleLoadDummyData() {
  return (dispatch, getState) => {
    dispatch(handleAddDeck(generateUID(), 'Latin'))
    dispatch(handleAddDeck(generateUID(), 'French'))
    dispatch(handleAddDeck(generateUID(), 'History'))
    fetchDecks()
      .then((decks) => {
        Object.keys(decks).map((deckId) => {
          addQuestionsToDeck(dispatch, deckId)
        })
      })
  }
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
