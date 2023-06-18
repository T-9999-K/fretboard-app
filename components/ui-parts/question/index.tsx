import FletBoard from 'components/ui-parts/fletboard'
import AnswerButton from 'components/ui-parts/answerButton'
import { useContext } from 'react'
import { QuizContext } from 'components/context/QuizContext'
import { InitAnswerResult } from 'components/models/AnswerResult'
import { type ChordComposite } from 'components/models/ChordComposite'

interface QuestionProps {
  questionNo: number | 0
  chordComposites: ChordComposite[]
}
const Question: React.FC<QuestionProps> = (props) => {
  const { answerResult, setAnswerResult } = useContext(QuizContext)
  const { chordComposites } = props

  let result = answerResult
  if (answerResult.Quiz.length === 0) {
    // 初回表示
    result = InitAnswerResult(chordComposites)
    setAnswerResult(result)
  }

  // 出題対象のフレットボード
  const stringFlets = result.Quiz[result.Now].StringsFlets

  return (
    <>
      <FletBoard stringsFlets={stringFlets} />
      <AnswerButton />
    </>
  )
}

export default Question
