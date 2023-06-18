import styled from 'styled-components'
import AnswerButton from 'components/ui-parts/answerButton'
import MoveButton from 'components/ui-parts/moveButton'

interface AnswerAreaProp {
  prevClick: () => void
  answerClick: () => void
  nextClick: () => void
}

const AnswerAreaStyle = styled.div`
  display: flex;
  padding: 0.5rem 0.8rem;
  gap: 1rem 5.4rem;
`
const AnswerArea: React.FC<AnswerAreaProp> = (props) => {
  const { prevClick, answerClick, nextClick } = props
  return (
    <AnswerAreaStyle>
      <MoveButton text={'前へ'} onClick={prevClick} />
      <AnswerButton onClick={answerClick} />
      <MoveButton text={'次へ'} onClick={nextClick} />
    </AnswerAreaStyle>
  )
}

export default AnswerArea
