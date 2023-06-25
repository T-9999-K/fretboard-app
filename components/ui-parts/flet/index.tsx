import { useContext, useState } from 'react'
import styled from 'styled-components'
import PressMark from 'components/ui-parts/pressMark'
import { PressFletMarksContext } from 'components/context/PressFletMarksContext'
import {
  OPEN_FLET_NUM,
  FOURTH_STRING,
  MARKING_FLET_NUM
} from 'components/const/const'

interface FletProps {
  fletNo: number
  stringsNo: number
}

const FletBack = styled.div<FletProps>`
  position: relative;
  text-align: center;
  vertical-align: middle;
  ${(props) =>
    props.fletNo === OPEN_FLET_NUM
      ? `
      background-color: gray;
      padding: 1rem 0.5rem;
      `
      : `
      background-color: black;
      width: 4rem;
      height: 2rem;
      border-right: 0.2rem solid gray;
    `}
`

const CircleLabel = styled.span<FletProps>`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #d7d7d7;
  border-radius: 50%;
  position: absolute;
  top: -0.7rem;
  left: 1.4rem;
  opacity: 0.5;
  ${(props) =>
    props.stringsNo === FOURTH_STRING && MARKING_FLET_NUM.includes(props.fletNo)
      ? ''
      : 'visibility: hidden;'}
`

const Strings = styled.span<FletProps>`
  background: linear-gradient(#ffe298, #564101);
  width: 4rem;
  height: 0.3rem;
  display: ${(props) =>
    props.fletNo === OPEN_FLET_NUM ? 'none;' : 'inline-block;'};
`

// フレット
const Flet: React.FC<FletProps> = (props) => {
  const { fletNo, stringsNo } = props
  const [pressed, setPressed] = useState(false)
  const { pressFlets, setPressFlets } = useContext(PressFletMarksContext)
  const onClick = (): void => {
    setPressed(!pressed)

    pressFlets[stringsNo] = !pressed ? fletNo : OPEN_FLET_NUM
    setPressFlets(pressFlets)
  }

  return (
    <FletBack stringsNo={stringsNo} fletNo={fletNo} onClick={onClick}>
      <Strings stringsNo={stringsNo} fletNo={fletNo} />
      <CircleLabel stringsNo={stringsNo} fletNo={fletNo} />
      <PressMark pressed={pressed} fletNo={fletNo} />
    </FletBack>
  )
}

export default Flet
