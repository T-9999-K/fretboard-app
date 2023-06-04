import { ChordComposite } from 'components/models/ChordComposite'
export type AnswerResult = {
    correctNum: number
    inCorrectNum: number
    Quiz: ChordComposite[]
    Answer: ChordComposite[]
    Now: number
}
