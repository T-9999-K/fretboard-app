import styled from 'styled-components'
import Flet from '../flet'

interface FletStringsProp {
  stringsNo: number
  min: number
  max: number
}

const FletStringsStyle = styled.div`
  display: flex;
`

// 1弦あたりのフレット
const FletStrings: React.FC<FletStringsProp> = (props) => {
  const { stringsNo, min, max } = props
  const flets: JSX.Element[] = []
  for (let i = min; i <= max; i++) {
    flets.push(<Flet stringsNo={stringsNo} fletNo={i} key={i} />)
  }
  return <FletStringsStyle>{flets}</FletStringsStyle>
}

export default FletStrings
