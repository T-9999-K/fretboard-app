import FletBorad from '../components/ui-parts/fletboard'
import AnswerButton from '../components/ui-parts/answerButton'
import { PressFletMarksProvider } from '../components/context/PressFletMarksContext'
import '../styles/font.css'

const Sample = () => {
  return (
    <>
      <PressFletMarksProvider>
        <FletBorad />
        <AnswerButton />
      </PressFletMarksProvider>
    </>
  )
}

export default Sample
