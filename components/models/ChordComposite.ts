import { type StringsFlets } from 'components/models/StringsFlets'
import { type ChordName } from 'components/models/ChordName'
import { COMPOSITE_MODE } from 'components/const/const'

export interface ChordComposite {
  ChordName: ChordName
  StringsFlets: StringsFlets
  Mode: 'chord' | 'composite'
}

export const getQuizText = (
  questionNo: number,
  chordComposite: ChordComposite
): string => {
  let text = ''
  const questionNoText = 'Q' + String(questionNo + 1) + '.'
  if (chordComposite.Mode === COMPOSITE_MODE) {
    text =
      '「' + getChordName(chordComposite.ChordName) + '」コードの構成音は？'
  } else {
    text = 'この構成音のコードは？'
  }

  return questionNoText + text
}

export const getChordName = (chordName: ChordName): string => {
  return chordName.base + chordName.addSign
}
