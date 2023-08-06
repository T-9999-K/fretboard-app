import Button from 'components/ui-parts/Button'

interface MoveButtonProps {
  text: string
  onClick: () => void
}

const MoveButton: React.FC<MoveButtonProps> = (props) => {
  const { text, onClick } = props
  return <Button text={text} buttonStyle="primary" onClick={onClick} />
}

export default MoveButton
