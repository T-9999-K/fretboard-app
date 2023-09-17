import styled from 'styled-components'
import { getBackGroundColor } from 'util/style/style'
interface ButtonProps {
  text: string
  buttonStyle: string
  onClick: () => void
}

const ButtonStyle = styled.button<{ $styleType }>`
  ${(props) => getBackGroundColor(props.$styleType)};
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.8;
  }
  &:active {
    -webkit-transform: translate(0, 2px);
    -moz-transform: translate(0, 2px);
    transform: translate(0, 2px);
    border-bottom: none;
  }
`

const Button: React.FC<ButtonProps> = (props) => {
  const { text, buttonStyle, onClick } = props
  return (
    <ButtonStyle $styleType={buttonStyle} onClick={onClick}>
      {text}
    </ButtonStyle>
  )
}

export default Button
