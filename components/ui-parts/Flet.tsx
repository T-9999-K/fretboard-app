import { useContext, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import PressMark from 'components/ui-parts/PressMark'
import {
  initStringsFlets,
  PressFletMarksContext
} from 'components/context/PressFletMarksContext'
import {
  CHORD_MODE,
  OPEN_FLET_NUM,
  FOURTH_STRING,
  MARKING_FLET_NUM
} from 'components/const/const'
import { type StringsFlets } from 'components/models/StringsFlets'

interface FletProps {
  fletNo: number
  stringsNo: number
  mode: string
  questionNo: number
}

const FletBack = styled.div<{ $fletNo }>`
  position: relative;
  text-align: center;
  vertical-align: middle;
  ${(props) =>
    props.$fletNo === OPEN_FLET_NUM
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

const CircleLabel = styled.span<{
  $fletNo
  $stringsNo
}>`
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
    props.$stringsNo === FOURTH_STRING &&
    MARKING_FLET_NUM.includes(props.$fletNo)
      ? ''
      : 'visibility: hidden;'}
`

const Strings = styled.span<{ $fletNo }>`
  background: linear-gradient(#ffe298, #564101);
  width: 4rem;
  height: 0.3rem;
  display: ${(props) =>
    props.$fletNo === OPEN_FLET_NUM ? 'none;' : 'inline-block;'};
`

// フレット
const Flet: React.FC<FletProps> = (props) => {
  const { fletNo, stringsNo, mode, questionNo } = props
  const { pressFlets, setPressFlets } = useContext(PressFletMarksContext)
  const [pressed, setPressed] = useState(false)

  const onClick = useCallback((): void => {
    if (mode === CHORD_MODE) return
    const newPressFlets = [...pressFlets]
    if (typeof newPressFlets[questionNo] === 'undefined') {
      newPressFlets[questionNo] = initStringsFlets()
    }

    const pressFletNo = newPressFlets[questionNo][stringsNo]
    if (pressFletNo <= fletNo) {
      newPressFlets[questionNo][stringsNo] = !pressed ? fletNo : OPEN_FLET_NUM
    }
    setPressFlets(newPressFlets)
    setPressed(!pressed)
  }, [pressed, pressFlets, mode, questionNo])

  useEffect(() => {
    const newPressFlets: StringsFlets[] = []
    pressFlets.forEach((item, idx) => {
      if (idx === questionNo && typeof item === 'undefined') {
        newPressFlets[idx] = initStringsFlets()
      } else {
        newPressFlets[idx] = item
      }
    })

    const pressFletNo = newPressFlets[questionNo][stringsNo]
    const pressed = pressFletNo === fletNo
    setPressed(pressed)
  }, [pressFlets, mode, questionNo])

  return (
    <FletBack onClick={onClick} $fletNo={fletNo}>
      <Strings $fletNo={fletNo} />
      <CircleLabel $fletNo={fletNo} $stringsNo={stringsNo} />
      <PressMark pressed={pressed} fletNo={fletNo} />
    </FletBack>
  )
}

export default Flet
