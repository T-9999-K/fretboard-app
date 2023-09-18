import FletBoard from 'components/ui-parts/FletBoard'
import { useCallback, useContext, useState } from 'react'
import { QuizContext } from 'components/context/QuizContext'
import { PressFletMarksContext } from 'components/context/PressFletMarksContext'
import { type AnswerResult, checkAnswer } from 'components/models/AnswerResult'
import { type ChordComposite } from 'components/models/ChordComposite'
import QuizText from 'components/ui-parts/QuizText'
import { CHORD_MODE, COMPOSITE_MODE } from 'components/const/const'
import { defaultFlets } from 'components/models/StringsFlets'
import styled from 'styled-components'
import AnswerButton from 'components/ui-parts/AnswerButton'
import MoveButton from 'components/ui-parts/MoveButton'

const AnswerAreaStyle = styled.div`
  display: flex;
  padding: 0.5rem 0.8rem;
  gap: 1rem 5.4rem;
`

const ButtonArea = styled.div`
  min-width: 50px;
`

interface QuestionProps {
  chordComposites: ChordComposite[]
}
const QuestionArea: React.FC<QuestionProps> = (props) => {
  const { answerResult, setAnswerResult } = useContext(QuizContext) // 回答状況
  const { pressFlets, setPressFlets } = useContext(PressFletMarksContext) // 押弦状態
  const [questionNo, setQuestionNo] = useState(0) // クイズ番号
  const { chordComposites } = props // クイズ
  const [stringsFlets, setStringsFlets] = useState(
    chordComposites[questionNo].StringsFlets
  ) // 出題対象のフレットボード

  console.log('===== QuestionArea =====')
  console.log('questionNo:', questionNo)
  console.log('answerResult:', answerResult)
  console.log('chordComposites:', chordComposites)
  console.log('stringsFlets:', stringsFlets)
  console.log('pressFlets:', pressFlets)
  console.log('defaultFlets:', defaultFlets)

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
    const prevQuestionNo = answerResult.Now - 1
    const prevStringsFlets = chordComposites[prevQuestionNo].StringsFlets
    const isChordMode = CHORD_MODE === chordComposites[prevQuestionNo].Mode
    const answerPrevResult: AnswerResult = {
      correctNum: answerResult.correctNum,
      inCorrectNum: answerResult.inCorrectNum,
      Answer: answerResult.Answer,
      Now: prevQuestionNo
    }
    setAnswerResult(answerPrevResult)
    setQuestionNo(prevQuestionNo)
    setStringsFlets(prevStringsFlets)

    const prevPressedFlets =
      typeof answerResult.Answer[prevQuestionNo] === 'undefined'
        ? defaultFlets
        : answerResult.Answer[prevQuestionNo].StringsFlets
    const targetFlets = isChordMode ? prevStringsFlets : prevPressedFlets
    setPressFlets(targetFlets)
  }, [answerResult])

  // 次へボタン押下
  const nextClick = useCallback((): void => {
    const nextQuestionNo = answerResult.Now + 1
    const nextStringsFlets = chordComposites[nextQuestionNo].StringsFlets
    const isChordMode = CHORD_MODE === chordComposites[nextQuestionNo].Mode
    const answerNextResult: AnswerResult = {
      correctNum: answerResult.correctNum,
      inCorrectNum: answerResult.inCorrectNum,
      Answer: answerResult.Answer,
      Now: nextQuestionNo
    }
    setAnswerResult(answerNextResult)
    setQuestionNo(nextQuestionNo)
    setStringsFlets(nextStringsFlets)

    const nextPressedFlets =
      typeof answerResult.Answer[nextQuestionNo] === 'undefined'
        ? defaultFlets
        : answerResult.Answer[nextQuestionNo].StringsFlets
    const targetFlets = isChordMode ? nextStringsFlets : nextPressedFlets
    setPressFlets(targetFlets)
  }, [answerResult])

  return (
    <>
      <QuizText
        questionNo={questionNo}
        chordComposite={chordComposites[questionNo]}
      />
      <FletBoard stringsFlets={stringsFlets} pressFlets={pressFlets} />
      <AnswerAreaStyle>
        <ButtonArea>
          {questionNo > 0 && <MoveButton text={'前へ'} onClick={prevClick} />}
        </ButtonArea>
        <ButtonArea>
          <AnswerButton onClick={answerClick} />
        </ButtonArea>
        <ButtonArea>
          {chordComposites.length - 1 > questionNo && (
            <MoveButton text={'次へ'} onClick={nextClick} />
          )}
        </ButtonArea>
      </AnswerAreaStyle>
    </>
  )
}

export default QuestionArea
