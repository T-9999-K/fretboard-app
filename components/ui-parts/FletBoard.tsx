import FletStrings from 'components/ui-parts/FletStrings'
import FletLabel from 'components/ui-parts/FletLabel'
import { STRING_COUNT, FIRST_FLET } from 'components/const/const'
import {
  type StringsFlets,
  GetMaxFlet,
  GetMinFlet
} from 'components/models/StringsFlets'
import styled from 'styled-components'

const FletBoardStyle = styled.div`
  width: 100%;
`
interface FletBoardProps {
  stringsFlets: StringsFlets
  mode: string
  questionNo: number
}

// フレットボード
const FletBoard: React.FC<FletBoardProps> = (props) => {
  const { stringsFlets, mode, questionNo } = props
  const fletStringsList: JSX.Element[] = []
  for (let i = FIRST_FLET; i <= STRING_COUNT; i++) {
    fletStringsList.push(
      <FletStrings
        stringsNo={i}
        key={i}
        min={GetMinFlet(stringsFlets)}
        max={GetMaxFlet(stringsFlets)}
        mode={mode}
        questionNo={questionNo}
      />
    )
    if (i === STRING_COUNT) {
      fletStringsList.push(
        <FletLabel
          key={`fletLabel-${i}`}
          min={GetMinFlet(stringsFlets)}
          max={GetMaxFlet(stringsFlets)}
        />
      )
    }
  }
  return <FletBoardStyle>{fletStringsList}</FletBoardStyle>
}

export default FletBoard
