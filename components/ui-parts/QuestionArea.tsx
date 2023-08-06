import FletBoard from 'components/ui-parts/FletBoard'
import AnswerArea from 'components/ui-parts/AnswerArea'
import { useCallback, useContext, useState } from 'react'
import { QuizContext } from 'components/context/QuizContext'
import { PressFletMarksContext } from 'components/context/PressFletMarksContext'
import { type AnswerResult, checkAnswer } from 'components/models/AnswerResult'
import { type ChordComposite } from 'components/models/ChordComposite'
import QuizText from 'components/ui-parts/QuizText'
import { COMPOSITE_MODE } from 'components/const/const'
interface QuestionProps {
  questionNo: number | 0
  chordComposites: ChordComposite[]
}
const QuestionArea: React.FC<QuestionProps> = (props) => {
  const { answerResult, setAnswerResult } = useContext(QuizContext)
  const { pressFlets } = useContext(PressFletMarksContext)

  // クイズ
  const { questionNo, chordComposites } = props

  // 出題対象のフレットボード
  const [stringsFlets, setStringsFlets] = useState(
    chordComposites[questionNo].StringsFlets
  )

  // 回答ボタン押下
  const answerClick = useCallback((): void => {
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

    if (checkAnswer(chordComposites[questionNo], answer)) {
      correctNum++
      console.log('正解')
    } else {
      inCorrectNum++
      console.log('不正解')
    }

    const answerClickResult: AnswerResult = {
      correctNum,
      inCorrectNum,
      Answer: answers,
      Now: nowQuestionNo
    }
    setAnswerResult(answerClickResult)
  }, [answerResult])

  // 前へボタン押下
  const prevClick = useCallback((): void => {
    console.log('prev')
    if (answerResult.Now === 0) {
      return
    }

    const answerPrevResult: AnswerResult = {
      correctNum: answerResult.correctNum,
      inCorrectNum: answerResult.inCorrectNum,
      Answer: answerResult.Answer,
      Now: answerResult.Now - 1
    }
    setAnswerResult(answerPrevResult)
    setStringsFlets(chordComposites[answerPrevResult.Now].StringsFlets)
  }, [answerResult])

  // 次へボタン押下
  const nextClick = useCallback((): void => {
    console.log('next')
    if (answerResult.Now === chordComposites.length - 1) {
      return
    }

    const answerNextResult: AnswerResult = {
      correctNum: answerResult.correctNum,
      inCorrectNum: answerResult.inCorrectNum,
      Answer: answerResult.Answer,
      Now: answerResult.Now + 1
    }
    setAnswerResult(answerNextResult)
    setStringsFlets(chordComposites[answerNextResult.Now].StringsFlets)
  }, [answerResult])

  return (
    <>
      <QuizText
        questionNo={questionNo}
        chordComposite={chordComposites[questionNo]}
      />
      <FletBoard stringsFlets={stringsFlets} pressFlets={pressFlets} />
      <AnswerArea
        prevClick={prevClick}
        answerClick={answerClick}
        nextClick={nextClick}
      />
    </>
  )
}

export default QuestionArea
