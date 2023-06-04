import { useContext, useEffect, useState } from 'react'
import FletStrings from '../fletstrings'
import { STRING_COUNT, FIRST_FLET } from 'components/const/const'
import { QuizContext } from 'components/context/QuizContext'
import { AnswerResult } from 'components/models/AnswerResult'
import { StringsFlets } from 'components/models/StringsFlets'

// フレットボード
const FletBoard = () => {
    const { answerResult, setAnswerResult } = useContext(QuizContext)

    const apiHost = process.env.NEXT_PUBLIC_API_HOST
    const path = process.env.NEXT_PUBLIC_QUIZ_API_PATH
    if (!apiHost || !path) {
        // 環境変数読み込み失敗時はエラーとする
        return <p>{'環境変数の読み込みに失敗しました。'}</p>
    }
    const requestURL = apiHost + path

    useEffect(() => {
        const loadQuiz = async () => {
            const response = await fetch(requestURL)
            const responseBody = await response.json()
            const quiz = answerResult.Quiz

            if (Array.isArray(responseBody)) {
                responseBody.forEach((data) => {
                    const stringFlets: StringsFlets = {}
                    if (Array.isArray(data.composition)) {
                        data.composition.forEach((compositeData) => {
                            stringFlets[compositeData.strings] =
                                compositeData.flet
                        })
                    }
                    quiz.push({
                        ChordName: {
                            base: data.name,
                            addSign: data.addSign,
                        },
                        StringsFlets: stringFlets,
                        Mode: data.mode,
                    })
                })
            }

            const initAnswerResult: AnswerResult = {
                correctNum: answerResult.correctNum,
                inCorrectNum: answerResult.inCorrectNum,
                Quiz: quiz,
                Answer: answerResult.Answer,
                Now: answerResult.Now++,
            }
            setAnswerResult(initAnswerResult)
        }

        // クイズのロード
        loadQuiz()
    }, [])

    const fletStringsList: JSX.Element[] = []

    if (answerResult && answerResult.Quiz) {
        for (let i = FIRST_FLET; i <= STRING_COUNT; i++) {
            fletStringsList.push(<FletStrings stringsNo={i} key={i} />)
        }
        console.log('FletBoard display!!')
    }
    return <>{fletStringsList}</>
}

export default FletBoard
