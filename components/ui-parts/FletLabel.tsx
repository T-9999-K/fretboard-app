import styled from 'styled-components'
import { OPEN_FLET_NUM } from 'components/const/const'

interface FletLabelProp {
  min: number
  max: number
}

const FletStringsStyle = styled.div`
  display: flex;
`

const Label = styled.div<{ $fletNo }>`
  text-align: center;
  ${(props) =>
    props.$fletNo === OPEN_FLET_NUM
      ? ' padding: 1rem 0.5rem;'
      : ' width: 4.2rem;'}
`

// 1弦あたりのフレット
const FletLabel: React.FC<FletLabelProp> = (props) => {
  const { min, max } = props
  const flets: JSX.Element[] = []
  for (let i = min; i <= max; i++) {
    flets.push(
      <Label key={i} $fletNo={i}>
        {i !== OPEN_FLET_NUM ? i : ''}
      </Label>
    )
  }
  return <FletStringsStyle>{flets}</FletStringsStyle>
}

export default FletLabel
