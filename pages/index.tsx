import FletBoard from '../components/ui-parts/fletboard'
import AnswerButton from '../components/ui-parts/answerButton'
import { PressFletMarksProvider } from '../components/context/PressFletMarksContext'
import { QuizProvider } from '../components/context/QuizContext'
import '../styles/font.css'
import { useEffect } from 'react'

const FletBoardApp = () => {
    return (
        <>
            <QuizProvider>
                <PressFletMarksProvider>
                    <FletBoard />
                    <AnswerButton />
                </PressFletMarksProvider>
            </QuizProvider>
        </>
    )
}

export default FletBoardApp
