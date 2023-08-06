import Button from 'components/ui-parts/Button'

interface AnswerButtonProps {
  onClick: () => void
}

const AnswerButton: React.FC<AnswerButtonProps> = (props) => {
  const { onClick } = props
  return <Button text="回答" buttonStyle="danger" onClick={onClick} />
}

export default AnswerButton
