import { createContext, useState } from 'react'
import { type StringsFlets } from 'components/models/StringsFlets'
import { STRING_COUNT, OPEN_FLET_NUM } from 'components/const/const'
interface PressFletContextType {
  pressFlets: StringsFlets[]
  setPressFlets: (pressFlets: StringsFlets[]) => void
}

// contextの作成
export const PressFletMarksContext = createContext<PressFletContextType>({
  pressFlets: [],
  setPressFlets: (pressFlets: StringsFlets[]) => {}
})

// プロバイダ
export const PressFletMarksProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  // 押弦状態の初期値
  const [pressFlets, setPressFlets] = useState<StringsFlets[]>([
    initStringsFlets()
  ])

  return (
    <PressFletMarksContext.Provider value={{ pressFlets, setPressFlets }}>
      {children}
    </PressFletMarksContext.Provider>
  )
}

export const initStringsFlets = (): StringsFlets => {
  const stringsFlets: StringsFlets = {}
  for (let i = 1; i <= STRING_COUNT; i++) {
    stringsFlets[i] = OPEN_FLET_NUM
  }
  return stringsFlets
}
