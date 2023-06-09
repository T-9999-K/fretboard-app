import '../styles/font.css'

import { PressFletMarksProvider } from '../components/context/PressFletMarksContext'
import { QuizProvider } from 'components/context/QuizContext'
import { type GetServerSideProps, type NextPage } from 'next'
import { type ChordComposite } from 'components/models/ChordComposite'
import Question from 'components/ui-parts/question'
import { getQuiz } from 'services/getQuiz'

interface SSRProps {
  chordComposites: ChordComposite[]
}

const initQuestionNo = 0

const Quiz: NextPage<SSRProps> = (props) => {
  const { chordComposites } = props
  return (
    <>
      <QuizProvider>
        <PressFletMarksProvider>
          <Question
            questionNo={initQuestionNo}
            chordComposites={chordComposites}
          />
        </PressFletMarksProvider>
      </QuizProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const quiz = await getQuiz()
  return {
    props: {
      chordComposites: quiz
    }
  }
}

export default Quiz
