import styled from 'styled-components'
import Flet from './Flet'

interface FletStringsProp {
  stringsNo: number
  min: number
  max: number
  pressedFlet: number | undefined
}

const FletStringsStyle = styled.div`
  display: flex;
`

// 1弦あたりのフレット
const FletStrings: React.FC<FletStringsProp> = (props) => {
  const { stringsNo, min, max, pressedFlet } = props
  const flets: JSX.Element[] = []
  for (let i = min; i <= max; i++) {
    const initPressed = i === pressedFlet
    flets.push(
      <Flet
        key={i}
        stringsNo={stringsNo}
        fletNo={i}
        initPressed={initPressed}
      />
    )
  }
  return <FletStringsStyle>{flets}</FletStringsStyle>
}

export default FletStrings
