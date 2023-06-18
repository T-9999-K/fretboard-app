import { type ChordComposite } from 'components/models/ChordComposite'
export interface AnswerResult {
  correctNum: number
  inCorrectNum: number
  Quiz: ChordComposite[]
  Answer: ChordComposite[]
  Now: number
}

export const InitAnswerResult = (quiz: ChordComposite[]): AnswerResult => {
  const result: AnswerResult = {
    correctNum: 0,
    inCorrectNum: 0,
    Quiz: quiz,
    Answer: [],
    Now: 0
  }
  return result
}
