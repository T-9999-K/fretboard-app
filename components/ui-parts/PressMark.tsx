import styled from 'styled-components'
import { OPEN_FLET_NUM } from 'components/const/const'
interface PressMarkProps {
  fletNo: number
  pressed: boolean
}

const Circle = styled.span<PressMarkProps>`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #d7d7d7;
  border-radius: 50%;
  position: absolute;
  top: 0.2rem;
  ${(props) =>
    props.fletNo === OPEN_FLET_NUM ? 'left: 0.2rem;' : 'left: 1.4rem;'}
  z-index: 1;
  ${(props) =>
    props.fletNo !== OPEN_FLET_NUM && props.pressed
      ? ''
      : 'visibility: hidden;'}
`

// 押弦したマーク
const PressMark: React.FC<PressMarkProps> = (props) => {
  const { pressed, fletNo } = props
  return <Circle pressed={pressed} fletNo={fletNo} />
}

export default PressMark
