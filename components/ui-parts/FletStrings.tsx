import styled from 'styled-components'
import Flet from './Flet'

interface FletStringsProp {
  stringsNo: number
  min: number
  max: number
  mode: string
  questionNo: number
}

const FletStringsStyle = styled.div`
  display: flex;
`

// 1弦あたりのフレット
const FletStrings: React.FC<FletStringsProp> = (props) => {
  const { stringsNo, min, max, mode, questionNo } = props
  const flets: JSX.Element[] = []
  for (let i = min; i <= max; i++) {
    flets.push(
      <Flet
        key={i}
        stringsNo={stringsNo}
        fletNo={i}
        mode={mode}
        questionNo={questionNo}
      />
    )
  }
  return <FletStringsStyle>{flets}</FletStringsStyle>
}

export default FletStrings
