import { type StringsFlets } from 'components/models/StringsFlets'
import { type ChordName } from 'components/models/ChordName'

export interface ChordComposite {
  ChordName: ChordName
  StringsFlets: StringsFlets
  Mode: 'chord' | 'composite'
}
