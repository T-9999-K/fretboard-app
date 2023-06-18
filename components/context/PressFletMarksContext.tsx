import { createContext, useState } from 'react'
import { type StringsFlets } from 'components/models/StringsFlets'
interface PressFletContextType {
  pressFlets: StringsFlets
  setPressFlets: (pressFlets: Record<number, number>) => void
}

// フレットの初期状態
const defaultFlets: StringsFlets = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
}

// contextの作成
export const PressFletMarksContext = createContext<PressFletContextType>({
  pressFlets: [],
  setPressFlets: (pressFlets: StringsFlets) => {}
})

// プロバイダ
export const PressFletMarksProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  // 押弦状態の初期値
  const [pressFlets, setPressFlets] = useState<StringsFlets>(defaultFlets)

  return (
    <PressFletMarksContext.Provider value={{ pressFlets, setPressFlets }}>
      {children}
    </PressFletMarksContext.Provider>
  )
}
