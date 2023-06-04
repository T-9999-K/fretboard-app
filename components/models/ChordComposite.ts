import { StringsFlets } from 'components/models/StringsFlets'
import { ChordName } from 'components/models/ChordName'

export type ChordComposite = {
    ChordName: ChordName
    StringsFlets: StringsFlets
    Mode: 'chord' | 'composite'
}
