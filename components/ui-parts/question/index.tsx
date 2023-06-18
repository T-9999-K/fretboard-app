import FletBoard from 'components/ui-parts/fletboard'
import AnswerArea from 'components/ui-parts/answerArea'
import { useContext } from 'react'
import { QuizContext } from 'components/context/QuizContext'
import { PressFletMarksContext } from 'components/context/PressFletMarksContext'
import {
  type AnswerResult,
  InitAnswerResult,
  checkAnswer
} from 'components/models/AnswerResult'
import { type ChordComposite } from 'components/models/ChordComposite'
import QuizText from 'components/ui-parts/quizText'
import { COMPOSITE_MODE } from 'components/const/const'
interface QuestionProps {
  questionNo: number | 0
  chordComposites: ChordComposite[]
}
const Question: React.FC<QuestionProps> = (props) => {
  const { answerResult, setAnswerResult } = useContext(QuizContext)
  const { pressFlets } = useContext(PressFletMarksContext)
  const { chordComposites } = props

  let result = answerResult
  if (answerResult.Quiz.length === 0) {
    // 初回表示
    result = InitAnswerResult(chordComposites)
    setAnswerResult(result)
  }

  // 出題対象のフレットボード
  const questionNo = result.Now
  const chordComposite = result.Quiz[questionNo]
  const stringFlets = chordComposite.StringsFlets

  // 回答ボタン押下
  const answerClick = (): void => {
    let correctNum = answerResult.correctNum
    let inCorrectNum = answerResult.inCorrectNum
    const nowQuestionNo = answerResult.Now
    const answers = answerResult.Answer
    const answer: ChordComposite = {
      ChordName: {
        base: '',
        addSign: ''
      },
      StringsFlets: pressFlets,
      Mode: COMPOSITE_MODE
    }

    if (answerResult.Answer.length === 0) {
      answers.push(answer)
    } else {
      answers[nowQuestionNo] = answer
    }

    if (checkAnswer(chordComposite, answer)) {
      correctNum++
      console.log('正解')
    } else {
      inCorrectNum++
      console.log('不正解')
    }

    const answerClickResult: AnswerResult = {
      correctNum,
      inCorrectNum,
      Quiz: result.Quiz,
      Answer: answers,
      Now: nowQuestionNo
    }
    console.log(answerClickResult)
    setAnswerResult(answerClickResult)
  }

  // 前へボタン押下
  const prevClick = (): void => {
    console.log('prev')
  }

  // 次へボタン押下
  const nextClick = (): void => {
    console.log('next')
  }

  return (
    <>
      <QuizText questionNo={questionNo} chordComposite={chordComposite} />
      <FletBoard stringsFlets={stringFlets} />
      <AnswerArea
        prevClick={prevClick}
        answerClick={answerClick}
        nextClick={nextClick}
      />
    </>
  )
}

export default Question
