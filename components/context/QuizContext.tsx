import { createContext, useState } from 'react'
import { type AnswerResult } from 'components/models/AnswerResult'

// クイズの回答状況
interface QuizContextType {
  answerResult: AnswerResult
  setAnswerResult: (answerResult: AnswerResult) => void
}

const initAnswerResult: AnswerResult = {
  correctNum: 0,
  inCorrectNum: 0,
  Answer: [],
  Now: 0
}

// contextの作成
export const QuizContext = createContext<QuizContextType>({
  answerResult: initAnswerResult,
  setAnswerResult: (answerResult: AnswerResult) => {}
})

// プロバイダ
export const QuizProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  // 初期値
  const [answerResult, setAnswerResult] =
    useState<AnswerResult>(initAnswerResult)

  return (
    <QuizContext.Provider value={{ answerResult, setAnswerResult }}>
      {children}
    </QuizContext.Provider>
  )
}
