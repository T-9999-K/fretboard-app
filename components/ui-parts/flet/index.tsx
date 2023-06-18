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

const OPEN_FLET_NUM_BACK = styled.div`
  background-color: gray;
  text-align: center;
  vertical-align: middle;
  padding: 1rem 0.5rem;
  position: relative;
`
const FletBack = styled.div`
  background-color: black;
  text-align: center;
  width: 4rem;
  height: 2rem;
  vertical-align: middle;
  border-right: 0.2rem solid gray;
  position: relative;
`

const Strings = styled.span`
  background: linear-gradient(#ffe298, #564101);
  width: 4rem;
  height: 0.3rem;
  display: inline-block;
`

const CircleLabel = styled.span`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  background-color: #d7d7d7;
  border-radius: 50%;
  position: absolute;
  top: -0.7rem;
  left: 1.4rem;
  opacity: 0.5;
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

  if (fletNo === OPEN_FLET_NUM) {
    return (
      <OPEN_FLET_NUM_BACK onClick={onClick}>
        <PressMark pressed={pressed} fletNo={fletNo} />
      </OPEN_FLET_NUM_BACK>
    )
  }

  if (stringsNo === FOURTH_STRING && MARKING_FLET_NUM.includes(fletNo)) {
    return (
      <FletBack onClick={onClick}>
        <Strings />
        <CircleLabel />
        <PressMark pressed={pressed} fletNo={fletNo} />
      </FletBack>
    )
  }

  return (
    <FletBack onClick={onClick}>
      <Strings />
      <PressMark pressed={pressed} fletNo={fletNo} />
    </FletBack>
  )
}

export default Flet
