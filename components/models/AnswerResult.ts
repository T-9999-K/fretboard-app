import { type ChordComposite } from 'components/models/ChordComposite'
import { CHORD_MODE, COMPOSITE_MODE } from 'components/const/const'
export interface AnswerResult {
  correctNum: number
  inCorrectNum: number
  Answer: ChordComposite[]
  Now: number
}

export const InitAnswerResult = (quiz: ChordComposite[]): AnswerResult => {
  const result: AnswerResult = {
    correctNum: 0,
    inCorrectNum: 0,
    Answer: [],
    Now: 0
  }
  return result
}

// 問題の正誤を返す
export const checkAnswer = (
  quiz: ChordComposite,
  answer: ChordComposite
): boolean => {
  if (quiz.Mode === CHORD_MODE) {
    return quiz.ChordName === answer.ChordName
  }

  if (quiz.Mode === COMPOSITE_MODE) {
    let noMatchCount = 0
    for (const key of Object.keys(quiz.StringsFlets)) {
      if (quiz.StringsFlets[key] !== answer.StringsFlets[key]) {
        noMatchCount++
      }
    }
    return noMatchCount === 0
  }
  return false
}
