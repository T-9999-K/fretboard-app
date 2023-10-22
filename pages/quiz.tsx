import '../styles/font.css'

import { PressFletMarksProvider } from '../components/context/PressFletMarksContext'
import { QuizProvider } from 'components/context/QuizContext'
import { type GetServerSideProps, type NextPage } from 'next'
import { type ChordComposite } from 'components/models/ChordComposite'
import QuestionArea from 'components/ui-parts/QuestionArea'
import { getQuiz } from 'services/getQuiz'
import AppHeader from 'components/ui-parts/AppHeader'
import AppContent from 'components/ui-parts/AppContent'

interface SSRProps {
  chordComposites: ChordComposite[]
}

const Quiz: NextPage<SSRProps> = (props) => {
  const { chordComposites } = props
  return (
    <>
      <QuizProvider>
        <PressFletMarksProvider>
          <AppHeader />
          <AppContent>
            <QuestionArea chordComposites={chordComposites} />
          </AppContent>
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
