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
import { initStringsFlets } from './../context/PressFletMarksContext'
import SelectList from './SelectList'

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
  const isChordMode = CHORD_MODE === chordComposites[questionNo].Mode
  //  const [baseChord, setBaseChord] = useState('')
  //  const [addSign, setAddSign] = useState('')

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
      StringsFlets: pressFlets[nowQuestionNo],
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
    const answerPrevResult: AnswerResult = {
      correctNum: answerResult.correctNum,
      inCorrectNum: answerResult.inCorrectNum,
      Answer: answerResult.Answer,
      Now: prevQuestionNo
    }
    setAnswerResult(answerPrevResult)
    setQuestionNo(prevQuestionNo)
    setStringsFlets(prevStringsFlets)
  }, [answerResult])

  // 次へボタン押下
  const nextClick = useCallback((): void => {
    const nextQuestionNo = answerResult.Now + 1
    const nextStringsFlets = chordComposites[nextQuestionNo].StringsFlets
    const answerNextResult: AnswerResult = {
      correctNum: answerResult.correctNum,
      inCorrectNum: answerResult.inCorrectNum,
      Answer: answerResult.Answer,
      Now: nextQuestionNo
    }
    setAnswerResult(answerNextResult)
    setQuestionNo(nextQuestionNo)
    setStringsFlets(nextStringsFlets)

    const isNextChordMode = CHORD_MODE === chordComposites[nextQuestionNo].Mode
    const newPressFlets = [...pressFlets]
    const targetFlets = isNextChordMode ? nextStringsFlets : initStringsFlets()
    if (typeof newPressFlets[nextQuestionNo] === 'undefined') {
      newPressFlets[nextQuestionNo] = targetFlets
    }
    setPressFlets(newPressFlets)
  }, [answerResult])

  return (
    <>
      <QuizText
        questionNo={questionNo}
        chordComposite={chordComposites[questionNo]}
      />
      <FletBoard
        stringsFlets={stringsFlets}
        mode={chordComposites[questionNo].Mode}
        questionNo={questionNo}
      />
      {isChordMode && (
        <>
          <SelectList label={'baseChord'} />
          <SelectList label={'addSign'} />
        </>
      )}
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
