import { createContext, useContext, useState } from 'react'

type PressFletContextType = {
  pressFlets: { [key: number]: number }
  setPressFlets: (pressFlets: { [key: number]: number }) => void
}

// フレットの初期状態
const defaultFlets: { [key: number]: number } = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
}

// contextの作成
export const PressFletMarksContext = createContext<PressFletContextType>({
  pressFlets: [],
  setPressFlets: (pressFlets: { [key: number]: number }) => {},
})

// プロバイダ
export const PressFletMarksProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  // 押弦状態の初期値
  const [pressFlets, setPressFlets] = useState<{ [key: number]: number }>(
    defaultFlets
  )

  return (
    <PressFletMarksContext.Provider value={{ pressFlets, setPressFlets }}>
      {children}
    </PressFletMarksContext.Provider>
  )
}
