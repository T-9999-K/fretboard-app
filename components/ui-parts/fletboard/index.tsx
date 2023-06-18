import FletStrings from '../fletstrings'
import { STRING_COUNT, FIRST_FLET } from 'components/const/const'
import {
  type StringsFlets,
  GetMaxFlet,
  GetMinFlet
} from 'components/models/StringsFlets'

interface FletBoardProps {
  stringsFlets: StringsFlets
}

// フレットボード
const FletBoard: React.FC<FletBoardProps> = (props) => {
  const { stringsFlets } = props
  const fletStringsList: JSX.Element[] = []
  for (let i = FIRST_FLET; i <= STRING_COUNT; i++) {
    fletStringsList.push(
      <FletStrings
        stringsNo={i}
        key={i}
        min={GetMinFlet(stringsFlets)}
        max={GetMaxFlet(stringsFlets)}
      />
    )
  }
  console.log('FletBoard display!!')
  return <>{fletStringsList}</>
}

export default FletBoard
