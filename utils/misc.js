export function countQuestionsInDeck(deckId, questions) {
  return Object.values(questions)
    .filter((question) => question.deckId === deckId)
    .length
}

export function getQuestionIdsInDeck(deckId, questions) {
  return Object.values(questions)
    .filter((question) => question.deckId === deckId)
    .map((question) => question.id)
}

export function getQuestionsInDeck(deckId, questions) {
  return Object.values(questions)
    .filter((question) => question.deckId === deckId)
}
