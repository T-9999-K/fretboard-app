import FletStrings from 'components/ui-parts/FletStrings'
import FletLabel from 'components/ui-parts/FletLabel'
import { STRING_COUNT, FIRST_FLET } from 'components/const/const'
import {
  type StringsFlets,
  GetMaxFlet,
  GetMinFlet
} from 'components/models/StringsFlets'

interface FletBoardProps {
  stringsFlets: StringsFlets
  pressFlets: StringsFlets
}

// フレットボード
const FletBoard: React.FC<FletBoardProps> = (props) => {
  const { stringsFlets, pressFlets } = props
  const fletStringsList: JSX.Element[] = []
  for (let i = FIRST_FLET; i <= STRING_COUNT; i++) {
    fletStringsList.push(
      <FletStrings
        stringsNo={i}
        key={i}
        min={GetMinFlet(stringsFlets)}
        max={GetMaxFlet(stringsFlets)}
        pressedFlet={pressFlets[i]}
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
  return <>{fletStringsList}</>
}

export default FletBoard
