import TextLabel from 'components/ui-parts/TextLabel'
import {
  type ChordComposite,
  getQuizText
} from 'components/models/ChordComposite'

interface LabelProps {
  questionNo: number
  chordComposite: ChordComposite
}

const QuizText: React.FC<LabelProps> = (props) => {
  const { questionNo, chordComposite } = props
  const text = getQuizText(questionNo, chordComposite)
  return <TextLabel text={text} />
}

export default QuizText
